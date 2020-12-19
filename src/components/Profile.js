import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = withRouter(({ history }) => {
  const { user } = useAuth0();
  return (
    <FlexWrapper className='pa4 tc'>
      <img className='br-100 ba h3 w3 dib' src={user.picture}/>
      <h2 className=''>{user.name}</h2>
      <h3 className=''>{user.email}</h3>
      <HomePageButton onClick={() => history.push('/')}>
        Home
      </HomePageButton>
    </FlexWrapper>
  )
})

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  ${'' /* border: 1px solid black;
  border-radius: 50%; */}
`;

const HomePageButton = styled.button`
  border: none;
  background-color: gray;
  color: black;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;
