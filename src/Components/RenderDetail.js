import React, { Component } from 'react'

export default class RenderDetail extends Component {
    render() {
        console.log(this.props.recipe);
        return (
            <div>
                {
                        <div className='recipe-detail'>
                            <p className='title'>{this.props.recipe.title}</p>
                            <img src={this.props.recipe.image} alt={this.props.recipe.title} />
                            <p>Vegan/Veg/GF/etc</p>
                            <p>Ingredients</p>
                            <p>Instructions</p>
                            <button>Add to Recipe Box</button>
                        </div>
                }
            </div>
        )
    }
}
