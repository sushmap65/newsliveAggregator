import React from 'react';
export default class Displaycontainer extends React.Component{

constructor()
{
super();
this.buttonHandler=this.buttonHandler.bind(this);

}

buttonHandler(news){
console.log("jjjjjjjjjjjjj");
$.ajax({
url:  "http://localhost:8987/news/addtodb",
type: 'POST',
data: this.props.news,

success : function(msg){
console.log("inserted");
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}
render(){

return(
<div className = "container">
<div className="jumbotron">
<div className="row">
<h1>{this.props.news.author}</h1>
</div>
<div className = "row">
<div className="col-sm-6">
<h2>{this.props.news.title}</h2>
<img src={this.props.news.urlToImage} id="images" alt="image" width="400"/>
</div>


<div className="col-sm-6">


<h2>{this.props.news.descriptions}</h2><br />
<h4>{this.props.news.url}</h4> <br />
<h5> {this.props.news.publishedAt}</h5>

</div>
</div>
<div className="row">
<div className="col-sm-6">
</div>
<div className="col-sm-6">
<form ><input className="btn btn-success" type="button" value="save" onClick={this.buttonHandler} />

<input type="text" placeholder="comment" />
</form>

</div>
</div>
</div>
</div>
)
}
}
