import React from 'react';

export default class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, number: 2 };
  }

  // We can inialize state this way as well, because 
  // state = { name: this.props.name, number: 2 };

  // It runs when state changed and component re renders
  // Our code must wrap in Condition in componentDidUpdate method, because in component states changes tremendiously and without wrapping our code in condition this method cause infinite loop and extra re renders
  // Recommended to use for external API's
  // Condition should be like given below
  componentDidUpdate(prevProp, prevState) {
    if (prevState.number != this.state.number) {
      this.setState({ name: 'Updated Name' });
      console.log('Called componentDidUpdate method');
    }
  }

  increaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    return (
      <div>
        <h1>LifeCycle Component</h1>
        <h2>Number = {this.state.number}</h2>
        <h2>Name = {this.state.name}</h2>
        <button onClick={this.increaseNumber}>Click me</button>
      </div>
    );
  }
}
