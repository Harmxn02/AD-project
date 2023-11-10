"use client"
// import fetch from 'isomorphic-fetch'

import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
<<<<<<< HEAD
import Statistics from '../../components/dashboard/Statistics'
=======
// import SubscriptionsPage from "@/components/settings/subscription/SubscriptionsPage"

>>>>>>> 87590cbc67095f602fa15778333db92483283039

export default function Home() {

  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Header />
<<<<<<< HEAD
        <Statistics />
=======
>>>>>>> 87590cbc67095f602fa15778333db92483283039
      </section>

      {/* <SubscriptionsPage/> */}
    </div>
  )
}