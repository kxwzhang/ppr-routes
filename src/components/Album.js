import React from 'react'
import styled from 'styled-components';

export const Album = () => {
  return (
    <div>
      <AlbumLink clAlbumLinkassName={albumContainer}
        title="Frank Ocean's Blonde on Apple Music"
        href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music">

        <img className={imgCenter}
          alt="Frank Ocean Blonde Album Cover"
          src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg"
        />

        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0">Blonde</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray">Frank Ocean</dd>
        </dl>
      </AlbumLink>
    </div>
  )
}

/* Tachyons Styles */
const albumContainer = 'db center mw5 tc black link dim';
const imgCenter = 'db ba b--black-10';

/* Styled Components */
const AlbumLink = styled.a`
  border: 1px solid black;
  padding: 5px;
`;