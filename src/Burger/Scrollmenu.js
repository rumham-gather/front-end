import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './scroll.css';

// list of items
const list = [
  { name: './smoothie.png' },
  { name: './quiche.png' },
  { name: './corn.png' },
  { name: './salad.png' },
  { name: './ratatouille.png' },
  { name: './mango.png' },
  { name: './cupcakes.png' },
  { name: './caesar.png' },
  { name: './lasagna.png' },
  { name: './shrimp.png' }
];

// One item component
// selected prop will be passed

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;

    return <img src={el.name} key={name} selected={selected} alt={name} />;
  });


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

export default class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}


render(<ScrollMenu />, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
    <ScrollMenu />
  </React.StrictMode>,
  document.getElementById('root')
  );
