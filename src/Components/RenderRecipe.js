import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RenderRecipe extends Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <div>
                {
                    this.props.recipeList.map(recipe =>
                        <Link to={`/recipes/${recipe.id}`}>
                        <div className='recipe-item'>
                            <img src={recipe.image} alt={recipe.title} />
                            <p className='title'>{recipe.title}</p>
                        </div>
                        </Link>)
                }
            </div>
        )
    }
}
