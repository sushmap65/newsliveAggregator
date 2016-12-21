var express = require('express');
var router = express.Router();

var news = require('../models/newsinform');

//localhost:8081/news/addtodb

router.post('/addtodb', isLoggedIn , function(req, res, next) {
	if(req.body){
		var newsinfo = new news();
		newsinfo.author=req.body.author;
		newsinfo.title=req.body.title;
		newsinfo.description=req.body.description;
		newsinfo.url=req.body.url;
		newsinfo.urlToImage=req.body.urlToImage;
		newsinfo.publishedAt=req.body.publishedAt;
		newsinfo.comment=" ";

		newsinfo.save(function(err){


			if(err){
				console.log("not inserted");
				res.send('news not inserted');
			}
			else{
				console.log("inserted");
				res.send('news inserted');
			}
		});

	}else{
		console.log("no data found");
	}

});


//localhost:8081/news/delete

router.delete('/delete', isLoggedIn ,function(req, res, next) {
	var title = req.body.title;
	if(title){
		news.remove({title:title},function(err){
			if(err){
				res.send("not deleted");
			}
			else{
				res.send('deleted');
			}

		});
	}

});



//localhost:8081/news/update

router.put('/update', isLoggedIn ,function(req, res, next) {
	if(req.body)
	{
		var request1=req.body.title;
		var request2=req.body.comment;
		news.update({title:request1},{$set:{comment:request2}},function(err){

			if(err) {
				res.send(err);
			}
			else  {
				res.send("News updated");
			}
		});
	}
});


//localhost:8081/news/view


router.get('/view',isLoggedIn, function(req, res, next) {

	var cursor = news.find({},function(err,allnews){
		if(err){
			res.send(err);
		}
		else{
			res.send(allnews);

		}


	});
});

function isLoggedIn (req, res, next) {
 if(req.isAuthenticated()){
 return next()
 ;}
 else {
   res.json('not authenticated');
 }
 };
module.exports = router;
