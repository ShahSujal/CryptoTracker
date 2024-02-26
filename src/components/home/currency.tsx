import Image from 'next/image'
import React from 'react'
import {CurrencyPrice} from '../../handlers/CoinGekoFunctions'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { CurrencyDataType } from '@/handlers/coin'

const Currency = async() => {
    const CurrencyValue:CurrencyDataType = await CurrencyPrice('bitcoin')    
  return (
    <div className=' w-full h-44'>
          <div className="w-1/2 max-md:w-full h-16 flex flex-row items-center pl-5">
            <Image src={'/bitcoin.png'} alt="" width={50} height={50} className="w-10 h-10 mr-3"/>
            <h1 className="text-2xl font-bold text-gray-700">Bitcoin</h1>
            <h1 className="text-sm text-gray-600 mb-3 ml-2 uppercase">btc</h1>
            <button className="bg-gray-600 p-1 rounded-md px-3 ml-4">
              Rank #1
            </button>
          </div>
          <div className=' flex flex-row ml-6 h-16'>
            <div className='flex flex-col justify-center items-start'>
                <h1 className="text-2xl font-semibold text-gray-700">${CurrencyValue?.bitcoin.usd}</h1>
                <h1 className="text-sm text-gray-600">₹ {CurrencyValue?.bitcoin.inr} </h1>
            </div>
            <button
              className={` px-2 h-9  ${
                CurrencyValue?.bitcoin.usd_24h_change > 0
                  ? "text-[#14B079] bg-[#EBF9F4]"
                  : "text-[red] bg-[#fce2e2]"
              } flex flex-row mt-2 mx-3`}
            >
              { CurrencyValue?.bitcoin.usd_24h_change >
              0 ? (
                <TiArrowSortedUp />
              ) : (
                <TiArrowSortedDown />
              )}{" "}
              { Math.floor(CurrencyValue?.bitcoin.usd_24h_change)}%
            </button>
            <h3 className='text-gray-500 mt-2 '>(24h)</h3>
          </div>
    </div>
  )
}

export default Currency