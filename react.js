// REACT

// Render
ReactDOM.render(
	myDiv, // JSX елемент що ми хочемо вставити
	myPlace	// Місце в DOM куди ми хочемо вставити
);

// Component - простий кусок коду відповідальний за рендер HTML
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
