var mongoose = require("mongoose");


var Schema = mongoose.Schema;
var userdetails = new Schema({
	"username":String,
	"password":String
});

module.exports = mongoose.model('userinformation',userdetails);

