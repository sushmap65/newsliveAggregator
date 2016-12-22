		import React from 'react';
		export default class NewsSearch extends React.Component{

		constructor(){

		super();
		this.state={statedata:"search here"};
		this.buttonHandler = this.buttonHandler.bind(this);

		}


		buttonHandler() {

		 var searchItem=document.getElementById("search").value;
		 console.log(searchItem);
	    this.props.ajaxUri(searchItem);


		}

		render(){
		return(
		<div className="container">
	<div className="row">
			 <div className="col-md-6">
			 <h2>Search the News</h2>
					 <div id="custom-search-input">
							 <div className="input-group col-md-12">
									 <input type="text" className="form-control input-lg" placeholder="Search..." id="search" />
									 <span className="input-group-btn">
											 <button className="btn btn-info btn-lg" type="button" onClick={this.buttonHandler}>
													 <i className="glyphicon glyphicon-search"></i>
											 </button>
									 </span>
							 </div>
					 </div>
			 </div>
	</div>
	</div>

		)
		}
		}
