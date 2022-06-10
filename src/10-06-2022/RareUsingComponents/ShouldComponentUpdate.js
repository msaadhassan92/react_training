import React from 'react';

export default class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, number: 2 };
  }

  // If it returns false then UNSAFE_componentWillUpdate(), render(), and componentDidUpdate() will not be invoked
  // In this scenerio if our state get "Payment" string then Component will not update
  // Another scenerio for this method is, if mango price is less than 9 we can't buy mango and dom will not update
  shouldComponentUpdate(nextProps, nextState) {
    // return false;
    return this.state.name !== 'Payment';
  }

  increaseNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.number != this.state.number) {
      this.setState({ name: 'Updated Name' });
      console.log('Called componentDidUpdate method');
    }
  }

  setStateToPayment = () => {
    this.setState({ name: 'Payment' });
  };

  render() {
    return (
      <div>
        <h1>LifeCycle Component</h1>
        <h2>Number = {this.state.number}</h2>
        <h2>Name = {this.state.name}</h2>
        <button onClick={this.increaseNumber}>Click me</button>
        <br />
        <br />
        <button onClick={this.setStateToPayment}>Change Name to Payment</button>
      </div>
    );
  }
}
