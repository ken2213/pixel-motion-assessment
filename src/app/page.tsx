"use client"

import Image from "next/image";
import React from 'react'
import { motion } from 'framer-motion';
import { textVariant } from '@/components/animation/motion';
import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="bg-[#017bc1] h-full flex justify-center"
    >
      <div className="w-full lg:w-[70%] mt-4 pt-32 px-8">
        <motion.p 
            className="text-[0.9rem] md:text-[1rem] text-[#333333] text-center lg:text-start"
            variants={textVariant(0.3)}
            initial="hidden"
            animate="show"
          >
            Let our family help you find the perfect vehicle for your family
        </motion.p>

        <motion.div 
          className="flex justify-center lg:justify-start"
          variants={textVariant(0.5)}
          initial="hidden"
          animate="show"
        >
          <Link href="/inventory">
            <button
              className="text-[0.9rem] md:text-[1rem] text-white font-semibold mt-8 bg-[#017bc1] hover:bg-white hover:text-[#017bc1] transition-all px-8 py-2 rounded-sm "
            >
              Search New Inventory
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
