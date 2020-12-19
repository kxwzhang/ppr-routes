import React from 'react'
import styled from 'styled-components';

export const Login = ({ modal, setModal }) => {
  return (
    <div>
      <LoginButton className={pillGrow}onClick={() => setModal(true)}>
        Login
      </LoginButton>
    </div>
  )
}

/* Tachyon Styles */
const pillGrow = 'f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black';

const LoginButton = styled.button`
  border: none;
`;