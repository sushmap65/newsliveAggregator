var React = require('react');

export default class Contact extends  React.Component{

render()
{
 return(
   <div className="container-fluid">
       <div className="row">
           <div className="col-md-12">
               <div className="jumbotron">
                   <h2>
                       contact Us
                   </h2>
                   <p>
                       This is contact Us.
                   </p>
                   <p>
                       <a className="btn btn-primary btn-large" href="#">Learn more</a>
                   </p>
               </div>
           </div>
       </div>
   </div>
 );
}
}
