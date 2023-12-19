import React from 'react'
import StartupCard from './StartupCard'

function StartupList({startupData}) {
  return (
    <div className='flex flex-wrap p-7  justify-center'>
        
        {
            startupData.map((data)=>{
                return <StartupCard  key={data._id} data={data}/>
            })
        }
    </div>
  )
}

export default StartupList