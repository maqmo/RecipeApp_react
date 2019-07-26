import React, { Component } from 'react';
import Recipe from './Components/Recipe';
import RecipeList from './Components/RecipeList';
import Navbar from "./Components/Navbar";
import '../RecipeApp.css';


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
