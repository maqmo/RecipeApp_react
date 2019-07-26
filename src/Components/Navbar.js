import React, { Component } from 'react'
import "./Navbar.css";

class Navbar extends Component{
	static defaultProps = {
		title: "Welcome Here Now!",
		links: ["Home", "Contact", "About"]
	}
	render(){
		const {title} = this.props;
		const links = this.props.links.map((link, index) => (
			<li className='link' key={index}><a href="#">{link}</a></li>
			)
		);
		return (
			<header>
				<h2 className='title'><a href="#">{title}</a></h2>
				<nav>
					{links}
				</nav>
			</header>
		);
	}
}

export default Navbar;