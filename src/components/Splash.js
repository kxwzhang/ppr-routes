import React, { useState } from 'react'
import { Login } from './Login';
import { Modal } from './Modal';

export const Splash = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div>Auth0 Test</div>
      <Login modal={modal} setModal={setModal} />
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  )
}
