import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <LogoutButton className={pillGrow} onClick={() => logout()}>
        Logout
      </LogoutButton>
    </div>
  )
}

/* Tachyon Styles */
const pillGrow = 'f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black';

/* Styled Components */
const LogoutButton = styled.button`
  border: none;
  background-color: gray;
  color: white;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    background-color: red;
    color: black;
  }
`;
