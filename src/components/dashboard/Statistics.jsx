import React from 'react'
import Title from '@/components/utility/Title'
import BarChart from '@/components/dashboard/charts/BarChart'
import RadarChartStacked from '@/components/dashboard/charts/RadarChartStacked'

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
                <h3 className='text-[1.125rem] font-semibold'>Regions</h3>
                <p className='font-light'>A visual summary of flight time across regions, highlighting minutes flown in a specified period.</p>
                <div className="w-full mt-4">
                    <RadarChartStacked />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistics
