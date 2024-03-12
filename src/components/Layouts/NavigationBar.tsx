"use client"

import React from 'react'

import Link from 'next/link'

import { Menu } from 'lucide-react'
import { NavigationMenu, NavigationMenuList } from '../ui/navigation-menu'

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { honda } from '@/assets'
import Image from 'next/image'
import { navigationBarTitles } from '@/constants'

const NavigationBar = () => {
  return (
    <div className='bg-[#333333] text-white px-4 py-2 md:py-0 md:pl-5 lg:pl-40 xl:pl-0 xl:justify-center fixed w-full flex justify-end md:justify-start'>
      <DefaultNavigationBar />
    </div>
  )
}



const DefaultNavigationBar = () => {

  return (
    <NavigationMenu>
      <NavigationMenuList className='items-center uppercase hidden md:flex'>
        {navigationBarTitles.map((navTitle) => (
          <Link 
            key={navTitle.title}
            href={`/${navTitle.route}`}
            className='text-[0.65rem] xl:text-[0.75rem] tracking-wide hover:bg-gray-800 transition-all py-2 px-2 xl:px-4 font-semibold'
          >
            {navTitle.title}
          </Link>
        ))}
      </NavigationMenuList>

      <Sheet>
        <SheetTrigger>
          <Menu className="block md:hidden text-white" />
        </SheetTrigger>

        <MobileNavigation />
      </Sheet>
    </NavigationMenu>
  )
}



const MobileNavigation = () => {
  return (
    <SheetContent 
      side="left"
      className='w-[250px] justify-end px-4'
    >
      <div className=' w-full h-full flex flex-col gap-y-10'>
        <div className='w-[150px] pl-2 h-auto flex justify-start items-center'>
          <Image 
              src={honda}
              alt='Honda Logo'
              className='w-[80%]'
          />
        </div>

        <div className='flex flex-col py-4'>
          {navigationBarTitles.map((navTitle) => (
            <Link
              key={navTitle.title}
              href={`/${navTitle.route}`}
              className='uppercase text-[1rem] flex gap-x-2 py-3 pl-2 font-semibold bg-white hover:bg-gray-100 transition-all ease-in-out delay-100 rounded-sm'
            >
              {navTitle.icon}
              {navTitle.title}
            </Link>
          ))}
        </div>

      </div>
    </SheetContent>
  )
}

export default NavigationBar