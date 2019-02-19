import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import { withMagicProp, withAuthCheck } from './hocs/hocs';

const WrappedContainer = withMagicProp(withAuthCheck(Container));

ReactDOM.render(
  <WrappedContainer />, document.querySelector('#target1'),
);
