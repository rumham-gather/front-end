import React, { Component } from 'react';
import request from 'superagent';
import RenderDetail from './RenderDetail.js';

export default class RecipeDetailPage extends Component {
    state = {
        recipes: []
    }

    fetchRecipes = async () => {
        const response = await request 
            .get(`${process.env.REACT_APP_BACK_END_URL}/${this.props.match.params.id}`)
            .set('Authorization', this.props.token)

            this.setState({ recipes: response.body });
    }

    componentDidMount = async () => {
        await this.fetchRecipes();
    }

    render() {
        return (
            <div>
                {
                    this.state.recipes.length === 0
                    ? <div>Simmering...</div>
                    : <RenderDetail recipeList={this.state.recipes} />
                }
            </div>
        )
    }
}
