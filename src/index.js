import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

ReactDOM.render(
	<React.StrictMode>
	  <Home />
	</React.StrictMode>,
  document.getElementById('root'));

  function Home(){
  	return(
  	<div>
  	  <h1>Home route</h1>
  	</div>)
  }