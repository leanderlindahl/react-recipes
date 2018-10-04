import React from 'react';
import PropTypes from 'prop-types';


const RecipeList = ({ style, recipes, onClick }) => (
  <div style={style}>
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map(recipe => (
        <li
          key={recipe.id}
          className="py2 border-bottom border-bottom-dashed pointer"
          onClick={() => onClick(recipe.id)}
        >
          <span>{ recipe.name }</span>
          <span>{ recipe.category }</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default RecipeList;
