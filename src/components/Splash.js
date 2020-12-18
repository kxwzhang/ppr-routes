import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from './Login';
import { Logout } from './Logout';
import { Modal } from './Modal';

export const Splash = () => {
  const [modal, setModal] = useState(false);
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div>Auth0 Test</div>
      {!isAuthenticated && <Login modal={modal} setModal={setModal} />}
      {isAuthenticated && <Logout />}
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  )
}
