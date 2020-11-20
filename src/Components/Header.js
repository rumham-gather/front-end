import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <main>
            <header>
            <Link to={`/`}><img className="logo" src="../gather.png" width="170" height="75" alt="logo"/></Link>
            <div className="header-links">
                <ul>
                    
                <li><Link to={`/about`}>About</Link></li>
            
                <li><Link to={`/recipes`}>Recipes</Link></li>
            
                <li><Link to={`/favorites`}>Favorites</Link></li>
                </ul>
            </div>
            </header>
            </main>
                
            
        )
    }
}
