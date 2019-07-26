import React, { Component } from 'react';
import '../RecipeList.css';
import Recipe from './Components/Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
	static defaultProps =
	{
	recipes:[
		{

			title: "Spaghetti",
			instrx: "Boil, add, add salt, add oil, strain n drain",
			img: "Spaghetti.jpg",
			ingredients: ["Noodles", "oil", "salt", "water"]
		},
		{
			title: "Salad",
			instrx: "Add everything in a bowl, add dressing, shake and take",
			img: "salad.jpg",
			ingredients: ["Greens", "grains", "proteins", "dressing"]},
		{

			title: "Falafel",
			instrx: "Get help from your wife, or order take-out",
			img: "falafel.jpg",
			ingredients: ["Wife","phone+cash"]
		}
	]
	};
	static propTypes ={recipes: PropTypes.arrayOf(PropTypes.object).isRequired};
	render(){
		const recipes = this.props.recipes.map((recipe, index) =>(
				<Recipe key={index} {...recipe}/>
			));
		return(
			<div className = 'recipe-list'>
				{recipes}
			</div>

		)
	}
}
export default RecipeList;