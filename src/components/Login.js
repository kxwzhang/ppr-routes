import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

export const Login = ({ modal, setModal }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <ModalBackground onClick={() => setModal(false)}>
        <ModalChild>
          <div>Please Sign In with Auth0</div>
          <Auth0Button onClick={() => loginWithRedirect()}>Sign In</Auth0Button>
        </ModalChild>
      </ModalBackground>
    </div>
  )
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000000b3;
  z-index: 9000;
  display: flex;
`;

const ModalChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 50px;
  border-radius: 2%;
`;

const Auth0Button = styled.button`
  border: none;
  color: black;
  background-color: gray;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    cursor: pointer;
    color: white:
    background-color: blue;
  }
`;
