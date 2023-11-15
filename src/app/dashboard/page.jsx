"use client"
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import Statistics from '@/components/dashboard/Statistics';
import RecentXplorations from "@/components/dashboard/RecentXplorations";
import RecentFinds from "@/components/dashboard/RecentFinds";
import Revenue from "@/components/dashboard/Revenue";

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 pb-8 px-24 w-full max-h-screen overflow-y-auto scrollbar scrollbar-thumb-brandCyan scrollbar-track-transparent'>
        <Header />
        <Statistics />
        <RecentFinds/>
        <RecentXplorations />
        <Revenue />
      </section>
    </div>
  )
}
