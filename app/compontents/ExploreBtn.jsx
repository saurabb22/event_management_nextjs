"use client"
import Image from 'next/image'
import React from 'react'

const ExploreBtn = () => {
  return (
    <button type='button' id='explore-btn' className='mt-7 mx-auto' onClick={()=>{}}>
        <a href="#events">Explore Events
            <Image src="/arrow.svg" alt="arrow" width={24} height={24} />
        </a>
      explore button
    </button>
  )
}

export default ExploreBtn
