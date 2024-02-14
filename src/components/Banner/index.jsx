import React from 'react'

const Bannerteal = ({title}) => {
  return (
    <div className='w-full bg-[#17a2b8] h-[400px]  grid justify-center items-center text-center'>
        <div className='text-white grid justify-center items-center text-center'>
            <p className='text-[40px] md:text-[55px] lg:text-[65px] xl:text-[70px] font-[handlee] font-semibold'> {title}</p>
            <p> <a href="/" className='no-underline hover:underline'> Home</a> / {title}</p>
        </div>
    </div>
  )
}

export default Bannerteal