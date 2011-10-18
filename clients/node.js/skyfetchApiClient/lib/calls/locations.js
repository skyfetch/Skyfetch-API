var querystring = require('querystring'),
    SkyfetchApiClient = require('../skyfetchApiClient');


var locationNameSpacePath = '/locations'

SkyfetchApiClient.prototype.createLocation = function(location, options) {
    var path = locationNameSpacePath
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'POST',data:JSON.stringify(location)}, this.clientOptions);
}

SkyfetchApiClient.prototype.updateLocation = function(locationId, location, options) {
    var path = locationNameSpacePath + '/' + locationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'PUT',data:JSON.stringify(location)}, this.clientOptions);
}

SkyfetchApiClient.prototype.deleteLocation = function(locationId, options) {
    var path = locationNameSpacePath + '/' + locationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'DELETE'}, this.clientOptions);
}


SkyfetchApiClient.prototype.suggestLocation = function(compareToObj, options) {
    var path = locationNameSpacePath + '/suggest'
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'POST',data:JSON.stringify(compareToObj)}, this.clientOptions);
}

SkyfetchApiClient.prototype.scoreLocation = function(locationId, candidateLocation, options) {
    var path = locationNameSpacePath + '/' + locationId + '/score'
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'POST',data:JSON.stringify({location:candidateLocation})}, this.clientOptions);
}

SkyfetchApiClient.prototype.relatedLocation = function(locationId, options) {
    var path = locationNameSpacePath + '/' + locationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'GET'}, this.clientOptions);
}


SkyfetchApiClient.prototype.getLocation = function(locationId, options) {
    var path = locationNameSpacePath + '/' + locationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'GET'}, this.clientOptions);
}


//filter,fields,options
SkyfetchApiClient.prototype.getLocations = function() {
    var qs = ''
    if (arguments.length > 0) {
        var filter,fields,options
        switch (arguments.length) {
            case 1:
                filter = arguments[0]
                break;
            case 2:
                filter = arguments[0];
                if (arguments[1].length)
                    fields = arguments[1]
                else
                    options = arguments[1]
                break;
            default:
                filter = arguments[0];
                fields = arguments[1];
                options = arguments[2];
                break;
        }
        if (filter) {
            qs += 'filter=' + JSON.stringify(filter)
        }
        if (fields) {
            qs += '&fields=' + JSON.stringify(fields)
        }
        if (options) {
            qs += '&options=' + JSON.stringify(options)
        }
    }

    var path = locationNameSpacePath

    if (qs.length > 0) {
        path += "?" + qs;
    }
    console.log(path)
    return this.createCall({path: path, method: 'GET'}, this.clientOptions);
}