import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {BrowserRouter as Router,Routes,Route,Navigate,Link} 
                               from 'react-router-dom';

ReactDOM.render(
	<Router>
	  <Routes>
	    <Route path="/" element={<Home />}/>
	    <Route 
	          path="/myapps" 
	          element={<Navigate replace to="/learn" />}/>
	    <Route path="/learn" element={<Learn />}>
	         <Route path="courses" element={<Courses />} />
	         <Route path="bundles" element={<Bundles />} />
	    </Route>
	  </Routes>
	</Router>,
  document.getElementById("root"));

  function Home(){
  	return(
  	<div>
  	  <h1>Home route</h1>
  	</div>
  	);
  }
  function Learn(){
  	return(
  	<div>
  	  <h1>Learn</h1>
  	  <h4>All courses are listed here</h4>
  	  <Link  className="btn btn-success" to ="/learn/course">
  	  courses
  	  </Link>{" "}
  	  <Link className="btn btn-primary" to="/learn/bundle">bundle</Link>

  	 </div>
  	   );
         }
 function Courses(){
  	return(
  	<div>
  	  <h1>Home route</h1>
  	  <h4>Bundle card</h4>
  	</div>
  	);
  }
   function Bundles(){
  	return(
  	<div>
  	  <h1>Home route</h1>
  	  <h4>Courses card</h4>
  	</div>
  	);
  }