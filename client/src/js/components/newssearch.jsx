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
     <div class="container-fluid" >
<div class="row">

   <div id="custom-search-input">
   <div className="input-group col-md-4">

   </div>
                    <div className="input-group col-md-4" >
                        <input type="text" className="search-query form-control" id="search"  placeholder="Search"  />

                        <span className="input-group-btn">
                            <input className="btn btn-danger" type="button" value="Search" onClick={this.buttonHandler} />
                                <span className="glyphicon glyphicon-search"></span>

                        </span>
                    </div>
                    <div className="input-group col-md-4">

                    </div>
                </div>
                </div>
                </div>


	)
	}
	}
