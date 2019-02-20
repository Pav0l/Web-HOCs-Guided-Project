import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import * as teacherHocs from './hocs/hocs';
import * as studentHocs from './hocs/hocs2';

// WrappedCOntainer is a Container component imported from Container.jsx
const WrappedContainer = Container;
// Improved is a HOC that takes WrappedContainer into a method that you define in ./hocs/hocs
const Improved = studentHocs.withCounter(teacherHocs.withMagicProp(studentHocs.withTimestamp(WrappedContainer)));


// const ImprovedWithTimestamp = studentHocs.withTimestamp(WrappedContainer);


ReactDOM.render(
  <Improved />, document.querySelector('#target1'),
);
