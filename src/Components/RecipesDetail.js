import React, { Component } from 'react';
import request from 'superagent';
import RenderDetail from './RenderDetail.js';

export default class RecipeDetailPage extends Component {
    state = {
        recipe: {
            extendedIngredients: []
        }
    }

    fetchRecipes = async () => {
        const response = await request 
            .get(`${process.env.REACT_APP_BACK_END_URL}/api/recipes/${this.props.match.params.id}`)

            .set('Authorization', this.props.token)
            console.log(response.body);
            this.setState({ recipe: response.body });
    }

    componentDidMount = async () => {
        await this.fetchRecipes();
    }

    render() {
        return (
            <div>
                {
                    this.state.recipe.length === 0
                    ? <div>Simmering...</div>
                    : <RenderDetail recipe={this.state.recipe} token={this.props.token} />
                }
            </div>
        )
    }
}
