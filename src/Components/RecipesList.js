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
        const response = await request.get(`${process.env.REACT_APP_BACK_END_URL}/api/recipes`)
        .set('Authorization', this.props.token)
        this.setState({ recipes: response.body.recipes })
        console.log(response);
    }

    handleClick = async () => {
        const response = await request.get(`${process.env.REACT_APP_BACK_END_URL}/api/recipes`)
        .set('Authorization', this.props.token)
        this.setState({ recipes: response.body.recipes })
        console.log(response);
    }

    render() {
        return (
            <div>
                <div className='reset-button'>
                    <button onClick={() => this.handleClick()}>More food!</button>
                </div>
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
