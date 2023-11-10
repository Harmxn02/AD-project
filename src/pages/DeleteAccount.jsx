import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import DeleteAccountPrompt from '../components/settings/DeleteAccountPrompt'

const DeleteAccount = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <DeleteAccountPrompt />
      </section>
    </div>
  )
}

export default DeleteAccount
