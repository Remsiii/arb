"use client"
import React, { useEffect } from 'react';


interface DashboardPageProps {
  params: {
    storeId: string;
  };
};

const DashboardPage: React.FC<DashboardPageProps> = ({ 
  params
}) => {
  
  return (
    <div>Active Store: {params.storeId}</div>
  )
}

export default DashboardPage