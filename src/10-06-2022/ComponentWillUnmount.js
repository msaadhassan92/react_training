import React from 'react';

export default class ComponentWillUnmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { testComponentVisibility: true };
  }

  removeComponent = () => {
    this.setState({ testComponentVisibility: false });
  };

  render() {
    return (
      <div>
        <h1>LifeCycle Component</h1>
        <h2>
          Test Component Visibility ={' '}
          {this.state.testComponentVisibility ? <TestComponent /> : ''}
        </h2>
        <button onClick={this.removeComponent}>Click me</button>
      </div>
    );
  }
}

/*
 * TEST COMPONENT
 */
class TestComponent extends React.Component {
  // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
  // Never use setState in this method because after updating state in this method component will destroy and we can't get changes
  componentWillUnmount() {
    alert('User has been Deleted');
    console.log('componentWillUmount Called');
  }

  render() {
    return (
      <div>
        <h3>Test Component</h3>
      </div>
    );
  }
}
