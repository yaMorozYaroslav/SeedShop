import React, {Component} from 'react';
class Container1 extends Component {
  constructor(props){
  	super(props)
  	this.state={
  		stateprop1: "Our Initial State",
  		stateprop2: 5
  	}

  }
  changeState=()=>(
  this.setState({stateprop2: this.state.stateprop2+1}
  	))
	render(){
		return(
			<div>
			<button 
			  onClick={()=>this.changeState()}>
		      Change State</button>
			{this.state.stateprop2}
			</div>
			)}
}
export default Container1;