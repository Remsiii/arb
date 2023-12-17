"use client"

import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';


// import Navbar from '@/components/navbar'

export default function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  // const { userId } = auth();

  // if (!userId) {
  //   redirect('/sign-in');
  // }

  // const store = await prismadb.store.findFirst({ 
  //   where: {
  //     id: params.storeId,
  //     userId,
  //   }
  //  });


  useEffect(() => {
    // Stelle sicher, dass Code nur auf der Client-Seite ausgeführt wird
    if (!localStorage.getItem('store')) {
      redirect('/');
    };
  
  },);


  return (
    <>
      {/* <Navbar /> */}
      <div>Here is the navbar</div>
      {children}
    </>
  );
};