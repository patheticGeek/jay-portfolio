import Image from 'next/image'
import React from 'react'

import Arrow from '@assets/arrow.svg'
import Cube from '@assets/cube.svg'
import GraphicDesignerSvg from '@assets/GraphicsDesigner.svg'
import ScrollMore from '@assets/Scroll.svg'

const HomeComponent = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center custom-bg">
      <div className="w-9/12 h-4/6  mt-20 relative text-right">
        <div className="text-8xl font-medium capitalize">
          UI <span className="text-blue-500">designer</span>
        </div>

        <div className="relative flex flex-col items-start h-48">
          <div className="text-4xl  curvy">Almost a</div>

          <div className="relative left-36 h-20 w-9  ">
            <Image layout="responsive" src={Arrow} />
          </div>

          <div className="w-11/12 h-full">
            <Image layout="responsive" src={GraphicDesignerSvg} />
          </div>

          <div className="w-full flex justify-end items-center mt-10">
            <div className="flex items-center">
              <div className="text-4xl curvy mr-3">Interested in</div>
              <div className="text-7xl font-black">3D</div>
            </div>

            <div className="w-24 ml-10 mr-48">
              <Image layout="responsive" src={Cube} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-14 flex justify-center">
        <Image className="animate-bounce" src={ScrollMore} />
      </div>
    </div>
  )
}

export default HomeComponent
