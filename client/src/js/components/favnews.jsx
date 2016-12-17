var React = require('react');
import DisplaySavedNews from './displaysavednews.jsx';

export default class FavNews extends  React.Component{
constructor(){
super();
this.state={srtdata:[]};
this.viewfavourites=this.viewfavourites.bind(this);
}

viewfavourites() {
console.log("676768");
$.ajax({
url:  "http://localhost:8987/news/view",
type: "GET",
dataType: 'JSON',

success : function(msg){
console.log("success");
/*msg reprewsents JSON data of news headlines sent back by external API*/
this.setState({srtdata: msg});
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}

componentDidMount(){
this.viewfavourites();
}

render()
{
var obj=this.state.srtdata.map(function(HeadElement){
 return(

 <DisplaySavedNews news={HeadElement} />
 )
 });

 return(
 <div>
 {obj};
 </div>
 )
 }
}
