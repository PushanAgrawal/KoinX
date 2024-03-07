import React from 'react'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"
const Comp6 = () => {
    var css='flex'
    // var slides=[ <div className='flex flex-row gap-4 p-4 w-1/2 rounded-lg bg-green-100'>
    // <span>logo</span>
    // <div className='flex flex-col'>

    // <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
    // <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
    // </div>
    // </div>, <div className='flex flex-row gap-4 p-4 w-1/2 rounded-lg bg-green-100'>
    //             <span>logo</span>
    //             <div className='flex flex-col'>

    //             <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
    //             <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
    //             </div>
    //             </div>, <div className='flex flex-row gap-4 p-4 w-1/2 rounded-lg bg-green-100'>
    //             <span>logo</span>
    //             <div className='flex flex-col'>

    //             <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
    //             <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
    //             </div>
    //             </div>]
   var autoSlide = false;
   var autoSlideInterval = 3000;
   var slides=["asd","asda","asda"]
    const [curr, setCurr] = useState(0)

    const prev = () =>
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  
    // useEffect(() => {
    //   if (!autoSlide) return
    //   const slideInterval = setInterval(next, autoSlideInterval)
    //   return () => clearInterval(slideInterval)
    // }, [])
  return (
    <div className='flex flex-col gap-6 text-black w-full rounded-lg   p-4 bg-white  mr-10' >
    <div className='text-black font-semibold text-24'>
      Sentiment
    </div>

    <div className='flex flex-col gap-4'>
     <div className=' flex flex-col gap-4'>
        <span>Key Events</span>
        {/* <div className='flex flex-row gap-4 justify-around'>
            <div className='flex flex-row gap-4 p-4 w-1/2 rounded-lg bg-green-100'>
                <span>logo</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
            <div className='flex flex-row gap-4 p-4 w-1/2 rounded-lg bg-blue-100'>
                <span>logo</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
            
          
        </div> */}
        

        <div className="w-full overflow-hidden relative">
      <div
        className="flex flex-row w-[400rem] gap-12  transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100/8}%)` }}
        >
            

             <div className='flex text-pretty gap-4 p-4 w-3/14 rounded-lg bg-green-100'>
                <span>logo1</span>
                <div className='flex flex-col w-full'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
        
           

             <div className='flex flex-row gap-4 p-4 rounded-lg w-3/14 bg-green-100'>
                <span>logo2</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
           
                <div className='flex flex-row gap-4 p-4 rounded-lg w-3/14 bg-green-100'>
                <span>logo3</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
                
                <div className='flex flex-row gap-4 p-4 rounded-lg w-3/14 bg-green-100'>
                <span>logo4</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
                <div className='flex flex-row gap-4 p-4 rounded-lg w-3/14 bg-green-100'>
                <span>logo5</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
                <div className='flex flex-row gap-4 p-4 rounded-lg w-3/14  bg-green-100'>
                <span>logo6</span>
                <div className='flex flex-col'>

                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                <span>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</span>
                </div>
                </div>
               
       
</div>
       
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <ChevronRight size={40} />
        </button>
      </div>
          </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
    <span>Analyst Estimates</span>
    <div className='flex flex-row gap-8'>
        <div className=' flex flex-col items-center justify-center text-24 font-semibold bg-green-50 p-10 rounded-full text-green-500'>
76%
</div>
<div className='flex flex-col w-full gap-2'>
    <div className='flex flex-row  items-center  gap-2'>
        <span>Buy</span>
        <hr class="h-[3px] w-1/2  rounded-lg bg-green-600 border-0 dark:bg-green-700"/>
    </div>
    <div className='flex flex-row w-full items-center  gap-2'>
        <span>Hold</span>
        <hr class="h-[3px] w-3/12  rounded-lg bg-gray-600 border-0 dark:bg-grey-700"/>
    </div>
    <div className='flex flex-row w-full items-center  gap-2'>
        <span>Sell</span>
        <hr class="h-[3px] w-1/2  rounded-lg bg-green-600 border-0 dark:bg-red-700"/>
    </div>

</div>
    </div>


     </div>
     

  </div>
  )
}

export default Comp6