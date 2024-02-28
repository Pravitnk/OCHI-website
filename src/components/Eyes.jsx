import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltay = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaX, deltay) * (180 / Math.PI);
            setRotate(angle-180)
        })
    }
    )

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed='-.6' className="relative w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">

                <div className='flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full'>
                        <div className='relative items-center justify-center w-2/3 h-2/3 rounded-full bg-black'>
                            <div 
                            style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2
                            -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-200 rounded-full'>
                        <div className='relative items-center justify-center w-2/3 h-2/3 rounded-full bg-black'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2
                            -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
