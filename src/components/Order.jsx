import React from 'react'

export default function Order() {
  return (
    <div className='w-[20.4375rem] h-[35.4375rem] bg-white flex justify-center rounded-xl'>
        <div className='flex flex-col items-center'>
            <img src='../images/illustration-hero.svg' className='rounded-t-xl'/>
            <h1 className='text-[1.375rem] md:text-[1.75rem]'>Order Summary</h1>
            <p className='text-[0.9375rem] md:text-[1rem]'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className='flex bg-[#DFE6FB]'>
                <img src='../images/icon-music.svg' />
                <div>
                    <h2>Annual Plan</h2>
                    <p>$59.99/year</p>
                </div>
                <a>Change</a>
            </div>
            <button>Proceed to Payment</button>
            <button>Cancel Order</button>
        </div>
    </div>
  )
}
