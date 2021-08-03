import React, { useState } from 'react'
import './Random.css'
import RandomCards from '../components/RandomCards'

import axios from 'axios'

import drake from '../images/drake.jpeg'
import linkinPark from '../images/linkin-park.jpeg'
import metallica from '../images/metallica.jpeg'
import theWeeknd from '../images/the-weeknd.jpeg'
import tiesto from '../images/tiesto.jpeg'

const Random = () => {
  const [favArtists, setFavArtists] = useState([
    { id: '3TVXtAsR1Inumwj472S9r4', name: 'Drake', imageSrc: drake },
    { id: '6XyY86QOPPrYVGvF9ch6wz', name: 'Linkin Park', imageSrc: linkinPark },
    { id: '2ye2Wgw4gimLv2eAKyk1NB', name: 'Metallica', imageSrc: metallica },
    { id: '1Xyo4u8uXC1ZmMpatF05PJ', name: 'The Weeknd', imageSrc: theWeeknd },
    { id: '2o5jDhtHVPhrJdv3cEQ99Z', name: 'Tiesto', imageSrc: tiesto }
  ])

  const [randomSong, setRandomSong] = useState([])

  const handleClick = async (name) => {
    // console.log(name)
    try {
      await axios.get(`https://api.spotify.com/v1/search?q=${name}&type=track&limit=1`)
        .then(response => {
          setRandomSong(response.data.artists.items)
          console.log(randomSong)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const getRandomCards = favArtists.map(artist => {
    return (
      <RandomCards
        key={artist.id}
        name={artist.name}
        imageSrc={artist.imageSrc}
        handleClick={() => handleClick(artist.name)}
      />
    )
  })

  return (
    <div className='random-wrapper'>
      <div className='random-artist-cards'>
        {getRandomCards}
      </div>
    </div>
  )
}

export default Random
