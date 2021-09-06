import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import LogoFull from '@assets/Logo-full.svg'

const links = [
  { label: 'Design', to: '#home' },
  { label: 'About', to: '#about' },
  { label: 'Resume', to: '#resume' },
  { label: 'Contact', to: '#contact' }
]

const NavComponent = () => {
  return (
    <div className="fixed flex w-full justify-between items-center h-20 px-28">
      <div className="w-36">
        <Image layout="responsive" src={LogoFull} />
      </div>

      <div className="flex items-center justify-between min-w-[30%]">
        {links.map((link) => (
          <Link key={link.label} href={link.to}>
            <a
              href={link.to}
              className="cursor-pointer font-medium text-gray-600 hover:text-gray-900 py-2 px-2 mx-3">
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavComponent
