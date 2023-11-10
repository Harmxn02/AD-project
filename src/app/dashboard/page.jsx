"use client"
import fetch from 'isomorphic-fetch'

import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import { useState } from 'react';



export default function Home() {

  const [apiData, setApiData] = useState(null);

  const URL = `https://project-2.ti.howest.be/2023-2024/group-17/api`

  const fetchData = async () => {
    try {
      const response = await fetch(URL + '/plans');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error", error);
    } 
  };

  fetchData();

  return (
    <div className='flex'>
      <Sidebar />
      <section className='pt-16 px-24 w-full'>
        <Header />
        {apiData ? (
          <p>{JSON.stringify(apiData, null, 2)}</p>
        ): (
          <p>Loading ...</p>
        )}
      </section>
    </div>
  )
}