import React, { Component } from 'react';
import request from 'superagent';
import RenderDetail from './RenderDetail.js';

export default class RecipeDetailPage extends Component {
    state = {
        recipes: []
    }

    componentDidMount = async () => {
        const response = await request.get(`https://floating-caverns-16024.herokuapp.com/recipes/${this.props.match.params.id}`)

        this.setState({ recipes: response.body })
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
