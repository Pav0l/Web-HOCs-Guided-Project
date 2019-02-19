import React from 'react';
import './Container.less';

export default function Container({ magicProp }) {
  return (
    <div className='container-hello-world'>Hello World: {magicProp}</div>
  );
}
