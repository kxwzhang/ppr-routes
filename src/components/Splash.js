import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from './Login';
import { Logout } from './Logout';
import { Modal } from './Modal';

export const Splash = withRouter(({ history }) => {
  const [modal, setModal] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <SplashContainer>
      <div>Auth0 Test</div>
      {!isAuthenticated && <Login modal={modal} setModal={setModal} />}
      {isAuthenticated && <Logout />}
      {modal && <Modal modal={modal} setModal={setModal} />}
      {isAuthenticated && 
      <ProfileButton className={pillGrow} onClick={() => history.push('/profile')}>
        Visit My Profile
      </ProfileButton>}
    </SplashContainer>
  )
})

/* Tachyon Styles */
const pillGrow = 'f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black';

/* Styled Components */
const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileButton = styled.button`
  border: none;
  outline: none;
  background-color: gray;
  color: white;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    cursor: pointer;
    background-color: pink;
    color: black;
  }
`;

