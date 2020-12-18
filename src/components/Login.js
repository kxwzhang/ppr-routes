import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

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

export const Login = () => {
  return (
    <div>
      <ModalBackground>
        <ModalChild>
          
        </ModalChild>
      </ModalBackground>
    </div>
  )
}
