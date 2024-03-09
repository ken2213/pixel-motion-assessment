"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';

const Inventory = () => {
  return (
    <div 
      className='bg-orange-900 h-full flex justify-center items-center'
    >
      <motion.h1 
        className='text-[2rem] font-semibold text-orange-200'
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        Inventory
      </motion.h1>
    </div>
  )
}

export default Inventory