"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Skilltext = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] opacity-[0.9]
                   border border-[#7042f88b] rounded-lg
                   shadow-[0_0_15px_rgba(112,66,248,0.5)] 
                   bg-gradient-to-r from-purple-500/50 to-cyan-500/50
                   animate-glow
                   backdrop-blur-md"
        >
            <div className="flex items-center">
                <SparklesIcon className="text-white mr-[10px] h-6 w-6" />
                <h1 className="Welcome-text text-[18px] font-bold text-white">
                    Think better with Next.js 13
                </h1>
            </div>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Making apps with modern technologies
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Never miss a task, deadline or idea
        </motion.div>
    </div>
  )
}

export default Skilltext