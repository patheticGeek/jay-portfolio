import Image from 'next/image'
import React from 'react'

import ScrollMore from '@assets/Scroll.svg'
import Figma from '@assets/skill/figma-logo.svg'
import Illustrator from '@assets/skill/illu-logo.svg'

import { skillCardProps } from '../interfaces/Card'

import SkillCard from './SkillCard'

const data: skillCardProps[] = [
  {
    icon: Figma,
    level: 5,
    title: 'Figma'
  },
  {
    icon: Illustrator,
    level: 3,
    title: 'Illustrator'
  },
  {
    icon: Illustrator,
    level: 4,
    title: 'Photoshop'
  },
  {
    icon: Figma,
    level: 2,
    title: 'After Effects'
  }
]

const SkillsComponent = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center custom-bg">
      <div className="w-9/12   mt-20 relative text-center">
        <div className="text-4xl capitalize">skills</div>
      </div>

      <div className="grid w-9/12  h-full grid-cols-2">
        {data.length > 0 &&
          data.map((item, idx) => (
            <SkillCard
              key={idx}
              level={item.level}
              title={item.title}
              icon={item.icon}
            />
          ))}
      </div>

      <div className="h-14 flex justify-center">
        <Image className="animate-bounce" src={ScrollMore} />
      </div>
    </div>
  )
}

export default SkillsComponent
