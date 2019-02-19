import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import { withMagicProp, withAuthCheck } from './hocs/hocs';

const WrappedContainer = withAuthCheck(Container);

ReactDOM.render(
  <WrappedContainer magicProp='magic' />, document.querySelector('#target1'),
);
