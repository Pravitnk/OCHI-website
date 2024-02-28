import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-green-500'>
      <div className='text border-t-2 border-b-2 border-zinc-200 flex overflow-hidden whitespace-nowrap '>

        <motion.h1 
        initial={{x: 0}} 
        animate={{x: "-100%"}} 
        transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[18vw] leading-none font-["Founders_Grotesk
            "] font-semibold mt-[-1.8vw] pr-[5vw]'>WE ARE OCHI</motion.h1>


        <motion.h1
        initial={{x: 0}} 
        animate={{x: "-100%"}} 
        transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[18vw] leading-none font-["Founders_Grotesk
            "] font-semibold mt-[-1.8vw] pr-[5vw]'>WE ARE OCHI</motion.h1>

      </div>
    </div>
  )
}

export default Marquee
