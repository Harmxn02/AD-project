import Account from '@/components/settings/Account'
import Sidebar from '@/components/dashboard/Sidebar'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <Account />
    </div>
  )
}
