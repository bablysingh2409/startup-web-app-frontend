import React, { useEffect, useState } from 'react'
import StartupList from '../components/StartupList';
import { getAllStartups } from '../services/api';


function Home() {
    const [startupData,setStartupData]=useState([]);
     
    useEffect(()=>{
        const getStartup =async()=>{
            const data= await getAllStartups();
             setStartupData(data);
        }
        getStartup();
    },[]);
    return (
        <div className='bg-orange-300'>
            <nav className='h-20 bg-slate-500'></nav>
            <div className='flex flex-row gap-11'>
                <div className='flex-grow-0 border-r-2 border-red-500'>
                    <h1>filter</h1>
                </div>
                <div className='flex-grow-1'>
                    <div>search</div>
                     <StartupList  startupData={startupData}/>
                </div>
            </div>
        </div>
    )
}

export default Home