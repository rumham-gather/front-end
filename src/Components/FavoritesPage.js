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

    render() {
        console.log(this.state.favorites);
        return (
            <div>
                {
                    !!this.state.recipes.length 
                    ? this.state.recipes.map(recipe => {
                        return (
                        <div>
                            <Link to={`/recipes/${recipe.id}`}>
                            <div className='recipe-item'>
                                <img src={recipe.image} alt={recipe.title} />
                                <p className='title'>{recipe.title}</p>
                            </div>
                            </Link>
                        </div>
                        )
                    })
                    : <div>Simmering...</div>
                }
            </div>
        )
    }
}
