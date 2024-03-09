"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';

const CollisionCenter = () => {
  return (
    <div 
      className='bg-indigo-950 h-full flex justify-center items-center'
    >
      <motion.h1
        className='text-[2rem] text-indigo-200 font-semibold'
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        Collision Center
      </motion.h1>
    </div>
  )
}

export default CollisionCenter