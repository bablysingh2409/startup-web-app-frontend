import React from 'react'

function SearchStartups() {
    const handleChange=()=>{}
  return (
    <div className='w-full'>
        <div className='w-[80%] mx-auto text-black'>
            <div className='w-full'>
                <div className='flex justify-center items-center'>
                    <input 
                      type='text'
                      placeholder='Search startups...'
                      onChange={handleChange}
                      className='w-full text-md font-semibold px-4 py-3 border text-black my-3
                       borbg-gray-100 shadow-lg outline-none'/>
                      

                </div>

            </div>

        </div>

    </div>
  )
}

export default SearchStartups