import React from 'react'
import PoineerAcadmeyBoot from './PoineerAcadmeyBoot'
import ImageBoot from './ImageBoot';
import Navbar from './Navbar';
import News from './News';
function Home() {
  return (
    <div>

      <News />
      <Navbar />
      <ImageBoot />
    </div>
  )
}

export default Home