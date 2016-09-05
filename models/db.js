/*var settings = require('../setting');
var  mongodb = require('mongodb');
var  server  = new mongodb.Server(settings.host, 27017, {auto_reconnect:true});
module.exports = new mongodb.Db(settings.db, server, {safe:true});
*/

var settings = require('../setting'),
Db = require('mongodb').Db,
Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port, {}), {safe: true});