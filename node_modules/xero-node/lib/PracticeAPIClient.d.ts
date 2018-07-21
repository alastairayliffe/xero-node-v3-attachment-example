import { XeroClientConfiguration, BaseAPIClient } from './internals/BaseAPIClient';
import { IOAuth1HttpClient, AccessToken } from './internals/OAuth1HttpClient';
/** @private */
export declare class PracticeAPIClient extends BaseAPIClient {
    constructor(options: XeroClientConfiguration, authState?: AccessToken, _oAuth1HttpClient?: IOAuth1HttpClient);
}
