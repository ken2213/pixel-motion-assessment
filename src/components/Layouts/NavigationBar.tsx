import React from 'react'
import { navigationBarTitles } from '@/constants'
import Link from 'next/link'

const NavigationBar = () => {
  return (
    <nav className='bg-red-600'>
      <div className='flex items-center gap-5'>
        {navigationBarTitles.map((navTitle) => (
          <Link 
            key={navTitle.title}
            href={`/${navTitle.route}`}
          >
            {navTitle.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default NavigationBar