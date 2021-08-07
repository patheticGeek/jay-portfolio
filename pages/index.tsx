import React from 'react'

import HomeComponent from '@components/layout/Home'
import SkillsComponent from '@components/Skills'

import NavComponent from '../components/Nav'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavComponent />
      <HomeComponent />
      <SkillsComponent />
    </div>
  )
}

export default Home
