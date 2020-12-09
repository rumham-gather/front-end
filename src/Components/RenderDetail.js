import React, { Component } from 'react'
import reactHtmlParser from 'react-html-parser';
import request from 'superagent';

export default class RenderDetail extends Component {
    state = {
        favorites: [],
        recipes: []
    }

    componentDidMount = async () => {
        await this.fetchFavorites();
    }

    fetchFavorites = async () => {
        const response = await request
            .get(`${process.env.REACT_APP_BACK_END_URL}/api/user-recipes`)
            .set('Authorization', this.props.token)

            this.setState({ favorites: response.body });
    }

    handleFavorite = async (recipe) => {
        const favorite = {
            recipeId: recipe.id,
        };
        console.log(favorite, this.props.token);
        await request 
            .post (`${process.env.REACT_APP_BACK_END_URL}/api/user-recipes`)
            .set('Authorization', this.props.token)
            .send(favorite);
        
        await this.fetchFavorites();
    }    

    render() {
        console.log(this.state.favorites);
        return (
            <div className='detail-container'>
                {
                    <div className='recipe-detail'>
                            <p className='title'>{this.props.recipe.title}</p>
                    <button className='add-button' onClick={() => this.handleFavorite(this.props.recipe)}>Add to Recipe Box</button>
                            <br/>

                            <img src={this.props.recipe.image} alt={this.props.recipe.title} width='300px'/>

                            <p className='section-header'>Dietary Information: </p>
                            <p className='section-details'>{this.props.recipe.diets}</p>
                            <div className='summary-container'>
                            <p className="section-header">Summary: </p>
                            {/* nice find! this could get dangerous if a user puts malicious html inside a recipe (google cross-site scripting attacks for more details) */}
                            <p className='section-details'>{reactHtmlParser(this.props.recipe.summary)}</p>
                            </div>

                            <div className='ingredient-container'>
                            <p className="section-header">Ingredients: </p>
                            <p className="section-details">{this.props.recipe.extendedIngredients.map(ingredient =>
                                <p>{ingredient.original}</p>)}
                            </p>

                            </div>
                            <div className='instructions-container'>
                            <p className="section-header">Instructions: </p>
                            <p className='section-details'>{reactHtmlParser(this.props.recipe.instructions)}</p>
                            </div>

                    <div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
