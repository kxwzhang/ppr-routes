import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HomePageButton } from './Profile';

export const Album = () => {
  return (
    <AlbumContainer>
      <AlbumLink className={albumContainer}
        title="Frank Ocean's Blonde on Apple Music"
        href='https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music'
        target='_blank'
      >
        <img className={imgCenter}
          alt='Frank Ocean Blonde Album Cover'
          src='https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg'
        />
        <dl className='mt2 f6 lh-copy'>
          <dt className='clip'>Title</dt>
          <dd className='ml0'>Blonde</dd>
          <dt className='clip'>Artist</dt>
          <dd className='ml0 gray'>Frank Ocean</dd>
        </dl>
      </AlbumLink>
      <Link to="/">
        <HomePageButton className={pillGrow}>
          Home
        </HomePageButton>
      </Link>
    </AlbumContainer>
  )
}

/* Tachyons Styles */
const albumContainer = 'db center mw5 tc black link dim';
const imgCenter = 'db ba b--black-10';
const pillGrow = 'f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black';

/* Styled Components */
const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlbumLink = styled.a`
  border: 1px solid black;
  padding: 5px;
`;