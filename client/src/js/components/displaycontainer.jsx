import React from 'react';
export default class Displaycontainer extends React.Component{

constructor()
{
super();
this.buttonHandler=this.buttonHandler.bind(this);

}

buttonHandler(news){
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
<div className = "container-fluid">
<div className="jumbotron">
<div className="row">
<h1>{this.props.news.author}</h1>
</div>
<div className="container-fluid">
<div className = "row">
<div className="well col-md-6">

<img src={this.props.news.urlToImage} id="images" alt="image" width="400"/>
</div>


<div className="well col-md-6">

<h2>{this.props.news.title}</h2>
<h2>{this.props.news.descriptions}</h2><br /><br /><br />

</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<h4>{this.props.news.url}</h4> <br />
<h5> {this.props.news.publishedAt}</h5>
</div>
</div>
<div className="row">
<div className="col-sm-6">
</div>
<div className="col-sm-6">
<form ><input className="btn btn-success btn-lg" type="button" value="save" data-toggle="modal" data-target="#myModal" onClick={this.buttonHandler} />

<div className="modal fade in" id="myModal" role="dialog">
     <div className="modal-dialog">

       <div className="modal-content">
         <div className="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">the news is saved</h4>
        </div>
        <div className="modal-footer">
           <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
         </div>
       </div>
     </div>

   </div>
<br /><br />
<input type="textArea" rows="30" cols="50" name="comment" placeholder="Comments..." /><br /><br />
<input className="btn btn-warning btn-lg" type="button" value="update comments"/>
</form>

</div>
</div>
</div>
</div>
)
}
}
