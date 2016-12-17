import React from 'react';
import NewsSearch from './newssearch.jsx';
import NewsDisplay from './newsdisplay.jsx';




export default class Home extends React.Component{
constructor(){
super();
this.state={srtdata:[]};
this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);

}

fetchNewsFromExternalAPI(url) {
console.log("676768");
$.ajax({
url:  "https://newsapi.org/v1/articles?source="+url+"&sortBy=top&apiKey=7b2590fcfa3443dda529a57af2d2a0b0",
type: "GET",
dataType: 'JSON',

success : function(msg){
/*msg reprewsents JSON data of news headlines sent back by external API*/
this.setState({srtdata: msg.articles});
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}


render(){
var m=this.state.srtdata;


return(
<div>



<NewsSearch ajaxUri={this.fetchNewsFromExternalAPI.bind(this)} />
<NewsDisplay  newsArrRef={m} />





</div>


)

}
}
