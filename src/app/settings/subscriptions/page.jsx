import Sidebar from '@/components/dashboard/Sidebar'
import SubscriptionsPage from '@/components/settings/subscription/SubscriptionsPage'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <SubscriptionsPage />
      </section>
    </div>
  )
}
