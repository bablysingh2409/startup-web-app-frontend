import React from 'react'

function StartupCard({data}) {
   
  return (
    <div className='m-4 bg-pink-100 p-8 pt-2 shadow-lg border-s-violet-200 rounded-lg hover:scale-110 ease-in-out duration-500' >
        <div className='flex flex-col flex-wrap w-52 gap-2'>
            <h1 className='text-center text-3xl text-blue-800 font-semibold'>{data.company_name}</h1>
             <p className='text-base text-yellow-600'><span className='text-lg font-medium mr-2 text-pink-800'>City:</span>{data.city}</p>
             <p className='text-base text-yellow-600'><span className='text-lg font-medium mr-2 text-pink-800'>Starting year:</span>{data.starting_year}</p>
             <p className='text-base text-yellow-600'><span className='text-lg font-medium mr-2 text-pink-800'>Funding Amount:</span>{data.funding_amount==''?0:data.funding_amount}</p>
        </div>
    </div>
  )
}

export default StartupCard