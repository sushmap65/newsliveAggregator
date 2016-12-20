import React from 'react';
export default class Login extends React.Component{
constructor(){
super();
}
render(){
return(
<div className="container-fluid">
	<div className="row">
  <div className="well">
            <h2 >Welcome to NewsLiveAggregator</h2></div>
            <form method="post" action='' name="login_form">
            <div className="well" align="center">
              <p><input type="text" className="span3" name="eid" id="email" placeholder="Email" /></p>
              <p><input type="password" className="span3" name="passwd" placeholder="Password" /></p></div>
              <p><button type="submit" className="btn btn-primary">Sign in</button>

              </p>
            </form>





	</div>
</div>)
}
}
