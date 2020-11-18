import React, { Component } from 'react'

export default class RenderDetail extends Component {
    render() {
        return (
            <div>
                {
                    this.props.recipeList.map(recipe =>
                        <div className='recipe-detail'>
                            <p className='title'>{recipe.title}</p>
                            <img src={recipe.image_url} alt={recipe.title} />
                            <p>Vegan/Veg/GF/etc</p>
                            <p>Ingredients</p>
                            <p>Instructions</p>
                            <button>Add to Recipe Box</button>
                        </div>)
                }
            </div>
        )
    }
}
