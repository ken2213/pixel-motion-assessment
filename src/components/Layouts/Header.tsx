import React from 'react'
import NavigationBar from './NavigationBar'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <div className='fixed w-full'>
        <TopHeader />
        <NavigationBar />
    </div>
  )
}

export default Header