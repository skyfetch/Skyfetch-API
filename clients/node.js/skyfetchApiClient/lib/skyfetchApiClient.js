var querystring = require('querystring'),
    events = require('events'),
    http = require('http'),
    https = require('https');

module.exports = SkyfetchApiClient;
Locations = require('./calls/locations')
Relations = require('./calls/relations')

SkyfetchApiCall = require('./calls/call.js');

function SkyfetchApiClient(options) {
    this.clientOptions = options || {}



}


SkyfetchApiClient.prototype.createCall = function(params, options) {
    return new SkyfetchApiCall(params, options)
}
