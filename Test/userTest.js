 var User = require('../models/user.js');
 var newuser = new User({
	 	name:"lwq",
	 	password:"lwq"
 });
User.get("sly",function(err, user){
 	if(err){
 		console.log(err);
 	}else
 	console.log(user.name);
 });
/*newuser.save(function(err){
 	if(err){console.log(err);}
 });*/