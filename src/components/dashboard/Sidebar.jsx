import React from 'react'
import ProfilePicture from '../../../public/avatar-profile.jpg'
import HouseIcon from '../../../public/icons/house.svg'
import SettingsIcon from '../../../public/icons/settings.svg'
import TransactionIcon from '../../../public/icons/transaction.svg'
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
        <div className='grid grid-cols-2 text-center'>
            <div className='border-t border-r border-brandBlack p-3'>
                <h4>Distance traveled</h4>
                <p>315km</p>
            </div>
            <div className='border-t border-brandBlack p-3'>
                <h4>Distance traveled</h4>
                <p>315km</p>
            </div>
            <div className='border-t border-b border-brandBlack p-3 col-span-2'>
                <h4>Items collected</h4>
                <p>3</p>
            </div>
        </div>
        <nav className='p-7'>
            <ul className='flex flex-col gap-5'>
                <li>
                    <a href="#" className='flex items-center gap-4'>
                        <Image src={HouseIcon} width={25} height={25}/>
                        <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center gap-4'>
                        <Image src={TransactionIcon} width={25} height={25}/>
                        <p>Transactions</p>
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center gap-4'>
                        <Image src={SettingsIcon} width={25} height={25}/>
                        <p>Settings</p>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Sidebar
