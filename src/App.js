import React from 'react';
import './style.css';
import Constructor from './10-06-2022/Constructor';
import ComponentDidMount from './10-06-2022/ComponentDidMount';
import ComponentDidUpdate from './10-06-2022/ComponentDidUpdate';
import ComponentWillUnmount from './10-06-2022/ComponentWillUnmount';
// Rare used methods
import ShouldComponentUpdate from './10-06-2022/RareUsingComponents/ShouldComponentUpdate';
import GetDerivedStateFromProps from './10-06-2022/RareUsingComponents/GetDerivedStateFromProps';

export default function App() {
  return (
    <div>
      {/* <Constructor name="Coming from parent component" /> */}
      {/* <ComponentDidMount name="Coming from parent component" /> */}
      <ComponentDidUpdate name="Coming from parent component" />
      {/* <ComponentWillUnmount name="Coming from parent component" /> */}
      {/* <ShouldComponentUpdate name="Coming from parent component" /> */}
      {/* <GetDerivedStateFromProps name="Coming from parent component" /> */}
    </div>
  );
}
