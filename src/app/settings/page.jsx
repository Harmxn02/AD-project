import Account from '@/components/settings/Account';
import Sidebar from '@/components/dashboard/Sidebar';
import SubscriptionsPage from "../../components/settings/subscription/SubscriptionsPage";
import PrivacyAndPersonalization from '../../components/settings/PrivacyAndPersonalization';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Account/>    
        <PrivacyAndPersonalization/>
        <Account/>

        {/* should be under settings > change subscription, routing not yet implemented */}
        {/* Im putting it here, so we can see something when we render the client */}
        {/* <SubscriptionsPage /> */}
      </section>
    </div>
  )
}
