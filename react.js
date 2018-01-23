// REACT

// Render
ReactDOM.render(
	myDiv, // JSX елемент що ми хочемо вставити
	myPlace	// Місце в DOM куди ми хочемо вставити
);

// Component - простий кусок коду відповідальний за рендер HTML
class Greeting extends React.Component {		// створюється нови компронент клас, назва мусить бути з вел букви
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

import React from 'react';	// створює обєкт React, в якому є властисості, такі як React.createElement()
import ReactDOM from 'react-dom'; 	// є властивості для роботи з DOM, такі як ReactDOM.render()


// Import
import { NavBar} from './NavBar' //  в файлі в який імпортують. З якого додати export перед компронентом

// Props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

<Greeting firstName="Esmerelda" /> // Записати props

render() {									// Доступ до props
  return <h1>{this.props.firstName}</h1>;
}

this.props.children 	// доступ до дітей
getDefaultProps 		// пропс по замовчуванні

// State(стан)
this.state = { mood: 'decent' };	// записати state(стан) властивість
{this.state.mood} // прочитати властивість

super(props) //

// Events
var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

React.render(<Counter/>, document.getElementById('myDiv'));


// Comments
{ /* коментар */ }
