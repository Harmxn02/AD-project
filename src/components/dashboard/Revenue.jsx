import React from 'react'
import Title from '@/components/utility/Title'
import LineBarChart from '@/components/dashboard/charts/LineBarChart'

const Revenue = () => {
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const dataCombined = [
        {
            type: 'line',
            label: 'Adriacoin earned',
            data: [43.21, 9.54, 0, 0, 98.65, 0.52, 0, 2.47],
            backgroundColor: '#315e65',
            borderColor: 'rgba(49, 94, 101, 1)',
            borderWidth: 3
        },
        {
            type: 'bar',
            label: 'Adriacoin earned',
            data: [43.21, 9.54, 0, 0, 98.65, 0.52, 0, 2.47],
            backgroundColor: '#62A0AA73',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }
    ];

    console.log(dataCombined)

  return (
    <section className='mt-12'>
        <Title content="Revenue" />
        <p className='font-light'>An overview of revenue changes within a specific timeframe for quick analysis.</p>
            <div className="w-full mt-4 h-[25rem]">
                <LineBarChart labels={labels} dataObject={dataCombined} />
            </div>
    </section>
  )
}

export default Revenue
