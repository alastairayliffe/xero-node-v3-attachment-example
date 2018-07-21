import { BaseAPIClient, XeroClientConfiguration } from '../../BaseAPIClient';
import { IOAuth1HttpClient, AccessToken } from '../../OAuth1HttpClient';
export declare class TestAPIClient extends BaseAPIClient {
    constructor(xeroConfig: XeroClientConfiguration, authState?: AccessToken, _oauthClient?: IOAuth1HttpClient);
}
