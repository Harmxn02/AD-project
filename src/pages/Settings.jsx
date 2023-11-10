import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Account from '../components/settings/Account'

const Settings = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Account/>
      </section>
    </div>
  )
}

export default Settings
