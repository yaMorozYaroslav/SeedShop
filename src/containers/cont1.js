import React, {Component} from 'react';
import Component1 from '../functional/comp1'

class Container1 extends Component {
  Arr1 = [
  {id:1, text:'text 1', number:1},
  {id:2, text:'text 2', number:2},
  {id:3, text:'text 3', number:3},
  {id:4, text:'text 4', number:4},
  ]
  RenderListItem=(props)=>(
  	<div>
  	{props.item.text}
  	<p>{props.item.number}</p>
  	</div>
  	)
	render(){
		return(
			<div>
    {this.Arr1.map((item)=>( 
    	       <this.RenderListItem item={item}/> ) )}
			</div>
			)}
}
export default Container1;