import React from 'react'
import Title from '@/components/utility/Title'
import LineChart from '@/components/dashboard/charts/LineChart'

const Revenue = () => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const data = [{
        data: [10, 20, 30, 15, 25, 35, 45],
        label: '+ Ⓐ',
        backgroundColor: '#62A0AA73',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
    }];

  return (
    <section className='mt-12'>
        <Title content="Revenue (in Ⓐ)" />
        <h3 className='text-[1.125rem] font-semibold'>Minutes flown</h3>
        <p className='font-light'>An overview of revenue changes within a specific timeframe for quick analysis.</p>
            <div className="w-full mt-4 h-[25rem]">
                <LineChart labels={labels} dataObject={data} />
            </div>
    </section>
  )
}

export default Revenue
