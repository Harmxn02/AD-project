import Sidebar from '@/components/dashboard/Sidebar'
import Transactions from '@/components/transactions/Transactions'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 pl-24'>
        <Transactions />
      </section>
    </div>
  )
}
