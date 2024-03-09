"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';

const ContactUs = () => {
  return (
    <div className='bg-violet-900  h-full flex justify-center items-center'>
      <motion.h1 
        className='text-[2rem] font-semibold text-violet-200'
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        Contact Us
      </motion.h1>
    </div>
  )
}

export default ContactUs