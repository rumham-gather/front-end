import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "../Burger/Burgericon.js";
import Menu from "../Burger/Menu.js";
import "../Burger.css";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  
};

export default class Burg extends Component {
    render() {
        return (
            <div>
                <main>
                <div style={styles}>
                    <Popup
                    modal
                    contentStyle={{ background: "rgb(239, 164, 164)", borderRadius: "20px"}}
                    closeOnDocumentClick={false}
                    trigger={open => <BurgerIcon open={open} />}
                    >
                    { <Menu changeTokenAndUsername={this.props.changeTokenAndUsername} /> }
                    </Popup>
                </div>
                </main>
            </div>
        )
    }
}
