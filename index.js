const express = require('express')
const exphbs = require('express-handlebars')
const XeroClient = require('xero-node').AccountingAPIClient;
let app = express()
let hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: `${__dirname}/views/layouts`
})

const config = {
    "appType": "public",
    "consumerKey": "consumerKey...",
    "consumerSecret": "consumerSecret...",
    "callbackUrl": "http://localhost:3000/callback"
}

//Set the view engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
//Set the static files directory
app.use(express.static(`${__dirname}/views/assets`))
// render the main.hbs layout and the index.hbs file
app.get('/', (req, res) => {
    res.render('index')
})

oauthSecret = ''

app.get('/connect', (req, res) => {
    (async () => {
        let xero = new XeroClient(config);
        const requestToken = await xero.oauth1Client.getRequestToken();
        oauthSecret = requestToken.oauth_token_secret;
        authUrl = xero.oauth1Client.buildAuthoriseUrl(requestToken);
        res.redirect(authUrl)
    })();
})


//Set up the callback
app.get('/callback', (req, res) => {
    debugger;
    let xero = new XeroClient(config);
    const oauth_verifier = req.query.oauth_verifier;
    const savedRequestToken = {
        oauth_token: req.query.oauth_token,
        oauth_token_secret: oauthSecret
    };
    xero.oauth1Client.swapRequestTokenforAccessToken(savedRequestToken, oauth_verifier)
        .then(accessToken => {
            accessToken.org = req.query.org
            return postInvoice(accessToken)
        })
        
})

const postInvoice = (accessToken) => {
   const xero2 = new XeroClient(config, accessToken);
    const newInvoice = {
        Type: "ACCPAY",
        Contact: {
            Name: "test"
        },
        Date: '2018-06-20',
        DueDate: '2018-06-20',
        LineAmountTypes: "Inclusive",
        InvoiceNumber: 'test-01',
        LineItems: [{
            Description: 'test',
            Quantity: 1,
            UnitAmount: 1,
            AccountCode: 401,
        }],
    }
    return xero2.invoices.create(newInvoice)
    .then(invoice => {
        const invoiceID = invoice.Invoices[0].InvoiceID;

        //save file to local machine and update fileName and pathToUpload below
        let newAttachment = {
            entityId: invoiceID,
            fileName: "test.pdf",
            includeOnline: true,
            pathToUpload: '/Users/alastairayliffe/Desktop/test.pdf',
            MimeType: "application/pdf"
        }
        return xero2.invoices.attachments.uploadAttachment(newAttachment)
    })
    .then(attachments => {
        //Attachment has been created
        console.log("attachment complete", attachments)
        return attachments.entities[0];
    })
    .catch(err => {
        console.log("attachment error", err)
        return err
    })

}

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
