import React from 'react';

export default class ComponentDidMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  // Called after component renders
  // Used to call extenal API's
  componentDidMount() {
    this.setState({ name: 'Updated Name' });
    console.log('Called componentDidMount method');
  }

  render() {
    return (
      <div>
        <h1>LifeCycle Component</h1>
        <h2>Name = {this.state.name}</h2>
      </div>
    );
  }
}
