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
    }

    render() {
        return (
            <div>
                <div className='drop-downs'>
                    <select onChange={this.props.handleSortOrder}>
                        <option value=''>Order</option>
                        <option value='asc'>Ascending Order</option>
                        <option value='desc'>Descending Order</option>
                    </select>
                    <select onChange={this.props.handleSortType}>
                        <option value='' >Sort By</option>
                        <option value='attack' >Attack</option>
                        <option value='defense'>Defense</option>
                        <option value='type'>Type</option>
                    </select>
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
