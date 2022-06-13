import React from 'react';

export default class Constructor extends React.Component {
  // The reason to use constructor is to set states and bind methods (handle events)
  // Constructor is the recommended way to assign props to the states
  // Best practice is to set states in constructor
  // super() call the constructor of the parent class and it should be written at the top
  // this.props will be undefined if we didn't pass super(props) parameter in constructor
  // this keyword returns the object of it's parent, is this case class "Constructor" named is the parent therefore it returns the class "Constructor" object
  constructor(props) {
    super(props);
    // ❌ We can't use setStates() in constructor
    // ✅ Use this.state to set the local state
    // ❌ Never use direct props in constructor like "props.name"
    this.state = { name: this.props.name };
    this.updateName = this.updateName.bind(this);
  }

  // this is also possible to initialize states outside the constructor but this is not the recommended way
  // this can cause issue when component re renders but in constructor it initialize only once not again and again at every render
  // state = { name: this.props.name };

  // Arrow function automatically embed in class scope
  // If we use simple functions then we have to bind them in constructor
  updateName() {
    this.setState({ name: 'Updated Name' });
    console.log('Called updateName method');
  }

  updateNameScenerio2() {
    this.setState({ name: 'Updated Name Scenerio 2' });
  }

  updateNameScenerio3() {
    this.setState({ name: 'Updated Name Scenerio 3' });
  }

  // this.updateName and this.updateName() are different things
  // this.updateName pass the reference of the function (it is optimized approach)
  // this.updateName() will create copy of function and is not recommended except the case of passing parameters
  // other ways of calling methods are given below but recommended way is this.updateName except the case of passing parameters.
  render() {
    return (
      <div>
        <h1>Constructor Component</h1>
        <h2>Name = {this.state.name}</h2>
        {/* First Way (Recommended) */}
        <button onClick={this.updateName}>Click me</button>
        {/* Second Way */}
        <button onClick={this.updateNameScenerio2.bind(this)}>Click me</button>
        {/* Third Way */}
        <button onClick={() => this.updateNameScenerio3()}>Click me</button>
      </div>
    );
  }
}
