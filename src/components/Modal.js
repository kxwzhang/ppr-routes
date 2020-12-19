import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export const Modal = ({ setModal }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <ModalBackground onClick={() => setModal(false)}>
        <ModalChild>
          <div>Please Sign In with Auth0</div>
          <Auth0Button className={pillGrow} onClick={() => loginWithRedirect()}>
            Sign In
          </Auth0Button>
        </ModalChild>
      </ModalBackground>
    </div>
  )
}

/* Tachyon Styles */
const pillGrow = 'f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black';

/* Styled Components */
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #000000b3;
  z-index: 9000;
`;

const ModalChild = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 50px;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Auth0Button = styled.button`
  border: none;
  outline: none;
  color: black;
  background-color: gray;
  transition: background-color 0.75s, color 0.75s;
  margin: 5px;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: blue;
  }
`;