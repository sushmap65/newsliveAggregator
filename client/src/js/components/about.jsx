var React = require('react');

export default class About extends  React.Component{

render()
{
 return(
   <div className="container-fluid">
       <div className="row">
           <div className="col-md-12">
               <div className="jumbotron">
                   <h2>
                       About Us
                   </h2>
                   <p>
                       a news aggregator, also termed a feed aggregator,
                        feed reader, news reader, RSS reader or simply aggregator, is client
                        software or a web application which aggregates syndicated web content such as online newspapers,
                         blogs, podcasts, and video blogs (vlogs) in one location for easy viewing. RSS is a synchronized
                         subscription system. Basically, RSS uses extensible markup language (XML) to structure pieces of information
                         to be aggregated in a feed reader that displays the information in a user-friendly interface.
                         The updates distributed include, for example, journal tables of contents, podcasts, videos, and news items
                   </p>
                   <p>
                       
                   </p>
               </div>
           </div>
       </div>
   </div>
 );
}
}
