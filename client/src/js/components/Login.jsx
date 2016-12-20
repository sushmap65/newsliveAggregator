import React from 'react';
import {browserHistory} from 'react-router';
export default class Login extends React.Component{
constructor(){
super();
}



buttonHandler(){
console.log("67687");
var obj={
username:document.getElementById("user").value,
password:document.getElementById("pswd").value
};
$.ajax({
url: "http://localhost:8987/users/login",
type: "POST",
data: obj,

success : function(msg)
{
console.log("successfully loged to database");

	alert("succesfully loggedin");
	//browserHistory.push('/home');
}.bind(this),
error : function(err){
console.log("error");
}.bind(this)
});
}
render(){
return(
<div className="container-fluid">
	<div className="row">
  <div className="well">
            <h2 >Welcome to NewsLiveAggregator</h2></div>
            <form method="post" action='' name="login_form">
            <div className="well" align="center">
              <p><input type="text" className="span3" name="eid" name="username" id="user" placeholder="username" /></p>
              <p><input type="password" className="span3" name="passwd" id="pswd" placeholder="password" /></p></div>
              <p><input type="button" className="btn btn-primary" value="Login in" onClick={this.buttonHandler.bind(this)}/> &nbsp;
							<input type="button" className="btn btn-success" value="Register" /></p>


            </form>





	</div>
</div>)
}
}
