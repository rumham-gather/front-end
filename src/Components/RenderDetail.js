import React, { Component } from 'react'
import reactHtmlParser from 'react-html-parser';

export default class RenderDetail extends Component {
    render() {
        console.log(this.props.recipe);
        return (
            <div>
                {
                        <div className='recipe-detail'>
                            <p className='title'>{this.props.recipe.title}</p>

                            <img src={this.props.recipe.image} alt={this.props.recipe.title} />

                            <p className='section-header'>Dietary Information: </p>
                            <p className='section-details'>{this.props.recipe.diets}</p>
                            
                            <p className="section-header">Summary: </p>
                            <p className='section-details'>{reactHtmlParser(this.props.recipe.summary)}</p>

                            <p className="section-header">Ingredients: </p>
                            <p className="section-details">{this.props.recipe.extendedIngredients.map(ingredient =>
                                <div>{ingredient.original}</div>)}
                            </p>

                            <p className="section-header">Instructions: </p>
                            <p className='section-details'>{reactHtmlParser(this.props.recipe.instructions)}</p>

                            <button>Add to Recipe Box</button>
                        </div>
                }
            </div>
        )
    }
}
