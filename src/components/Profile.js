import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = withRouter(({ history }) => {
  const { user } = useAuth0();
  return (
    <FlexWrapper className='pa4 tc'>
      <ProfileImage className={roundLarge} src={user.picture}/>
      <h2 className=''>{user.name}</h2>
      <h3 className=''>{user.email}</h3>
      <HomePageButton className={pillGrow} onClick={() => history.push('/')}>
        Home
      </HomePageButton>
    </FlexWrapper>
  )
})

/* Tachyon Styles */
const roundLarge = 'br-100 ba h3 w3 dib';
const pillGrow = 'f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black';

/* Styled Components */
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  ${'' /* border: 1px solid black;
  border-radius: 50%; */}
`;

export const HomePageButton = styled.button`
  border: none;
  outline: none;
  background-color: gray;
  color: black;
  transition: background-color 0.75s, color 0.75s;

  &:hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;
