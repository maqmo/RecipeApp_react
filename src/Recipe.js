import React, { Component } from 'react';
import '../Recipe.css';
import PropTypes from 'prop-types'



class Recipe extends Component {
	static defaultProps = {
		ingredients: [],
		title: "Recipe Title Missing",
		img : "Image Entry Missing",
		instrx: "Instructions missing"

	}

	//prop types allow any user of the component to know what the type of each prop (ingredients)
	//is an array of strings, vs a single string to be tokenized
	static propTypes = {
		title: PropTypes.string.isRequired,
		indgredients: PropTypes.arrayOf(PropTypes.string).isRequired,
		instrx: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	}
	render(){
		const {title, img, instrx} = this.props
		//above is same as 'const title = this.props.title' called destructuring
		const ingredients = this.props.ingredients.map((ing, index) => (
			<li key = {index}>{ing} </li>
			));
		return (
			<div className="recipe-card">
				<div className="recipe-card-image">
					<img src = {img} alt = {title} />
				</div>
				<div className="recipe-card-content">
					<h3 className="recipe-title"> {title}</h3>
					<ul className="recipe-ingredients">
						{ingredients}
					</ul>
					<h4> Instructions </h4>
					<p> {instrx} </p>
				</div>
			</div>
		);
	}
}

export default Recipe;

