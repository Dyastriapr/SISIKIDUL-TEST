import React from 'react'
import { Hero, About, Fondasi, Linimasa } from './content/'
import Faq from './content/Faq'
import Game from '../../components/game/Game'
import VideoPlayer from './content/VideoPlayer'
import { Gallery } from '../../components/gallery/Gallery'
import Youtube from './content/Youtube'
import Table from '../../components/Table/Index'

// import FlippableCard from '../../components/card/flippable-card'

const Home = () => {
  return (
    <div className='md:px-32'>
      <Hero />
      <About />
      <Gallery />
      <Linimasa />
      <Table />
      {/* <Game /> */}
     
      <VideoPlayer/>
      {/* <Youtube /> */}
      <Fondasi />
      
      <Faq />
      
    
    </div>

  )
}

export default Home