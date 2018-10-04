import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecipeDetail = (props) => {
  const { recipe, style, className } = props;
  if (!recipe) {
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
        Please select a recipe to see the details.
      </p>
    );
  }
  return (
    <div
      style={style}
      className={classNames('p2 bg-white', className)}
    >
      <h2 className="h2">{recipe.name}</h2>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="fit"
      />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map(step => (
          <li key={step}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeDetail;