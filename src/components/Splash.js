import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Login } from './Login';
import { Logout } from './Logout';
import { Modal } from './Modal';

export const Splash = withRouter(({ history }) => {
  const [modal, setModal] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return (<div>Loading...</div>);
  if (isAuthenticated) {
    return (
      <SplashContainer>
        <div>Auth0 Test</div>
        <Logout />
        <Link to="/profile">
          <ProfileButton className={pillGrow}>Visit My Profile</ProfileButton>
        </Link>
        <Link to="/album">
          <AlbumButton className={pillGrow}>My Music</AlbumButton>
        </Link>
        <Link to="/subscribe">
          <SubscribeButton className={pillGrow}>Go Subscribe</SubscribeButton>
        </Link>
        <Link to="/dropdown">
        </Link>
      </SplashContainer>
    );
  }
  if (!isAuthenticated) {
    return (
      <SplashContainer>
        <div>Auth0 Test</div>
        <Login modal={modal} setModal={setModal} />
        {modal && <Modal modal={modal} setModal={setModal} />}
      </SplashContainer>
    )
  }
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

const AlbumButton = styled.button`
  border: none;
  outline: none;
  background-color: gray;
  color: white;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    cursor: pointer;
    background-color: rgb(224, 201, 99);
    color: black;
  }
`;

const SubscribeButton = styled.button`
  border: none;
  outline: none;
  background-color: gray;
  color: white;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    cursor: pointer;
    background-color: rgb(41, 179, 179);
    color: black;
  }
`;

