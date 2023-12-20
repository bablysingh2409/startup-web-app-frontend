import React from 'react'

function StartupDetails({data,onClose}) {
  return (
<>
    <button className='float-right border-2 border-red-700 p-1 w-16
     bg-red-500 text-white hover:bg-red-400 text-lg' onClick={onClose}>close</button>
      <div className='p-10 flex flex-col justify-between gap-3 flex-wrap'>
        <h1 className='text-2xl font-bold'>Company Name :<span className='text-3xl text-purple-700 font-bold'>{data.company_name}</span></h1>
        <p className='text-xl text-blue-950 font-medium'>company is Located in :<span className='text-2xl text-teal-900 font-semibold'>{data.city}</span></p>
        <p className='text-xl text-blue-950 font-medium'>company was started in :<span className='text-2xl text-teal-900 font-semibold'>{data.starting_year}</span></p>
        <p className='text-xl text-blue-950 font-medium'>Founder of the compnay is : <span className='text-2xl text-teal-900 font-semibold'>{data.founders}</span></p>
        <p className='text-xl text-blue-950 font-medium'>Company is based on : <span className='text-2xl text-teal-900 font-semibold'>{data.industry}</span> Industry</p>
        <p className='text-xl text-blue-950 font-medium'>Amount invested is : <span className='text-2xl text-teal-900 font-semibold'>{data.funding_amount}</span></p>
      </div>
      </>

  )
}

export default StartupDetails