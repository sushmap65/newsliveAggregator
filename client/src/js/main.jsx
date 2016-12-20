import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
= require('react-router');

import About from './components/about.jsx';
import Home from './components/Home.jsx';
import Contact from './components/contact.jsx';
import NavBar from './components/navbar.jsx';
import FavNews from './components/favnews.jsx';
import Login from './components/Login.jsx';


class MainComponent extends React.Component{

render(){

return (
<div>
<NavBar/>
<br/><br/><br/><br/>
	{this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={hashHistory}>
						 <Route path="/" component={MainComponent} >
						    <IndexRoute component={Login}/>
                <Route path="/home" component={Home} />
						    <Route path="/favnews" component={FavNews}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Route>

</Router>,document.getElementById('content'));
