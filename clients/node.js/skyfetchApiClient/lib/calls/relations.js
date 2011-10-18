var querystring = require('querystring'),
    SkyfetchApiClient = require('../skyfetchApiClient');


var relationsNameSpacePath = '/relations'

SkyfetchApiClient.prototype.getRelations = function() {
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

    var path = relationsNameSpacePath

    if (qs.length > 0) {
        path += "?" + qs;
    }
    console.log(path)
    return this.createCall({path: path, method: 'GET'}, this.clientOptions);
}



SkyfetchApiClient.prototype.updateRelation = function(relationId, relation, options) {
    var path = relationsNameSpacePath + '/' + relationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'PUT',data:JSON.stringify(relation)}, this.clientOptions);
}

SkyfetchApiClient.prototype.createRelation = function(relation, options) {
    var path = relationsNameSpacePath
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'POST',data:JSON.stringify(relation)}, this.clientOptions);
}


SkyfetchApiClient.prototype.deleteRelation = function(relationId, options) {
    var path = relationsNameSpacePath + '/' + relationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'DELETE'}, this.clientOptions);
}


SkyfetchApiClient.prototype.getRelation = function(relationId, options) {
    var path = relationsNameSpacePath + '/' + relationId
    var qs = '';
    if (options) {
        qs = querystring.stringify(options)
    }
    if (qs.length > 0) {
        path += "?" + qs;
    }
    return this.createCall({path: path, method: 'GET'}, this.clientOptions);
}
