import Sidebar from '@/components/dashboard/Sidebar'
import Transactions from '@/components/transactions/Transactions'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <Transactions />
    </div>
  )
}
