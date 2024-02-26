"use client"

import React, { useState } from 'react';

const tabs = ['OverView', 'Fundamentals', 'New Insights', 'Sentiments', 'Team', 'Technical', 'Tokenomics'];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[3]);

  return (
    <ul className="whitespace-nowrap overflow-x-auto flex flex-row w-full items-center justify-between cursor-pointer text-black h-16 font-medium" style={{scrollbarWidth:"none"}}> 
      {tabs.map(tab => (
        <li
          key={tab}
          className={`mx-4 ${tab === activeTab ? 'border-b-4 border-blue-500 font-semibold text-blue-500 ' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;