import React, {Component}from'react';
import Component1 from './functional/comp1'
import Container1 from './containers/cont1'
class App extends Component{
	
render(){
	return(
		<div className="App">
		<Container1 nickname="mo" />
		 <Component1 name="moe" age={25}/>
		</div>
		);
      }
    }
export default App;