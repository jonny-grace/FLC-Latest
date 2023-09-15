import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from 'next/image';

import img from '../../public/assets/bg.jpg';
import IntegratedTabContent from './IntegratedTabContent';
import GridView from './tabfiletest';

const GaleryTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col items-center">
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList className="flex justify-center flex-wrap">
          {['Integrated', 'FMCG', 'Electronics', 'Fashion & Lifestyle', 'Food & Beverage'].map((tab, index) => (
            <React.Fragment key={tab}>
              {index > 0 && <div className="border-l mx-2 h-6 hidden md:block" />} {/* Add horizontal line */}
              <Tab>{tab}</Tab>
            </React.Fragment>
          ))}
        </TabList>

        {/* TabPanel components */}
        <TabPanel>
          <div className="bg-green-200 h-screen"><IntegratedTabContent /></div>
        </TabPanel>
        <TabPanel>
          <div className="bg-green-200 h-screen"><IntegratedTabContent /></div>
        </TabPanel>
        <TabPanel>
          <div className="bg-yellow-200 h-screen"><IntegratedTabContent /></div>
        </TabPanel>
        <TabPanel>
          <div className="bg-purple-200 h-screen"><IntegratedTabContent /></div>
        </TabPanel>
        <TabPanel>
          <div className="bg-red-200 h-screen"><IntegratedTabContent /></div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default GaleryTab;