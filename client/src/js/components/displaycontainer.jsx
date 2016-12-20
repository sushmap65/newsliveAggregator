import React from 'react';
export default class Displaycontainer extends React.Component{

constructor()
{
super();
this.buttonHandler=this.buttonHandler.bind(this);

}

buttonHandler(obj){
$.ajax({
url:  "http://localhost:8987/news/addtodb",
type: 'POST',
data: this.props.news,

success : function(msg){
alert("news saved");
}.bind(this),
error : function(err){
alert("error");
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


<h6>{this.props.news.url}</h6> <br />
<h6> {this.props.news.publishedAt}</h6>

<form ><input className="btn btn-success btn-lg" type="button" value="save" onClick={this.buttonHandler} />
</form>


</div>
</div>
</div>
</div>
</div>

)
}
}
