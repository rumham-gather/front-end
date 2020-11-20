import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class FavoritesPage extends Component {
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

        const recipes = await Promise.all(
            response.body.map(favorite => {
                return request 
                .get(`${process.env.REACT_APP_BACK_END_URL}/api/recipes/${favorite.recipe_id}`)
                .set('Authorization', this.props.token)
            })

        )

            this.setState({ 
                favorites: response.body, 
                recipes: recipes.map(item => item.body) });
    }

    handleDelete = async (id) => {
        await request 
            .delete(`${process.env.REACT_APP_BACK_END_URL}/api/user-recipes/${id}`)
            .set('Authorization', this.props.token)

        await this.fetchFavorites();
    }

    render() {
        console.log(this.state.favorites);
        return (
            <div>
                {
                    !!this.state.recipes.length 
                    ? this.state.recipes.map(recipe => {
                        const favorite = this.state.favorites.find(favorite => favorite.recipe_id === recipe.id)

                        return (
                        <div>
                            <div className='recipe-item'>
                            <Link to={`/recipes/${recipe.id}`}>
                                <img src={recipe.image} alt={recipe.title} width='300'/>
                            </Link>
                                <p className='recipe-title'>{recipe.title}</p>
                            <button className='delete-button' onClick={() => this.handleDelete(favorite.id)}>Delete from Recipe Box</button>
                            </div>
                        </div>
                        )
                    })
                    : <div>Simmering...</div>
                }
            </div>
        )
    }
}
