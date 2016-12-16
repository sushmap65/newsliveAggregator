var mongoose = require("mongoose");


var Schema = mongoose.Schema;
var newsdetails = new Schema({
	"author":String,
	"title":String,
	"description":String,
	"url":String,
	"urlToImage":String,
	"publishedAt":String
});

module.exports = mongoose.model('newsinformation',newsdetails);

