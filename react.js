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
