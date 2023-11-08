import React from 'react'
import Button from '../utility/Button'
import ProfilePicture from '../../../public/avatar-profile.jpg'
import HouseIcon from '../../../public/icons/house.svg'
import SettingsIcon from '../../../public/icons/settings.svg'
import TransactionIcon from '../../../public/icons/transaction.svg'
import ExitIcon from '../../../public/icons/exit.svg'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <header className='bg-white w-[250px] h-screen'>
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
                <h4 className='font-bold'>Distance traveled</h4>
                <p>315km</p>
            </div>
            <div className='border-t border-brandBlack p-3'>
                <h4 className='font-bold'>Distance traveled</h4>
                <p>315km</p>
            </div>
            <div className='border-t border-b border-brandBlack p-3 col-span-2'>
                <h4 className='font-bold'>Items collected</h4>
                <p>3</p>
            </div>
        </div>
        <nav className='p-7'>
            <ul className='flex flex-col gap-5'>
                <li>
                    <a href="#" className='flex items-center gap-4'>
                        <Image src={HouseIcon} width={25} height={25}/>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center gap-4'>
                        <Image src={TransactionIcon} width={25} height={25}/>
                        Transactions
                    </a>
                </li>
                <li>
                    <a href="#" className='flex items-center gap-4'>
                        <Image src={SettingsIcon} width={25} height={25}/>
                        Settings
                    </a>
                </li>
            </ul>
            <div className='flex flex-col gap-4 mt-8'>
                <Button href="#" backgroundColor="#747474" content="START EXPLORING"/>
                <Button href="#" backgroundColor="#747474" content="SCHEDULE EXCURSION"/>
            </div>
            <a href="#" className='flex items-center mt-52 gap-4'>
                <Image src={ExitIcon} width={25} height={25}/>
                Exit
            </a>
        </nav>
    </header>
  )
}

export default Sidebar
