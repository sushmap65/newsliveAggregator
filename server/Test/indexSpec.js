var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var user = require("../routes/users");
var news = require("../routes/news");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("- POST is testing", function(done){
    var body = {
		"username": "sushma1",
		"password": "abcdef"
	};
    url
        .post("/users/Signup")
        .send(body)
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("inserted",res.text, "res.text is not matching with inserted");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});


describe("Testing the first route", function(err){
  it("- POST is testing", function(done){
    var body = {
		"username": "sushma1",
		"password": "abcdef"
	};
    url
        .post("/users/login")
        .send(body)
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});

describe("Testing the first route", function(err){

  it("- POST is testing", function(done){
    var body = {

  "author": "Connie Loizos",
  "title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter",
  "description": "James Slavet says he has been trying to recruit entrepreneur Josh McFarland for eight years. That's just two years after Slavet joined the early-stage venture..",
  "url": "http://social.techcrunch.com/2016/12/20/greylock-just-hired-josh-mcfarland-who-sold-his-greylock-backed-company-to-twitter/",
  "urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/12/dsc05183.jpg?w=764&amp;h=400&amp;crop=1",
  "publishedAt": "2016-12-20T21:07:18Z"

	};
    url
        .post("/news/addtodb")
        .send(body)
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
});
