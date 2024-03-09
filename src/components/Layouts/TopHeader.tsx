import { honda } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button } from '../ui/button'

const TopHeader = () => {
  return (
    <div className='bg-white h-[110px] flex justify-around'>
        <div className='w-[200px] h-auto flex justify-center items-center'>
            <Image 
                src={honda}
                alt='Honda Logo'
                className='w-[50%] md:w-[70%]'
            />
        </div>

        <div className=' flex flex-col justify-evenly md:flex-row'>

            <div className='flex md:items-center justify-center'>
                <div className='flex justify-center items-center px-2'>
                    <p className='font-semibold'>Sales: 000-000-0000</p>
                </div>
            </div>

            <div className='flex '>
                <div className=' flex justify-center items-center gap-x-4 px-4'>
                    <div className='w-[20px]'>
                        <FontAwesomeIcon icon={faFacebook} className='text-[#316FF6]' />
                    </div>
                    <div className='w-[20px]'>
                        <FontAwesomeIcon icon={faTwitter} className='text-[#1da1f2]' />
                    </div>
                    <div className='w-[20px]'>
                        <FontAwesomeIcon icon={faGooglePlus} className='text-[#db4437]' />
                    </div>
                </div>
                <div className=' flex justify-center items-center px-2'>
                    <Button 
                        variant="destructive"
                        className='rounded-none px-4 bg-red-800'
                    >
                        Live Chat
                    </Button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default TopHeader