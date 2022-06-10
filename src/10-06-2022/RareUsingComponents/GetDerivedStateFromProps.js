import React from 'react';

export default class GetDerivedStateFromProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  changeChildComponentPropValue = () => {
    this.setState({ name: 'Update State' });
  };

  render() {
    return (
      <div>
        <h1>LifeCycle Component</h1>
        <h2>Name = {this.state.name}</h2>
        <button onClick={this.changeChildComponentPropValue}>
          Change State
        </button>
        <hr />
        <TestComponent name={this.state.name} parentStateChange={this.changeChildComponentPropValue} />
      </div>
    );
  }
}

/*
 * TEST COMPONENT
 */
class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  // Run every time just before component renders or re renders
  // used to update our state according to change of state in parent component
  // ⚠️When we update state in child component, our state will be changed but not render on screen because as state update getDerivedStateFromProps method again called and it update state from old prop value
  // Update state in child scenerio is still a question now
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProp Called');
    console.log(props.name);
    console.log(state.name);
    if (props.name !== state.name) {
      return { name: props.name };
    }
    // return is necessary in getDerivedStateFromProps method
    return null;
  }

  changeChildComponentPropValue = () => {
    this.setState({ name: 'Update State' });
  };

  render() {
    return (
      <div>
        <h3>Test Component</h3>
        <h3>Name = {this.props.name}</h3>
        <button onClick={this.changeChildComponentPropValue}>
          Change Child State
        </button>
        {/* Update Parent state */}
        <button onClick={this.props.parentStateChange}>
          Change parent State
        </button>
      </div>
    );
  }
}
