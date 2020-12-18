import React, { useState } from 'react'
import { Login } from './Login';

export const Splash = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div>Auth0 Test</div>
      <Login modal={modal} setModal={setModal} />
    </div>
  )
}
