import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Header from '../components/dashboard/Header'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Header />
        <p>CONTENT HERE</p>
      </section>
    </div>
  )
}

export default Dashboard
