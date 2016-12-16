import React from 'react';
import Displaycontainer from './displaycontainer.jsx';
export default class NewsDisplay extends React.Component{
constructor()
   {
     super();


   }

render(){


	var news=this.props.newsArrRef.map(function(HeadElement){
	return (

	<Displaycontainer news={HeadElement} />

	)
	});
	return(
	<div>
	{news}
	</div>
	)
}
}
