import React, {Component} from 'react';
import Component1 from './functional/comp1';
import Component2 from './functional/comp2';
import Component3 from './functional/comp3';
import Container1 from './containers/cont1';
import Header from './containers/header';
import history from './utils/history';

import {Router, Route} from 'react-router';

class Routes extends Component{
render(){
return(
	<div>
  <Router history={history}>
    <div>
   <Header />
	<Route path="/" component={Container1}/>
	<Route path="/comp1" component={Component1} />
    <Route path="/comp2" component={Component2} />
    <Route path="/comp3" component={Component3} />
    </div>
  </Router>
    </div>
			   )}
     }
 export default Routes;