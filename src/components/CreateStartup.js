import React from 'react'
import { Link } from 'react-router-dom'

function CreateStartup() {
  return (
    <div className=' h-screen '>
    <Link to='/' className='text-red-950 font-semibold text-lg hover:text-white border-2 p-2'>Back To Home</Link>
    <div className='w-[410px] h-[510px] flex flex-col justify-between items-center bg-teal-800 rounded-lg
      border-2 border-white text-white shadow-lime-800/60 m-auto'>
        <form className='h-52 w-full p-4 space-y-4'>
            <input type='text' placeholder='Company Name...' className='inputClass'/>
            <input type='text' placeholder='City Name...' className='inputClass'/>
            <input type='text' placeholder='Starting Year...' className='inputClass'/>
            <input type='text' placeholder='Founder...' className='inputClass'/>
            <input type='text' placeholder='Industry...' className='inputClass'/>
            <input type='text' placeholder='Funding Amount...' className='inputClass'/>
            <button className='h-[38px] w-44 bg-white text-teal-800 font-bold rounded
            hover:bg-orange-300 hover:text-white ml-24'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateStartup