"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var BaseAPIClient_1 = require("./internals/BaseAPIClient");
var utils_1 = require("./internals/utils");
var AccountingAPIClient = /** @class */ (function (_super) {
    __extends(AccountingAPIClient, _super);
    function AccountingAPIClient(options, authState, _oAuth1HttpClient) {
        var _this = _super.call(this, options, authState, { apiBasePath: '/api.xro/2.0/' }, _oAuth1HttpClient) || this;
        _this.accounts = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'accounts';
                    if (args && args.AccountID) {
                        endpoint = endpoint + '/' + args.AccountID;
                        delete args.AccountID; // remove from query string
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (account) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'accounts';
                    return [2 /*return*/, this.oauth1Client.put(endpoint, account)];
                });
            }); },
            update: function (account, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'accounts';
                    if (args && args.AccountID) {
                        endpoint = endpoint + '/' + args.AccountID;
                        delete args.AccountID; // remove from query string
                    }
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, account)];
                });
            }); },
            delete: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'accounts/' + args.AccountID;
                    return [2 /*return*/, this.oauth1Client.delete(endpoint)];
                });
            }); },
            attachments: _this.generateAttachmentsEndpoint('accounts')
        };
        _this.bankTransactions = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'banktransactions';
                    if (args && args.BankTransactionID) {
                        endpoint = endpoint + '/' + args.BankTransactionID;
                        delete args.BankTransactionID; // remove from query string
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (bankTransaction, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'banktransactions' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, bankTransaction)];
                });
            }); },
            update: function (bankTransaction, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'banktransactions' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, bankTransaction)];
                });
            }); },
            attachments: _this.generateAttachmentsEndpoint('banktransactions'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'banktransactions';
                        if (args && args.BankTransactionID) {
                            endpoint = endpoint + '/' + args.BankTransactionID;
                            delete args.BankTransactionID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.bankTransfers = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'banktransfers';
                    if (args && args.BankTransferID) {
                        endpoint = endpoint + '/' + args.BankTransferID;
                        delete args.BankTransferID;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, this.generateHeader(args))];
                });
            }); },
            create: function (bankTransfers, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'banktransfers';
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, bankTransfers)];
                });
            }); },
            attachments: _this.generateAttachmentsEndpoint('banktransfers'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'banktransfers';
                        if (args && args.BankTransferID) {
                            endpoint = endpoint + '/' + args.BankTransferID;
                            delete args.BankTransferID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.brandingThemes = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'brandingthemes';
                    if (args && args.BrandingThemeID) {
                        endpoint = endpoint + '/' + args.BrandingThemeID;
                        delete args.BrandingThemeID;
                    }
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); }
        };
        _this.contactGroups = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'contactgroups';
                    if (args && args.ContactGroupID) {
                        endpoint = endpoint + '/' + args.ContactGroupID;
                        delete args.ContactGroupID;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            create: function (contactGroups, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'contactgroups' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, contactGroups)];
                });
            }); },
            update: function (contactGroups, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'contactgroups';
                    if (args && args.ContactGroupID) {
                        endpoint = endpoint + '/' + args.ContactGroupID;
                        delete args.ContactGroupID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, contactGroups)];
                });
            }); },
            contacts: {
                delete: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'contactgroups';
                        if (args && args.ContactGroupID) {
                            endpoint = endpoint + '/' + args.ContactGroupID + '/contacts';
                            delete args.ContactGroupID;
                            if (args.ContactID) {
                                endpoint = endpoint + '/' + args.ContactID;
                                delete args.ContactID;
                            }
                        }
                        endpoint += utils_1.generateQueryString(args, true);
                        return [2 /*return*/, this.oauth1Client.delete(endpoint)];
                    });
                }); },
                create: function (contact, args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'contactgroups';
                        if (args && args.ContactGroupID) {
                            endpoint = endpoint + '/' + args.ContactGroupID + '/contacts';
                            delete args.ContactGroupID;
                        }
                        endpoint += utils_1.generateQueryString(args, true);
                        return [2 /*return*/, this.oauth1Client.put(endpoint, contact)];
                    });
                }); }
            }
        };
        _this.contacts = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'contacts';
                    if (args && args.ContactID) {
                        endpoint = endpoint + '/' + args.ContactID;
                        delete args.ContactID;
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (body, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'contacts';
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, body)];
                });
            }); },
            update: function (body, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'contacts';
                    if (args && args.ContactID) {
                        endpoint = endpoint + '/' + args.ContactID;
                        delete args.ContactID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, body)];
                });
            }); },
            CISsettings: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'contacts';
                        if (args && args.ContactID) {
                            endpoint = endpoint + '/' + args.ContactID;
                            delete args.ContactID;
                        }
                        endpoint += '/cissettings';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
            attachments: _this.generateAttachmentsEndpoint('contacts'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'contacts';
                        if (args && args.ContactID) {
                            endpoint = endpoint + '/' + args.ContactID;
                            delete args.ContactID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.creditNotes = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'creditnotes';
                    if (args && args.CreditNoteID) {
                        endpoint = endpoint + '/' + args.CreditNoteID;
                        delete args.CreditNoteID; // remove from query string
                    }
                    else if (args && args.CreditNoteNumber) {
                        endpoint = endpoint + '/' + args.CreditNoteNumber;
                        delete args.CreditNoteNumber;
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            savePDF: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, writeStream;
                return __generator(this, function (_a) {
                    endpoint = 'creditnotes';
                    if (args && args.CreditNoteID) {
                        endpoint = endpoint + '/' + args.CreditNoteID;
                        delete args.CreditNoteID;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    writeStream = fs.createWriteStream(args.savePath);
                    return [2 /*return*/, this.oauth1Client.writeUTF8ResponseToStream(endpoint, 'application/pdf', writeStream)];
                });
            }); },
            create: function (creditNote, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'creditnotes' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, creditNote)];
                });
            }); },
            update: function (creditNote, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'creditnotes' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, creditNote)];
                });
            }); },
            allocations: {
                create: function (allocation, args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'creditnotes';
                        if (args && args.CreditNoteID) {
                            endpoint = endpoint + '/' + args.CreditNoteID;
                            delete args.CreditNoteID; // remove from query string
                        }
                        endpoint += '/allocations';
                        endpoint += utils_1.generateQueryString(args);
                        return [2 /*return*/, this.oauth1Client.put(endpoint, allocation)];
                    });
                }); },
            },
            attachments: _this.generateAttachmentsEndpoint('creditnotes'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'creditnotes';
                        if (args && args.CreditNoteID) {
                            endpoint = endpoint + '/' + args.CreditNoteID;
                            delete args.CreditNoteID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.currencies = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'currencies' + utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            create: function (currency) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'currencies';
                    return [2 /*return*/, this.oauth1Client.put(endpoint, currency)];
                });
            }); }
        };
        _this.employees = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'employees';
                    if (args && args.EmployeeID) {
                        endpoint = endpoint + '/' + args.EmployeeID;
                        delete args.EmployeeID;
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (employees) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'employees';
                    return [2 /*return*/, this.oauth1Client.put(endpoint, employees)];
                });
            }); },
            update: function (employees) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'employees';
                    return [2 /*return*/, this.oauth1Client.post(endpoint, employees)];
                });
            }); }
        };
        _this.expenseClaims = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'expenseclaims';
                    if (args && args.ExpenseClaimID) {
                        endpoint = endpoint + '/' + args.ExpenseClaimID;
                        delete args.ExpenseClaimID;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            create: function (expenseClaims, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'expenseclaims' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, expenseClaims)];
                });
            }); },
            update: function (expenseClaims, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'expenseclaims';
                    if (args && args.ExpenseClaimID) {
                        endpoint = endpoint + '/' + args.ExpenseClaimID;
                        delete args.ExpenseClaimID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, expenseClaims)];
                });
            }); },
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'expenseclaims';
                        if (args && args.ExpenseClaimID) {
                            endpoint = endpoint + '/' + args.ExpenseClaimID;
                            delete args.ExpenseClaimID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.invoiceReminders = {
            get: function () { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'invoicereminders/settings';
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); }
        };
        _this.invoices = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'invoices';
                    if (args && args.InvoiceID) {
                        endpoint = endpoint + '/' + args.InvoiceID;
                        delete args.InvoiceID;
                    }
                    else if (args && args.InvoiceNumber) {
                        endpoint = endpoint + '/' + args.InvoiceNumber;
                        delete args.InvoiceNumber;
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            savePDF: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, writeStream;
                return __generator(this, function (_a) {
                    endpoint = 'invoices';
                    if (args && args.InvoiceID) {
                        endpoint = endpoint + '/' + args.InvoiceID;
                        delete args.InvoiceID;
                    }
                    else if (args && args.InvoiceNumber) {
                        endpoint = endpoint + '/' + args.InvoiceNumber;
                        delete args.InvoiceNumber;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    writeStream = fs.createWriteStream(args.savePath);
                    return [2 /*return*/, this.oauth1Client.writeUTF8ResponseToStream(endpoint, 'application/pdf', writeStream)];
                });
            }); },
            create: function (invoice, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'invoices' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, invoice)];
                });
            }); },
            update: function (invoices, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'invoices';
                    if (args && args.InvoiceID) {
                        endpoint = endpoint + '/' + args.InvoiceID;
                        delete args.InvoiceID;
                    }
                    else if (args && args.InvoiceNumber) {
                        endpoint = endpoint + '/' + args.InvoiceNumber;
                        delete args.InvoiceNumber;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, invoices)];
                });
            }); },
            onlineInvoice: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'invoices';
                        if (args && args.InvoiceID) {
                            endpoint = endpoint + '/' + args.InvoiceID;
                            delete args.InvoiceID;
                        }
                        endpoint += '/onlineinvoice';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
            attachments: _this.generateAttachmentsEndpoint('invoices'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'invoices';
                        if (args && args.InvoiceID) {
                            endpoint = endpoint + '/' + args.InvoiceID;
                            delete args.InvoiceID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
            email: {
                create: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'invoices';
                        if (args && args.InvoiceID) {
                            endpoint = endpoint + '/' + args.InvoiceID;
                            delete args.InvoiceID;
                        }
                        endpoint += '/email';
                        return [2 /*return*/, this.oauth1Client.post(endpoint, {})];
                    });
                }); }
            }
        };
        _this.repeatingInvoices = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'repeatinginvoices';
                    if (args && args.RepeatingInvoiceID) {
                        endpoint = endpoint + '/' + args.RepeatingInvoiceID;
                        delete args.RepeatingInvoiceID;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); },
            attachments: _this.generateAttachmentsEndpoint('repeatinginvoices'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'repeatinginvoices';
                        if (args && args.RepeatingInvoiceID) {
                            endpoint = endpoint + '/' + args.RepeatingInvoiceID;
                            delete args.RepeatingInvoiceID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.items = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'items';
                    if (args && args.ItemID) {
                        endpoint = endpoint + '/' + args.ItemID;
                        delete args.ItemID;
                    }
                    else if (args && args.Code) {
                        endpoint = endpoint + '/' + args.Code;
                        delete args.Code;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); },
            create: function (items, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'items' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, items)];
                });
            }); },
            update: function (items, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'items';
                    if (args && args.ItemID) {
                        endpoint = endpoint + '/' + args.ItemID;
                        delete args.ItemID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, items)];
                });
            }); },
            delete: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'items' + '/' + args.ItemID;
                    return [2 /*return*/, this.oauth1Client.delete(endpoint)];
                });
            }); },
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'items';
                        if (args && args.ItemID) {
                            endpoint = endpoint + '/' + args.ItemID;
                            delete args.ItemID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.journals = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'journals';
                    if (args && args.Recordfilter) {
                        endpoint = endpoint + '/' + args.Recordfilter;
                        delete args.Recordfilter;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); }
        };
        _this.linkedTransactions = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'linkedtransactions';
                    if (args && args.LinkedTransactionID) {
                        endpoint = endpoint + '/' + args.LinkedTransactionID;
                        delete args.LinkedTransactionID; // remove from query string
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (linkedTransaction, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'linkedtransactions' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, linkedTransaction)];
                });
            }); },
            update: function (linkedTransaction, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'linkedtransactions';
                    if (args && args.LinkedTransactionID) {
                        endpoint = endpoint + '/' + args.LinkedTransactionID;
                        delete args.LinkedTransactionID; // remove from query string
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, linkedTransaction)];
                });
            }); },
            delete: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'linkedtransactions';
                    if (args && args.LinkedTransactionID) {
                        endpoint = endpoint + '/' + args.LinkedTransactionID;
                        delete args.LinkedTransactionID; // remove from query string
                    }
                    endpoint += utils_1.generateQueryString(args, false);
                    return [2 /*return*/, this.oauth1Client.delete(endpoint)];
                });
            }); },
        };
        _this.manualJournals = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'manualjournals';
                    if (args && args.ManualJournalID) {
                        endpoint += '/' + args.ManualJournalID;
                        delete args.ManualJournalID;
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (manualJournals, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'manualjournals' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, manualJournals)];
                });
            }); },
            update: function (manualJournals, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'manualjournals';
                    if (args && args.ManualJournalID) {
                        endpoint += '/' + args.ManualJournalID;
                        delete args.ManualJournalID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, manualJournals)];
                });
            }); },
            attachments: _this.generateAttachmentsEndpoint('manualjournals')
        };
        _this.organisations = {
            get: function () { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'organisations';
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            CISSettings: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'organisations';
                        if (args && args.OrganisationID) {
                            endpoint = endpoint + '/' + args.OrganisationID + '/CISSettings';
                            delete args.OrganisationID;
                        }
                        endpoint += utils_1.generateQueryString(args);
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            }
        };
        _this.overpayments = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'overpayments';
                    if (args && args.OverpaymentID) {
                        endpoint += '/' + args.OverpaymentID;
                        delete args.OverpaymentID;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            allocations: {
                create: function (body, args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = "overpayments/" + args.OverpaymentID + "/allocations";
                        return [2 /*return*/, this.oauth1Client.put(endpoint, body)];
                    });
                }); }
            },
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'overpayments';
                        if (args && args.OverpaymentID) {
                            endpoint = endpoint + '/' + args.OverpaymentID;
                            delete args.OverpaymentID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.payments = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'payments';
                    if (args && args.PaymentID) {
                        endpoint = endpoint + '/' + args.PaymentID;
                        delete args.PaymentID;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); },
            create: function (payments, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'payments' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, payments)];
                });
            }); },
            update: function (payments, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'payments';
                    if (args && args.PaymentID) {
                        endpoint = endpoint + '/' + args.PaymentID;
                        delete args.PaymentID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, payments)];
                });
            }); },
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'payments';
                        if (args && args.PaymentID) {
                            endpoint = endpoint + '/' + args.PaymentID;
                            delete args.PaymentID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.prepayments = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'prepayments';
                    if (args && args.PrepaymentID) {
                        endpoint = endpoint + '/' + args.PrepaymentID;
                        delete args.PrepaymentID;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); },
            allocations: {
                create: function (allocations, args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = "prepayments/" + args.PrepaymentID + "/allocations";
                        delete args.PrepaymentID;
                        return [2 /*return*/, this.oauth1Client.put(endpoint, allocations)];
                    });
                }); }
            },
            attachments: _this.generateAttachmentsEndpoint('prepayments'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'prepayments';
                        if (args && args.PrepaymentID) {
                            endpoint = endpoint + '/' + args.PrepaymentID;
                            delete args.PrepaymentID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.purchaseOrders = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'purchaseorders';
                    if (args && args.PurchaseOrderID) {
                        endpoint = endpoint + '/' + args.PurchaseOrderID;
                        delete args.PurchaseOrderID;
                    }
                    else if (args && args.PurchaseOrderNumber) {
                        endpoint = endpoint + '/' + args.PurchaseOrderNumber;
                        delete args.PurchaseOrderNumber;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); },
            savePDF: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, writeStream;
                return __generator(this, function (_a) {
                    endpoint = 'purchaseorders';
                    if (args && args.PurchaseOrderID) {
                        endpoint = endpoint + '/' + args.PurchaseOrderID;
                        delete args.PurchaseOrderID;
                    }
                    else if (args && args.PurchaseOrderNumber) {
                        endpoint = endpoint + '/' + args.PurchaseOrderNumber;
                        delete args.PurchaseOrderNumber;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    writeStream = fs.createWriteStream(args.savePath);
                    return [2 /*return*/, this.oauth1Client.writeUTF8ResponseToStream(endpoint, 'application/pdf', writeStream)];
                });
            }); },
            create: function (purchaseOrders, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'purchaseorders';
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, purchaseOrders)];
                });
            }); },
            update: function (purchaseOrders, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'purchaseorders';
                    if (args && args.PurchaseOrderID) {
                        endpoint = endpoint + '/' + args.PurchaseOrderID;
                        delete args.PurchaseOrderID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, purchaseOrders)];
                });
            }); },
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'purchaseorders';
                        if (args && args.PurchaseOrderID) {
                            endpoint = endpoint + '/' + args.PurchaseOrderID;
                            delete args.PurchaseOrderID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.receipts = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, header;
                return __generator(this, function (_a) {
                    endpoint = 'receipts';
                    if (args && args.ReceiptID) {
                        endpoint += '/' + args.ReceiptID;
                        delete args.ReceiptID;
                    }
                    header = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, header)];
                });
            }); },
            create: function (receipts, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'receipts' + utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.put(endpoint, receipts)];
                });
            }); },
            update: function (receipts, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'receipts';
                    if (args && args.ReceiptID) {
                        endpoint += '/' + args.ReceiptID;
                        delete args.ReceiptID;
                    }
                    endpoint += utils_1.generateQueryString(args, true);
                    return [2 /*return*/, this.oauth1Client.post(endpoint, receipts)];
                });
            }); },
            attachments: _this.generateAttachmentsEndpoint('receipts'),
            history: {
                get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'receipts';
                        if (args && args.ReceiptID) {
                            endpoint = endpoint + '/' + args.ReceiptID;
                            delete args.ReceiptID;
                        }
                        endpoint += '/history';
                        return [2 /*return*/, this.oauth1Client.get(endpoint)];
                    });
                }); }
            },
        };
        _this.reports = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, reportId;
                return __generator(this, function (_a) {
                    endpoint = 'reports';
                    if (args) {
                        reportId = args.ReportID;
                        delete args.ReportID; // remove from querystring
                        endpoint = endpoint + '/' + reportId + utils_1.generateQueryString(args);
                    }
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); }
        };
        _this.taxRates = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'taxrates';
                    if (args && args.TaxType) {
                        endpoint += '/' + args.TaxType;
                        delete args.TaxType;
                    }
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            create: function (body) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'taxrates';
                    return [2 /*return*/, this.oauth1Client.put(endpoint, body)];
                });
            }); },
            update: function (body) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'taxrates';
                    return [2 /*return*/, this.oauth1Client.post(endpoint, body)];
                });
            }); }
        };
        _this.trackingCategories = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'trackingcategories';
                    if (args && args.TrackingCategoryID) {
                        endpoint = endpoint + '/' + args.TrackingCategoryID;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); },
            create: function (trackingCategory) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'trackingcategories';
                    return [2 /*return*/, this.oauth1Client.put(endpoint, trackingCategory)];
                });
            }); },
            update: function (trackingCategory, args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'trackingcategories';
                    if (args && args.TrackingCategoryID) {
                        endpoint = endpoint + '/' + args.TrackingCategoryID;
                        delete args.TrackingCategoryID;
                    }
                    return [2 /*return*/, this.oauth1Client.post(endpoint, trackingCategory)];
                });
            }); },
            delete: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = 'trackingcategories/' + args.TrackingCategoryID;
                    return [2 /*return*/, this.oauth1Client.delete(endpoint)];
                });
            }); },
            trackingOptions: {
                create: function (trackingOption, args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'trackingcategories';
                        if (args && args.TrackingCategoryID) {
                            endpoint = endpoint + '/' + args.TrackingCategoryID + '/Options';
                            delete args.TrackingCategoryID;
                        }
                        return [2 /*return*/, this.oauth1Client.put(endpoint, trackingOption)];
                    });
                }); },
                update: function (trackingOption, args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'trackingcategories';
                        if (args && args.TrackingCategoryID && args.TrackingOptionID) {
                            endpoint = endpoint + '/' + args.TrackingCategoryID + '/Options/' + args.TrackingOptionID;
                            delete args.TrackingCategoryID;
                            delete args.TrackingOptionID;
                        }
                        return [2 /*return*/, this.oauth1Client.post(endpoint, trackingOption)];
                    });
                }); },
                delete: function (args) { return __awaiter(_this, void 0, void 0, function () {
                    var endpoint;
                    return __generator(this, function (_a) {
                        endpoint = 'trackingcategories/' + args.TrackingCategoryID + '/Options/' + args.TrackingOptionID;
                        return [2 /*return*/, this.oauth1Client.delete(endpoint)];
                    });
                }); },
            }
        };
        _this.users = {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, headers;
                return __generator(this, function (_a) {
                    endpoint = 'users';
                    if (args && args.UserID) {
                        endpoint = endpoint + '/' + args.UserID;
                        delete args.UserID;
                    }
                    headers = this.generateHeader(args);
                    endpoint += utils_1.generateQueryString(args);
                    return [2 /*return*/, this.oauth1Client.get(endpoint, headers)];
                });
            }); }
        };
        return _this;
    }
    AccountingAPIClient.prototype.generateAttachmentsEndpoint = function (path) {
        var _this = this;
        return {
            get: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint;
                return __generator(this, function (_a) {
                    endpoint = path + "/" + args.entityId + "/attachments";
                    return [2 /*return*/, this.oauth1Client.get(endpoint)];
                });
            }); },
            downloadAttachment: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, writeStream;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            endpoint = path + "/" + args.entityId + "/attachments/" + utils_1.escapeString(args.fileName);
                            writeStream = fs.createWriteStream(args.pathToSave);
                            return [4 /*yield*/, this.oauth1Client.writeBinaryResponseToStream(endpoint, args.mimeType, writeStream)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            uploadAttachment: function (args) { return __awaiter(_this, void 0, void 0, function () {
                var endpoint, readStream, fileSize;
                return __generator(this, function (_a) {
                    endpoint = path + "/" + args.entityId + "/attachments/" + utils_1.escapeString(args.fileName) + utils_1.generateQueryString({ IncludeOnline: args.includeOnline });
                    readStream = fs.createReadStream(args.pathToUpload);
                    fileSize = fs.statSync(args.pathToUpload).size;
                    return [2 /*return*/, this.oauth1Client.readStreamToRequest(endpoint, args.mimeType, fileSize, readStream)];
                });
            }); },
        };
    };
    AccountingAPIClient.prototype.generateHeader = function (args) {
        if (args && args['If-Modified-Since']) {
            var toReturn = {
                'If-Modified-Since': args['If-Modified-Since']
            };
            delete args['If-Modified-Since'];
            return toReturn;
        }
    };
    return AccountingAPIClient;
}(BaseAPIClient_1.BaseAPIClient));
exports.AccountingAPIClient = AccountingAPIClient;
