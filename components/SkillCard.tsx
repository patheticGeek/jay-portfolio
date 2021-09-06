import Image from 'next/image'
import React from 'react'

import { skillCardProps } from '../interfaces/Card'

const SkillCard = ({ icon, title, level }: skillCardProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-2/6 w-3/6 grid grid-cols-3">
        <div className=" col-span-1 grid place-items-center">
          <div className="pb-3 rounded-lg w-24 h-5/6 grid place-items-center shadow-xl shadow-custom">
            <Image layout="intrinsic" src={icon} />
          </div>
        </div>
        <div className="py-5 pl-8  col-span-2 grid grid-row-2">
          <div className="font-semibold text-xl">{title}</div>
          <div className="h-3 w-full bg-gray-300 rounded-lg">
            <div
              className={`h-full w-${level}/6 bg-purple-600 rounded-lg`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
