import React from 'react'
import Title from '../utility/Title'

const Transactions = () => {
  return (
    <>

        <Title content="Transactions" />   
        
        <div className='bg-white py-8  w-8/12'>
            <table className='mx-auto text-center'>
                <thead>
                    <th>Transaction ID</th>
                    <th>Date</th>
                    <th>Subscription</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>qsdqsd</td>
                        <td>sqsd</td>
                        <td>tger</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>qsdqsd</td>
                        <td>sqsd</td>
                        <td>tger</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>qsdqsd</td>
                        <td>sqsd</td>
                        <td>tger</td>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>qsdqsd</td>
                        <td>sqsd</td>
                        <td>tger</td>
                    </tr>   
                </tbody>    
            </table> 

        </div>



    </>
  )
}

export default Transactions