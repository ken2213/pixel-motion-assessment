"use client"

import Image from "next/image";
import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';

export default function Home() {
  return (
    <div 
      className="bg-red-900 h-full flex justify-center items-center"
    >
      <motion.h1 
        className="text-[2rem] font-semibold text-red-200"
        variants={textVariant(0.3)}
        initial="hidden"
        animate="show"
      >
        Honda Home Page
      </motion.h1>
    </div>
  );
}
