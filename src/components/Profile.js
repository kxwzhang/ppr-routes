import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user } = useAuth0();
  return (
    <FlexWrapper>
      <ProfileImage src={user.picture}/>
      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
    </FlexWrapper>
  )
}

const FlexWrapper = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  &:hover {
    border: 1px solid blue;
  }
`;
