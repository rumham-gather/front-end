import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class RenderRecipe extends Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <div classname='recipe-list'>
                {
                    this.props.recipeList.map(recipe =>
                        <div key={recipe.title} className='recipe-item'>
                        <Link to={`/recipes/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.title} width='300px'/>
                        </Link>
                            <p className='recipe-title'>{recipe.title}</p>
                        </div>)
                }
            </div>
        )
    }
}
