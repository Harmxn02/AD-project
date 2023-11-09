import Sidebar from '@/components/dashboard/Sidebar'

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <p>test content</p>
      </section>
    </div>
  )
}
