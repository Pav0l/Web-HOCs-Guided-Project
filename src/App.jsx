import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import withMagicProp from './hocs/withMagicProp';

const ContainerWithMagicProp = withMagicProp(Container);

ReactDOM.render(
  <ContainerWithMagicProp />, document.querySelector('#target1'),
);
