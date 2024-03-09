"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';

const Finance = () => {
  return (
    <div 
      className='bg-lime-900 h-full flex justify-center items-center'
    >
      <motion.h1 
        className='text-[2rem] font-semibold text-lime-200'
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        Finance
      </motion.h1>
    </div>
  )
}

export default Finance