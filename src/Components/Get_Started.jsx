import React from 'react'
import frame from '../assets/Frame.svg'
const Get_Started = () => {
  return (
    <div className=' bg-slate-blueboxed rounded-2xl hidden md:flex flex-col items-center text-center gap-4 p-10 font-bold text-white text-24'>
   <span >Get Started with KoinX</span>
   <span>for FREE</span>
   <span className=' font-normal text-sm'>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</span>
<img className='mt-10' src={frame}></img>
<button type="button" class="text-black bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-semibold  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started for Free {" ->"}</button>

    </div>
  )
}

export default Get_Started