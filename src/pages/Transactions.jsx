import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Transactions from '../components/transactions/Transactions'

const TransactionsLists = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Transactions />
      </section>
    </div>
  )
}

export default TransactionsLists
