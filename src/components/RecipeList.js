import React from 'react';

const RecipeList = (props) => (
	<div style={props.style}>
		<h2>Recipes</h2>
		<ul>
			<li>
				<span>Creepy Halloween Skull Cupcake</span>
				<span>Dessert</span>
			</li>
			<li>
				<span>Blueberry Sourcreme Coffee Cakes</span>
				<span>Dessert</span>
			</li>
			<li>
				<span>Amazing Pork Tenderloin in the Slow Cooker</span>
				<span>Meats</span>
			</li>
		</ul>
	</div>
);

export default RecipeList;