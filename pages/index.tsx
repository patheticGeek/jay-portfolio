import React from 'react'

import HomeComponent from '@components/layout/Home'

import NavComponent from '../components/Nav'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavComponent />
      <HomeComponent />
    </div>
  )
}

export default Home
