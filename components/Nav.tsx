import Image from 'next/image'
import React from 'react'

import LogoFull from '@assets/Logo-full.svg'
const NavComponent = () => {
  return (
    <div className="fixed flex justify-between items-center  w-screen h-20 px-28">
      <div className="w-36">
        <Image layout="responsive" src={LogoFull} />
      </div>
      <div className="flex items-center justify-between w-1/3">
        <div className="font-semibold">Designs</div>
        <div className="">About</div>
        <div className="">Resume</div>
        <div className="">Contact</div>
      </div>
    </div>
  )
}

export default NavComponent
