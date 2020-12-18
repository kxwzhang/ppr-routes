import React from 'react'
import styled from 'styled-components';

export const Login = ({ modal, setModal }) => {
  return (
    <div>
      <LoginButton onClick={() => setModal(true)}>Login</LoginButton>
    </div>
  )
}

const LoginButton = styled.button`
  border: none;
`;