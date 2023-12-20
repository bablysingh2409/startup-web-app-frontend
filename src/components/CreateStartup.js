import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createnewstartup } from '../services/api'

function CreateStartup() {
  const [formData, setFormData] = useState({
    companyName: '',
    city: '',
    startingYear: '',
    founders: '',
    industry: '',
    fundingAmount: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const statusCode=await createnewstartup(formData);
    if(statusCode==200){
      alert('startup Created successfully');
    }
    
    setFormData({
      companyName: '',
    city: '',
    startingYear: '',
    founders: '',
    industry: '',
    fundingAmount: ''
    })
    
  }
  return (
    <div className=' h-screen '>
      <Link to='/' className='text-red-950 font-semibold text-lg hover:text-white border-2 p-2'>Back To Home</Link>
      <div className='w-[410px] h-[510px] flex flex-col justify-between items-center bg-teal-800 rounded-lg
      border-2 border-white text-white shadow-lime-800/60 m-auto'>
        <form className='h-52 w-full p-4 space-y-4' onSubmit={handleSubmit}>
          <input type='text' placeholder='Company Name...' className='inputClass' name='companyName' value={formData.companyName} onChange={handleChange} required/>
          <input type='text' placeholder='City Name...' className='inputClass' name='city' value={formData.city} onChange={handleChange} required />
          <input type='text' placeholder='Starting Year...' className='inputClass' name='startingYear' value={formData.startingYear} onChange={handleChange} required/>
          <input type='text' placeholder='Founder...' className='inputClass' name='founders' value={formData.founders} onChange={handleChange} required />
          <input type='text' placeholder='Industry...' className='inputClass' name='industry' value={formData.industry} onChange={handleChange} required/>
          <input type='text' placeholder='Funding Amount...' className='inputClass' name='fundingAmount' value={formData.fundingAmount} onChange={handleChange} required/>
          <button className='h-[38px] w-44 bg-white text-teal-800 font-bold rounded
            hover:bg-orange-300 hover:text-white ml-24'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStartup