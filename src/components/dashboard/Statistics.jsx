import React from 'react'
import Title from '@/components/utility/Title'
import BarChart from '@/components/dashboard/charts/BarChart'
import RadarChartStacked from '@/components/dashboard/charts/RadarChartStacked'

const Statistics = () => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const data = [{
        data: [10, 20, 30, 15, 25, 35, 45],
        label: 'Minutes Flown',
        backgroundColor: '#62A0AA73',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    }];

  return (
    <section>
        <Title content="Statistics" />
        <div className='flex justify-between'>
            <div className='max-w-[600px] h-full'>
                <h3 className='text-[1.125rem] font-semibold'>Minutes flown</h3>
                <p className='font-light'>Charting flight durations within a specific time frame, offering a clear overview for analysis.</p>
                <div className="w-full mt-4 h-[25rem]">
                    <BarChart labels={labels} dataObject={data} />
                </div>
            </div>
            <div className='max-w-[600px] h-full'>
                <h3 className='text-[1.125rem] font-semibold'>Regions</h3>
                <p className='font-light'>A visual summary of flight time across regions, highlighting minutes flown in a specified period.</p>
                <div className="w-full h-[28rem] flex justify-center items-center">
                    <RadarChartStacked />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistics
