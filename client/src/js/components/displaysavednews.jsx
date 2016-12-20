import React from 'react';
export default class DisplaySavedNews extends React.Component{

constructor()
{
super();
this.state={srtdata:' '};
this.buttonHandler = this.buttonHandler.bind(this);
this.handleUpdate=this.handleUpdate.bind(this);
this.updateComment=this.updateComment.bind(this);
}

updateComment(t){
this.setState({comment:t.target.value});
}

handleUpdate()
{
var obj = {
title:this.props.news.title,
comment:this.state.srtdata
};


console.log(Object.keys(obj)+"---------------"+Object.values(obj));
$.ajax({
url:  "http://localhost:8987/news/update",
type: 'PUT',
data: obj,

success : function(msg){
alert("Comments Updated");

}.bind(this),
error : function(err){
alert("error");
}.bind(this)
});


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

<form ><input className="btn btn-success btn-lg" type="button" value="Delete"  onClick={this.buttonHandler} />
&nbsp; &nbsp; &nbsp;<br />
<textArea placeholder="your comments here" onChange={this.updateComment.bind(this)} ></textArea>
&nbsp; &nbsp; &nbsp;
<input type="button" class="btn btn-warning btn-lg" value="Update"  onClick={this.handleUpdate}/>


</form>

</div>
</div>
</div>
</div>
</div>

)
}
}
