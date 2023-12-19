import React, { useState } from 'react'

function FilterStartups({ startupData }) {
    
    const uniqueIndustries = [...new Set(startupData.map((data) => data.industry))];


    return (
        <div className='flex-grow-0 border-r-2 border-red-500'>
            <h1 className='font-semibold text-4xl text-center text-red-950 bg-red-300 p-3 border-1 rounded-lg m-4'>Filter</h1>
            <div className='flex flex-col items-center w-[240px] h-[240px] rounded-lg '>
                <select className='bg-yellow-200 p-4 w-full flex items-center justify-between 
                font-bold text-lg rounded-lg tracking-wider border-4 border-transparent
                ' >
                    {
                        uniqueIndustries.map((industry) => {
                            return (<option className=' hover:bg-blue-300 cursor-pointer rounded-r-lg
                          border-l-transparent' key={industry._id}>
                                {industry}
                            </option>
                            )
                        })
                    }

                </select>
            </div>
        </div>
    )
}

export default FilterStartups;

