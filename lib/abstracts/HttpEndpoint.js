/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the GNU Lesser General Public License (LGPL)
 * version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

var inherits = require('inherits');

var kurentoClient = require('tribemedia-kurento-client-js');

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var Transaction = kurentoClient.TransactionsManager.Transaction;

var SessionEndpoint = require('tribemedia-kurento-client-core-js').abstracts.SessionEndpoint;


function noop(error) {
  if (error) console.trace(error);
};


/**
 * @classdesc
 *  Endpoint that enables Kurento to work as an HTTP server, allowing peer HTTP 
 *  clients to access media.
 *
 * @abstract
 * @extends module:core/abstracts.SessionEndpoint
 *
 * @constructor module:elements/abstracts.HttpEndpoint
 */
function HttpEndpoint(){
  HttpEndpoint.super_.call(this);
};
inherits(HttpEndpoint, SessionEndpoint);


//
// Public methods
//

/**
 * Obtains the URL associated to this endpoint
 *
 * @alias module:elements/abstracts.HttpEndpoint.getUrl
 *
 * @param {module:elements/abstracts.HttpEndpoint~getUrlCallback} [callback]
 *
 * @return {external:Promise}
 */
HttpEndpoint.prototype.getUrl = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return this._invoke(transaction, 'getUrl', callback);
};
/**
 * @callback module:elements/abstracts.HttpEndpoint~getUrlCallback
 * @param {external:Error} error
 * @param {external:String} result
 *  The url as a String
 */


/**
 * @alias module:elements/abstracts.HttpEndpoint.constructorParams
 */
HttpEndpoint.constructorParams = {
};

/**
 * @alias module:elements/abstracts.HttpEndpoint.events
 *
 * @extends module:core/abstracts.SessionEndpoint.events
 */
HttpEndpoint.events = SessionEndpoint.events;


/**
 * Checker for {@link elements/abstracts.HttpEndpoint}
 *
 * @memberof module:elements/abstracts
 *
 * @param {external:String} key
 * @param {module:elements/abstracts.HttpEndpoint} value
 */
function checkHttpEndpoint(key, value)
{
  if(!(value instanceof HttpEndpoint))
    throw ChecktypeError(key, HttpEndpoint, value);
};


module.exports = HttpEndpoint;

HttpEndpoint.check = checkHttpEndpoint;
