import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import reactHtmlParser from 'react-html-parser';

export default class RenderRecipe extends Component {
    state = {
        recipes: []
    }

    render() {
        return (
            <div>
                {
                    this.props.recipeList.map(recipe =>
                        <div>
                        <Link to={`/recipes/${recipe.id}`}>
                        <div className='recipe-item'>
                            <img src={recipe.image} alt={recipe.title} />
                            <p className='title'>{recipe.title}</p>
                        </div>
                        </Link>
                        {/* <p className='title'>{reactHtmlParser(recipe.summary)}</p> */}
                        </div>)
                }
            </div>
        )
    }
}
