import React, { useState } from 'react'
import StartupDetails from './StartupDetails';
import Modal from 'react-modal';


function StartupCard({data}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
   
  return (
    <div className='relative'>
    <div className='m-4 bg-gradient-to-r from-green-200 to-red-200 p-8 pt-2 shadow-lg 
    border-s-violet-200 rounded-lg hover:scale-110 ease-in-out duration-500 cursor-pointer' onClick={openModal}>
        <div className='flex flex-col flex-wrap w-52 gap-2'>
            <h1 className='text-center text-3xl text-blue-800 font-semibold'>{data.company_name}</h1>
             <p className='text-base text-yellow-600'><span className='text-lg font-medium mr-2 text-pink-800'>City:</span>{data.city}</p>
             <p className='text-base text-yellow-600'><span className='text-lg font-medium mr-2 text-pink-800'>Starting year:</span>{data.starting_year}</p>
             <p className='text-base text-yellow-600'><span className='text-lg font-medium mr-2 text-pink-800'>Funding Amount:</span>{data.funding_amount==''?0:data.funding_amount}</p>
        </div>
    </div>
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Startup Details'
        className='Modal'
        overlayClassName='Overlay'
        style={{
          content: {
            width: '550px',
            background: 'linear-gradient(to bottom, white, yellow)',
            padding: '2px',
            top: '50%',
            left: '50%',
            bottom: 'auto',
            right: 'auto',
            zIndex: '40',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <StartupDetails data={data} onClose={closeModal}/>
      </Modal>
    
    </div>
  )
}
 
export default StartupCard