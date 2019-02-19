import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import * as teacherHocs from './hocs/hocs';
import * as studentHocs from './hocs/hocs2';


const WrappedContainer = Container;

ReactDOM.render(
  <WrappedContainer />, document.querySelector('#target1'),
);
