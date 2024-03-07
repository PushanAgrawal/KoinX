import React from 'react'
import bitcoin from "../assets/bitcoin.svg"
import TradingViewWidget from './Chart.jsx'
import { useSelector } from 'react-redux'

const Coin = () => {
    const {inr , inr_24h_change,usd,usd_24h_change } = useSelector((state)=>state.counter)
  return (
    <div className='flex flex-col w-full truncate  gap-6 rounded-lg overflow-auto   bg-white'>
        <div className='flex gap-6 m-4'>

    <div className='flex flex-row  gap-3 items-center text-black'>
        <img src={bitcoin} alt="" className="" />
        <span className="font-semibold text-24">Bitcoin</span>
        <span className='text-slate-500-5d667b text-16 font-semibold'>BTC</span>

    </div>
    <div className='p-2 rounded-lg flex items-center justify-center  bg-slate-808a9d'>
Rank #1
    </div>
        </div>
        <div className='flex flex-col m-4  text-black'>
            <div className='flex flex-row items-center gap-8'>
                <span className='text-28 font-semibold'>${usd}</span>
                <div className='flex flex-row gap-4'>
                <div className=' p-1 bg-green-100'>
                    24 %
                </div>
                <span className='text-sm text-slate-500-5d667b'>{"(24H)"}</span>
                </div>
            </div>
            <span className='text-base'>Rs {inr}</span>
        </div>
            <div className='m-4  h-60% w-100% overflow-hidden'>

<TradingViewWidget></TradingViewWidget>
            </div>
    </div>
  )
}

export default Coin