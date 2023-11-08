import React from 'react'
import ProfilePicture from '../../../public/profile-picture.avif'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <header className='w-[250px] h-screen bg-gray-200'>
        <div className='p-8 text-center'>
            <Image
                src={ProfilePicture}
                alt='Profile Picture'
                width={80}
                height={80}
                className='w-[80px] h-[80px] rounded-full m-auto mb-4'
            />
            <h3 className='text-brandCyan'>Alexander Karpenko</h3>
            <h3 className='text-[0.875rem] text-brandBlack'>A.Karpenko@adriamail.com</h3>
        </div>
    </header>
  )
}

export default Sidebar
