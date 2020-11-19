import React, { Component } from "react";
import Login from "./Login.js";
import Signup from './Signup.js';


      
      export default class Menu extends Component {
          render() {
              return (
                  <div>
                        <div className="menu"></div>
                            <Login changeTokenAndUsername={this.props.changeTokenAndUsername} />
          
                            <Signup changeTokenAndUsername={this.props.changeTokenAndUsername} />
    
                </div>
                
              )
          }
      }
      