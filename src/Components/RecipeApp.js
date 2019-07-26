import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import Navbar from "./Navbar";
import './RecipeApp.css';


class RecipeApp extends Component {
	render() {
		return (
			<div className="App">
				<Navbar className='navbar' title="Recipes List"/>
				<RecipeList/>
			</div>
		);
	}
}

export default RecipeApp;
