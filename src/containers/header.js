import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
	render(){
		return(
			<div>
	<Link to='/comp1'>Comp1</Link>
	<Link to='/comp2'>Comp2</Link>
	<Link to='/comp3'>Comp3</Link>
			</div>
			)}
}
export default Header;