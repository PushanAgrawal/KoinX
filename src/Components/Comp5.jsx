import React, { useEffect, useState } from 'react'

const Comp5 = () => {

 

  var css=`flex flex-col relative  text-8 left-[0]`
  return (
    <div className='flex flex-col gap-6 text-black w-full rounded-lg   p-4 bg-white  mr-10' >
      <div className='text-black font-semibold text-24'>
        Performance
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row text-nowrap  justify-between'>
          <div className='flex items-center  gap-4 flex-col'>
            <span>Today's Low</span>
            <span>234784.23</span>
          </div>
          <div className='flex flex-col justify-center w-full p-4'>


<input id="default-range" type="" value="" min="48000" 
                    max="49000"  class="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-gray-200 rounded-lg appearance-none"/>
                    <div className={css}>
<span>^</span>
<span>328129</span>
                    </div>
          </div>

          <div className=' items-center flex gap-4 turnacte flex-col'>
            <span>Today's Low</span>
            <span>234784.23</span>
          </div>


        </div>
        <div className='flex flex-row text-nowrap  justify-between'>
          <div className='flex items-center  gap-4 flex-col'>
            <span>Today's Low</span>
            <span>234784.23</span>
          </div>
          <div className='flex flex-col justify-center w-full p-4'>


<input id="default-range" type="" value="" min="48000" 
                    max="49000"  class="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-gray-200 rounded-lg appearance-none"/>
                    <div className={css}>
<span>^</span>
<span>328129</span>
                    </div>
          </div>

          <div className=' items-center flex gap-4 turnacte flex-col'>
            <span>Today's Low</span>
            <span>234784.23</span>
          </div>


        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='text-24 font-semibold'>
          Fundamentals
        </div>
        <div className='flex flex-row justify-between gap-12'>
          <div className='flex flex-col w-1/2'>
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
          </div>
          <div className='flex flex-col w-1/2'>
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
            <div className='flex flex-row justify-center'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
            <div className='flex flex-row justify-between'>

            <sapn>abcd</sapn>
            <sapn>123823</sapn>
            </div>
            <hr />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Comp5