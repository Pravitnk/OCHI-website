import { motion } from 'framer-motion';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function LandingPage() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.5' className='w-full h-screen bg-zinc-900 pt-1 '>
      <div className='textstructure mt-44 px-20'>
        {['we create', 'eye opening', 'presentations'].map((item, index) => {
          return <div className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && ( <motion.div
               initial={{width: 0}} 
               animate={{width: '9vw'}}
               transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                className='ml-2 mr-[1.5vw] w-[9vw] h-[4.6vw] rounded-md bg-red-500 relative top-[-0.45vw] '></motion.div>)}

              <h1 className="uppercase text-[6.5vw] leading-[6.5vw] tracking-tight font-['Founders_Grotesk
            '] font-regular">{item}
              </h1>
            </div>
          </div>

        })}

      </div>

      <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between py-7 px-20'>
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
          <p className='text-lg font-light tracking-light leading-none'>{item}</p>
        ))}

        <div className="start flex items-center gap-3">
          <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>Start the project</div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] border-zinc-400 rounded-full text-2xl"><FiArrowUpRight /></div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage;
