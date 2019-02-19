import React from 'react';
import './Container.less';

export default function Container({ magicProp, isAuthed }) {
  return (
    <div className='container-hello-world'>
      <div>
        Hello World: {magicProp}
      </div>

      <div>
        BTW, I am {isAuthed ? '' : 'NOT'} authed.
      </div>

      <button onClick={() => localStorage.clear()}>LOG OUT</button>
    </div>
  );
}
