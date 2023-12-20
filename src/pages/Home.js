import React, { useEffect, useState } from 'react'
import StartupList from '../components/StartupList';
import { getAllStartups,getStartupByIndustry } from '../services/api';
import FilterStartups from '../components/FilterStartups';
import SearchStartups from '../components/SearchStartups';
import Navbar from '../components/Navbar';


function Home() {
    const [startupData,setStartupData]=useState([]);
     
    useEffect(()=>{
        const getStartup =async()=>{
            const data= await getAllStartups();
             setStartupData(data);
            
        }
        getStartup();
    },[]);

    const handleFilterData=async(industry)=>{
        try{
         const data=await getStartupByIndustry(industry);
         console.log(data)
          setStartupData(data)
        
        }catch(err){
            console.error('Error filtering startups by industry:', err);
        }
    }

    return (
        <div className=''>
           <Navbar/>
            <div className='flex flex-row gap-11'>
                <FilterStartups startupData={startupData} handleFilterData={handleFilterData}/>
                <div className='flex-grow-1'>
                     <SearchStartups/>
                     <StartupList  startupData={startupData}/>
                </div>
            </div>
        </div>
    )
}

export default Home