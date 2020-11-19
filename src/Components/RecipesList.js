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
        const response = await request.get(`https://floating-caverns-16024.herokuapp.com/api/recipes`)
        .set('Authorization', this.props.token)
        console.log(response.body);
        this.setState({ recipes: response.body.recipes })
    }

    render() {
        return (
            <div>
                Look at all those recipes
                {
                    this.state.recipes.length === 0
                    ? <div>Simmering...</div>
                    : <RenderRecipe
                        recipeList={this.state.recipes} />
                }
            </div>
        )
    }
}
