import React from 'react'
import Title from '../utility/Title'
// import BarChart from '@/components/dashboard/charts/barChart'

const Statistics = () => {
  return (
    <section>
        <Title content="Statistics" />
        <div className='flex justify-between'>
            <div className='max-w-[600px]'>
                <h3 className='text-[1.125rem] font-semibold'>Minutes flown</h3>
                <p className='font-light'>Charting flight durations within a specific time frame, offering a clear overview for analysis.</p>
                <div className="w-full mt-4">
                    <BarChart />
                </div>
            </div>
            <div className='max-w-[600px]'>
                <h3 className='text-[1.125rem] font-semibold'>Minutes flown</h3>
                <p className='font-light'>Charting flight durations within a specific time frame, offering a clear overview for analysis.</p>
                <div className="w-full mt-4">
                    <BarChart />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistics
