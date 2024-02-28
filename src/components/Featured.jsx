import { motion, useAnimation } from 'framer-motion'
import { Power4 } from "gsap/all"
import React, { useState } from 'react'

function Featured() {

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handleHover = (ind) => {
        cards[ind].start({ y: "0" })
    }

    const handleHoverEnd = (ind) => {
        cards[ind].start({ y: "100%" })
    }

    return (
        <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl'>
            <div className='w-full py-20 px-20 border-b-[1px] border-zinc-500'>
                <h1 className='text-7xl font-["Neue_Montreal"]'>Featured projects</h1>
            </div>
            <div className='px-20 pt-10'>
                <div className='flex gap-[44.8vw] relative'>
                    <div className='uppercase'> <li className="list-disc">fyde</li></div>

                    <div className='uppercase absolute right-[41vw]'><li className="list-disc">vise</li></div>
                </div>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}

                        whileHover={{ scale: 0.85 }}
                        style={{
                            width: "50vw",
                            height: "80vh",
                            background: "lightblue",
                            transition: "all 0.3s ease",
                        }}

                        className="cardcontainer relative w-1/2 h-[80vh] ">
                        <h1 className='absolute flex left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#dce742] overflow-hidden z-[9] leading-none uppercase text-8xl tracking-tighter'>
                            {'FYDE'.split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className='inline-block'>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-3xl overflow-hidden'>
                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}

                            
                        whileHover={{ scale: 0.85 }}
                        style={{
                            width: "50vw",
                            height: "80vh",
                            background: "lightblue",
                            transition: "all 0.3s ease",
                        }}

                        className="cardcontainer relative w-1/2 h-[80vh] ">
                        <h1 className='absolute flex right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#dce742] z-[9] leading-none uppercase overflow-hidden text-8xl tracking-tighter'>
                            {'VISE'.split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className='inline-block'>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-3xl overflow-hidden'>
                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='flex'>
                <div className='px-20 flex pt-10 gap-5 w-1/2'>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>audit</div>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>copywriting</div>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>sales deck</div>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>slides design</div>
                </div>

                <div className='flex w-1/2 px-20 pt-10 gap-5'>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>agency</div>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>company presentation</div>
                </div>
            </div>
            <div className='pt-10'></div>

            <div className='px-20 pt-10 relative'>
                <div className='flex gap-[44.8vw]'>
                    <div className='uppercase'><li className="list-disc">trawa</li></div>

                    <div className='uppercase absolute right-[40vw]'><li className="list-disc">premium blend</li></div>
                </div>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(2)}
                        onHoverEnd={() => handleHoverEnd(2)}

                        whileHover={{ scale: 0.85 }}
                        style={{
                            width: "50vw",
                            height: "80vh",
                            background: "lightblue",
                            transition: "all 0.3s ease",
                        }}

                        className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='absolute flex overflow-hidden left-full -translate-x-2/3 -translate-y-1/2 top-1/2 text-[#dce742] z-[9] leading-none uppercase text-8xl tracking-tighter'>
                            {'TRAWA'.split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[2]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className='inline-block'>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-3xl overflow-hidden'>
                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                        </div>
                    </motion.div>

                    <motion.div
                        onHoverStart={() => handleHover(3)}
                        onHoverEnd={() => handleHoverEnd(3)}

                        whileHover={{ scale: 0.85 }}
                        style={{
                            width: "50vw",
                            height: "80vh",
                            background: "lightblue",
                            transition: "all 0.3s ease",
                        }}

                        className="cardcontainer relative w-1/2 h-[80vh]">
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#dce742] z-[9] leading-none uppercase text-8xl tracking-tighter'>
                            {'PREMIUM BLEND'.split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[3]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
                                    className='inline-block'>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-3xl overflow-hidden'>
                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='flex'>
                <div className='px-20 flex pt-10 gap-5 w-1/2'>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>brand identity</div>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>design research</div>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>investor deck</div>
                </div>

                <div className='flex w-1/2 px-7 pt-10 gap-5'>
                    <div className='px-5 py-1 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase tracking-wider'>blended template</div>
                </div>
            </div>

        </div>
    )
}

export default Featured
