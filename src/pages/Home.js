import React, { useEffect, useState } from 'react'
import StartupList from '../components/StartupList';
import { getAllStartups, getStartupByIndustry,searchStartups } from '../services/api';
import FilterStartups from '../components/FilterStartups';
import SearchStartups from '../components/SearchStartups';
import Navbar from '../components/Navbar';
import { Spinner } from 'flowbite-react';   


function Home() {
    const [startupData, setStartupData] = useState([]);
    const [filterData,setFilterData]=useState([]);
    const  [loading,setLoading]=useState(true);

    //fetching all startup 
    const getStartup = async () => {
        try{
            setLoading(true)
        const data = await getAllStartups();
        setStartupData(data);
        setFilterData(data)
        }catch(err){
            console.error('Error fetching all startups:', err);
        }finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        getStartup();
    }, []);


    //filtering startup by industry name
    const handleFilterData = async (industry) => {
        try {
            const data = await getStartupByIndustry(industry);
            setFilterData(data)

        } catch (err) {
            console.error('Error filtering startups by industry:', err);
        }
    }

    //searching startup
    const handleSearch=async (query)=>{
        try{
          const data=await searchStartups(query);
          setFilterData(data);
        }catch(err){
            console.error('Error handling search:', err);
        }
    }  

    if(loading){
        return <Spinner aria-label="Left-aligned spinner example" size="xl" />
    }

    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-row gap-11'>
                <FilterStartups startupData={startupData} handleFilterData={handleFilterData} />
                <div className='flex-grow-1'>
                    <SearchStartups handleSearch={handleSearch}/>
                    <StartupList startupData={filterData} />
                </div>
            </div>
        </div>
    )
}

export default Home