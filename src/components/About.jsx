import React from 'react'

function About() {
    return (
        <div className='w-full px-20 pt-20 bg-[#dce742] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className='text-[3.5vw] leading-[3vw] text-black font-["NeueMontreal"]'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>

            <div className='w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#918d8d]'>

                <div className="w-1/2">

                    <h1 className='text-[4vw] text-black '>Our approach:</h1>
                    <button className='uppercase text-xl px-10 py-6 bg-zinc-900 rounded-full flex gap-5 items-center'>Read More
                        <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>

                <div className="w-1/2 h-[35vw] mt-8 rounded-3xl bg-[#c4cf22]"> 
                    <img className='w-full max-w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="er" />
                </div>

            </div>
        </div>
    )
}

export default About
