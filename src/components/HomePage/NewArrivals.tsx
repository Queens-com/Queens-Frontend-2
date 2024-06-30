import React from 'react'
import NewCard from './NewCard'

const NewArrivals = () => {
  return (
      <div className='px-24 space-y-8'>
          <div className='flex justify-between items-center'>
              <h2 className='font-semibold text-3xl'>New Arrivals</h2>
              <p className='font-semibold underline text-base'>See more</p>
          </div>
          <div className='grid sm:grid-cols-4 grid-cols-2 gap-8'>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
              <NewCard/>
          </div>
    </div>
  )
}

export default NewArrivals