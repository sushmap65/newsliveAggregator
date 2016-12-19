import React from 'react';
export default class DisplaySavedNews extends React.Component{

constructor()
{
super();
this.buttonHandler = this.buttonHandler.bind(this);
}

buttonHandler(news){
$.ajax({
url:  "http://localhost:8987/news/delete",
type: 'DELETE',
data: this.props.news,

success : function(msg){
alert("deleted");
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}


render(){

return(

<div className = "container-fluid">
<div className="jumbotron">
<div className="row">
<h1>{this.props.news.author}</h1>
</div>
<div className="container-fluid">
<div className = "row">
<div className="well col-md-6">

<img src={this.props.news.urlToImage} id="images" alt="image" width="500"/>
</div>


<div className="col-md-6">
<div className="well">
<h2>{this.props.news.title}</h2>
<h2>{this.props.news.descriptions}</h2><br /><br /><br />
</div>


<h4>{this.props.news.url}</h4> <br />
<h5> {this.props.news.publishedAt}</h5>

<form ><input className="btn btn-success btn-lg" type="button" value="Delete" data-toggle="modal" data-target="#myModal" onClick={this.buttonHandler} />
&nbsp; &nbsp; &nbsp;
<input type="button" className="btn btn-warning btn-lg" value = "Update" />

</form>

</div>
</div>
</div>
</div>
</div>

)
}
}
