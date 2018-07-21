"use strict";
/** @internalapi */
/** This second comment is required for typedoc to recognise the WHOLE FILE as @internalapi */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var querystring = require("querystring");
/** @private */
function getStringFromFile(location) {
    var privateKeyFile = path.resolve(location);
    var privateKey = fs.readFileSync(privateKeyFile, 'utf8');
    return privateKey;
}
exports.getStringFromFile = getStringFromFile;
/** @private */
function escapeString(string) {
    return querystring.escape(querystring.unescape(string));
}
exports.escapeString = escapeString;
/** @private */
function generateQueryString(args, addSummarizeErrorsParam) {
    if (addSummarizeErrorsParam === void 0) { addSummarizeErrorsParam = false; }
    var argsToUse = __assign({}, args);
    if (addSummarizeErrorsParam && argsToUse.summarizeErrors == undefined) {
        argsToUse.summarizeErrors = false;
    }
    for (var _i = 0, _a = Object.keys(argsToUse); _i < _a.length; _i++) {
        var key = _a[_i];
        if (argsToUse[key] == undefined) {
            delete argsToUse[key];
        }
    }
    if (argsToUse && Object.keys(argsToUse).length > 0) {
        return '?' + querystring.stringify(argsToUse);
    }
    else {
        return '';
    }
}
exports.generateQueryString = generateQueryString;
