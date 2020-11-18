import React, { Component } from "react";
import request from 'superagent'
import Login from "./Login.js";
import Signup from './Signup.js';


      
      export default class Menu extends Component {
          render() {
              return (
                  <div>
                        <div className="menu"></div>
                            <Login/>
          
                            <Signup />
    
                </div>
                
              )
          }
      }
      