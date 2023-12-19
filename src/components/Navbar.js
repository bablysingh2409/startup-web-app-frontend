import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='h-20 bg-gradient-to-r from-yellow-400 to-orange-400'>
        <div className='flex justify-between items-center p-4'>
            <img src='https://logo.com/image-cdn/images/kts928pd/production/c3fa21bee0847f3d8b65e7da1bb573104a26ddc3-359x363.png?w=1080&q=72'
             alt='logo'
             className='w-12 rounded-3xl ml-6 cursor-pointer'
             />
             <p className='mr-6 cursor-pointer text-lg font-medium text-green-900 hover:text-white'>Create A New Startup </p>
        </div>
    </nav>
  )
}

export default Navbar