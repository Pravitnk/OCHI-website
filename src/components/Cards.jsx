import React from 'react'

function Cards() {
    return (
        <div className='overflow-hidden'>
        <div data-scroll data-scroll-speed='-.6' className='w-full h-screen flex items-center gap-5 px-20 bg-zinc-100'>
            <div className="cardcontainer relative h-[65vh] w-1/2">
                <div className="card flex items-center justify-center w-full h-full bg-[#004d43] rounded-3xl">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <div className='absolute bottom-10 left-12'>
                        <h1 className='border-[1px] border-[#cdea68] rounded-full px-5 py-2 text-xl font-semibold text-[#cdea68]'>&copy;2019-2022</h1>
                    </div>
                </div>
            </div>

            <div className="cardcontainer relative flex gap-5 h-[65vh] w-1/2">
                <div className="card flex items-center justify-center w-full h-full rounded-3xl bg-[#212121]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

                    <div className='absolute bottom-10 left-12'>
                        <h1 className='border-[1px] border-white rounded-full px-5 py-2 text-md font-semibold text-white'>RATING 5.0 ON CLUTCH</h1>
                    </div>
                </div>

                <div className="card flex items-center justify-center w-full h-full rounded-3xl bg-[#212121]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

                    <div className='absolute bottom-10 right-20'>
                        <h1 className='border-[1px] border-white rounded-full px-5 py-2 text-md font-semibold text-white'>BUSINESS BOOTCAMP ALUMNI</h1>
                    </div>
                </div>
            </div>


        </div>
        </div>
    )
}

export default Cards
