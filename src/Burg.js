import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import Popup from "reactjs-popup";
import BurgerIcon from "./Burger/Burgericon.js";
import Menu from "./Burger/Menu.js";
import "./Burger.css";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  
};

const Burg = () => (
  <main>
  <div style={styles}>
    <Popup
      modal
      contentStyle={{ background: "rgb(239, 164, 164)", borderRadius: "20px"}}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      { <Menu />}
    </Popup>
  </div>
  </main>
);

export default Burg

render(<Burg />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <Burg />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
