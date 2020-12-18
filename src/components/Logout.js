import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <LogoutButton onClick={() => logout()}>Logout</LogoutButton>
    </div>
  )
}

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
