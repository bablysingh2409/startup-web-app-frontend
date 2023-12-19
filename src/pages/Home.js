import React, { useEffect, useState } from 'react'
import StartupList from '../components/StartupList';
import { getAllStartups } from '../services/api';
import FilterStartups from '../components/FilterStartups';
import SearchStartups from '../components/SearchStartups';


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
        <div className=''>
            <nav className='h-20 bg-slate-500'></nav>
            <div className='flex flex-row gap-11'>
                <FilterStartups startupData={startupData}/>
                <div className='flex-grow-1'>
                     <SearchStartups/>
                     <StartupList  startupData={startupData}/>
                </div>
            </div>
        </div>
    )
}

export default Home