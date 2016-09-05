/*var settings = require('../setting');
var  mongodb = require('mongodb');
var  server  = new mongodb.Server(settings.host, 27017, {auto_reconnect:true});
module.exports = new mongodb.Db(settings.db, server, {safe:true});*/
var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
module.exports = new mongodb.Db('mydb', server, {safe:true});