"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Button from '../utility/Button'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePicture from '../../../public/avatar-profile.jpg'
import HouseIcon from '../../../public/icons/house.svg'
import SettingsIcon from '../../../public/icons/settings.svg'
import TransactionIcon from '../../../public/icons/transaction.svg'
import ExitIcon from '../../../public/icons/exit.svg'

const Sidebar = () => {
  const pathname = usePathname();

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
                    <Link href="/dashboard" className={`flex items-center gap-4 ${pathname === '/dashboard' ? 'text-[#62A0AA]' : 'text-[#000000]'}`}>
                        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="25px" height="25px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill={pathname === '/dashboard' ? '#62A0AA' : '#000000'}>
                            <path d="M62.79,29.172l-28-28C34.009,0.391,32.985,0,31.962,0s-2.047,0.391-2.828,1.172l-28,28
                                c-1.562,1.566-1.484,4.016,0.078,5.578c1.566,1.57,3.855,1.801,5.422,0.234L8,33.617V60c0,2.211,1.789,4,4,4h16V48h8v16h16
                                c2.211,0,4-1.789,4-4V33.695l1.195,1.195c1.562,1.562,3.949,1.422,5.516-0.141C64.274,33.188,64.356,30.734,62.79,29.172z"/>
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/transactions" className={`flex items-center gap-4 ${pathname === '/transactions' ? 'text-[#62A0AA]' : 'text-[#000000]'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={pathname === '/transactions' ? '#62A0AA' : '#000000'} xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7H20M16 2L21 7L16 12M22 17H4M8 12L3 17L8 22" stroke={pathname === '/transactions' ? '#62A0AA' : '#000000'} strokeWidth="2"/>
                        </svg>
                        Transactions
                    </Link>
                </li>
                <li>
                    <Link href="/settings" className={`flex items-center gap-4 ${pathname === '/settings' ? 'text-[#62A0AA]' : 'text-[#000000]'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill={pathname === '/settings' ? '#62A0AA' : '#000000'} xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.5C11.0718 15.5 10.1815 15.1313 9.52515 14.4749C8.86877 13.8185 8.50002 12.9283 8.50002 12C8.50002 11.0717 8.86877 10.1815 9.52515 9.52513C10.1815 8.86875 11.0718 8.5 12 8.5C12.9283 8.5 13.8185 8.86875 14.4749 9.52513C15.1313 10.1815 15.5 11.0717 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.4797 2.30222 14.4184 2.19543 14.3268 2.11855C14.2353 2.04168 14.1195 1.99968 14 2H10C9.75002 2 9.54002 2.18 9.50002 2.42L9.13002 5.07C8.50002 5.32 7.96002 5.66 7.44002 6.05L4.95002 5.05C4.73002 4.96 4.46002 5.05 4.34002 5.27L2.34002 8.73C2.21002 8.95 2.27002 9.22 2.46002 9.37L4.57002 11C4.53002 11.34 4.50002 11.67 4.50002 12C4.50002 12.33 4.53002 12.65 4.57002 12.97L2.46002 14.63C2.27002 14.78 2.21002 15.05 2.34002 15.27L4.34002 18.73C4.46002 18.95 4.73002 19.03 4.95002 18.95L7.44002 17.94C7.96002 18.34 8.50002 18.68 9.13002 18.93L9.50002 21.58C9.54002 21.82 9.75002 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" fill={pathname === '/settings' ? '#62A0AA' : '#000000'}/>
                        </svg>
                        Settings
                    </Link>
                </li>
            </ul>
            <div className='flex flex-col gap-4 mt-8'>
                <Button href="#" backgroundColor="#62A0AA" content="START EXPLORING"/>
                <Button href="#" backgroundColor="#62A0AA" content="SCHEDULE EXCURSION"/>
            </div>
            <Link href="/" className='flex items-center mt-52 gap-4'>
                <Image src={ExitIcon} width={25} height={25}/>
                Exit
            </Link>
        </nav>
    </header>
  )
}

export default Sidebar
