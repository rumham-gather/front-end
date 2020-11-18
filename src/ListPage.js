import React, { Component } from 'react'
import request from 'superagent';
import RenderRecipe from './RenderRecipe';

export default class RecipeListPage extends Component {
    state = {
        recipes: []
    }

    componentDidMount = async () => {
        await this.fetchRecipes();
    }

    fetchRecipes = async () => {
        const response = await request.get(`https://floating-caverns-16024.herokuapp.com/recipes`)

        this.setState({ recipes: response.body })
    }

    render() {
        return (
            <div>
                Look at all those recipes
                <RenderRecipe
                    recipeList={this.state.recipes} />
            </div>
        )
    }
}
