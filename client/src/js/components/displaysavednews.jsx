import React from 'react';
export default class DisplaySavedNews extends React.Component{

constructor()
{
super();
this.state={
srtdata:"default"
};
this.buttonHandler = this.buttonHandler.bind(this);
this.UpdateToMongo = this.UpdateToMongo.bind(this);
this.handleSave=this.handleSave.bind(this);
}

handleSave(){
var commentItem=document.getElementById("comments").value;
console.log(commentItem+"========"+typeof commentItem);
this.setState({srtdata:commentItem});
console.log(this.state.srtdata);
var obj = {
title:this.props.news.title,
comment:this.state.srtdata

};
console.log(Object.keys(obj)+"---------------"+Object.values(obj));
 this.UpdateToMongo(obj);
}

UpdateToMongo(obj){

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

<form ><input className="btn btn-success btn-lg" type="button" value="Delete" data-toggle="modal" data-target="#myModal" onClick={this.buttonHandler} />
&nbsp; &nbsp; &nbsp;

<button type="button" className="btn btn-warning btn-lg" value = "Update"  data-toggle="modal" data-target="#myModal">Update</button>

<div className="modal fade in" id="myModal" role="dialog">
     <div className="modal-dialog">

       <div className="modal-content">
         <div className="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Give Your Comments</h4>
        </div>
        <div className="modal-body">
        <textArea placeholder="your comments here" id="comments"></textArea>
        </div>
        <div className="modal-footer">
           <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={this.handleSave.bind(this)}>Save</button>
         </div>
       </div>
     </div>

   </div>

</form>

</div>
</div>
</div>
</div>
</div>

)
}
}
