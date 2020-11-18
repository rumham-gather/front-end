import React, { Component } from 'react'
import request from 'superagent'

export default class RenderRecipe extends Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <div>
                {
                    this.props.recipeList.map(recipe =>
                        <div className='recipe-item'>
                        <img src={recipe.image_url} alt={recipe.title} />
                        <p className='title'>{recipe.title}</p>
                        </div>)
                }
            </div>
        )
    }
}
