import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import { withMagicProp } from './hocs/hocs';

const WrappedContainer = withMagicProp(Container);

ReactDOM.render(
  <WrappedContainer />, document.querySelector('#target1'),
);
