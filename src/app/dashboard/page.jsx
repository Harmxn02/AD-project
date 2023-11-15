"use client"
// import fetch from 'isomorphic-fetch'

import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import Statistics from '@/components/dashboard/Statistics';
import RecentXplorations from "@/components/dashboard/RecentXplorations";

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Header />
        <Statistics />
        <RecentXplorations />
      </section>
    </div>
  )
}
