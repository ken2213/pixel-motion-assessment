"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';

const Map = () => {
  return (
    <div 
      className='bg-fuchsia-900 h-full flex justify-center items-center'
    >
      <motion.h1 
        className='text-[2rem] font-semibold text-fuchsia-200'
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        Map
      </motion.h1>
    </div>
  )
}

export default Map