import React from 'react'
import Coin from './Coin'
import Get_Started from './Get_Started'
import Trending from './Trending'
import Comp4 from './Comp4'
import Comp5 from './Comp5'
import Comp6 from './Comp6'
import Comp7 from './Comp7'

const Comp3 = () => {
  return (
    <div className='flex  w-full md:w-auto  p-8 gap-10'>
      <div className='flex flex-col gap-4 w-full md:w-2/3'>

        <Coin></Coin>
        <Comp4></Comp4>
   <Comp5></Comp5>
   <Comp6></Comp6>
   <Comp7></Comp7>
      </div>
        <div className='hidden md:flex  mr-8 w-1/3 gap-10 flex-col'>

        <Get_Started></Get_Started>
        <Trending></Trending>

        </div>

    </div>
  )
}

export default Comp3