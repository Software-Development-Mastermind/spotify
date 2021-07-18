import React from 'react'
import './ArtistCards.css'

import { Card, Image } from 'react-bootstrap'

import music from '../images/flat-music.png'

const ArtistCards = ({ artist, artistPic, handleClick }) => {
  console.log(artist.external_urls)
  const artistMedia = artist.images[0]
  const hasMedia = () => artistMedia ? artistMedia.url : music

  return (
    <div className='cards'>
      <Card className='artist-card' onClick={(e) => handleClick(e)}>
        <a href={(artistMedia) ? artist.external_urls.spotify : null} target='_blank' rel='noreferrer'>
          <Image className='artist-img rounded-circle w-75 h-75' src={hasMedia()} fluid />
        </a>
        <Card.Body>
          <Card.Text>
            {artist.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCards
