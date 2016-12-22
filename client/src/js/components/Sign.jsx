	import React from 'react';
	import {browserHistory} from 'react-router';
	export default class Sign extends React.Component{
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
	url: "http://localhost:8987/users/Signup",
	type: "POST",
	data: obj,

	success : function(msg)
	{
	console.log("successfully Registered to database");

		alert("succesfully Registeredin");
		browserHistory.push('/home');
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
	            <h2 >  Register</h2></div>
	            <form method="post" action='' name="Register_form">
	            <div className="well" align="center">

	              <p><input type="text" className="span3" name="eid" name="username" id="user" placeholder="username" /></p>
	              <p><input type="password" className="span3" name="passwd" id="pswd" placeholder="password" /></p></div>

								<p><input type="button" className="btn btn-success" value="Register" onClick={this.buttonHandler.bind(this)}/>

	              </p>
	            </form>





		</div>
	</div>)
	}
	}
