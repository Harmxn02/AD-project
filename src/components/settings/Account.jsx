import React from 'react'
import Title from '../utility/Title'


const Account = () => {
  return (
    <>
        <section>
            <Title content="Account"/>

            {/* Active Subscription */}
            <div className='w-4/6 border border-[#B3B3B3] py-6 px-4 flex gap-5 '>

                <div>
                    {/* ICON */}
                    <div className='w-8 h-8 bg-black'></div>
                </div>
                <div className='flex flex-col gap-4'>
                    {/* CONTENT */}
                    <div>
                        <h3 className='font-medium text-2xl'>Active Subscription</h3>
                        <p className='font-light'>Change or cancel your active subscription.</p>
                    </div>

                    <div className='flex gap-5'>
                        <a href="#todo" className='border border-black px-4 py-3 font-medium'>Change subscription</a>
                        <a href="#todo" className='border border-black px-4 py-3 font-medium'>Cancel subscription</a>
                    </div>
                </div>




            </div>

            {/* Danger Zone */}



        </section>
    </>
  )
}

export default Account
