import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <main>
            <header>
            <Link to={`/`}><img className="logo" src="../gather.png" width="170" height="75" alt="logo"/></Link>
            </header>
            </main>
                
            
        )
    }
}
