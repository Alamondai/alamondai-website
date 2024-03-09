"use client"
import { useState } from 'react'

export default function SectionFive() {


  const [activeTab, setActiveTab] = useState('Backend');

  const tabs = ['Backend', 'Frontend', 'Databases', 'CMS', 'Cloud Testing', 'DevOps'];

  return (
    <div className='w-full h-full flex flex-col gap-10 py-10'>
      {/* Title */}
      <div className='w-full flex flex-col gap-8 items-center'>
        <hr className='text-third w-28 border rounded-full h-2 border-third bg-third' />
        <div className='w-full flex flex-col items-center'>
          <p className='text-3xl font-light '>
            Our
          </p>
          <h1 className="self-center text-4xl font-bold text-gray-800 whitespace-nowrap leading-[54.95px]">
            Tech Stack
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className='w-full h-full flex flex-col gap-10 items-center justify-center'>
        <div className='w-full mx-auto h-auto flex flex-row gap-10 items-center justify-center'>
          {tabs.map(tab => (
            <button
              className={`techStackTabHead ${activeTab === tab ? 'techStackTabHeadActive' : ''}`}
              key={tab}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div>
          {activeTab === 'Backend' && BackendContent()}
          {activeTab === 'Frontend' && FrontendContent()}
          {activeTab === 'Databases' && DatabasesContent()}
          {activeTab === 'CMS' && CMSContent()}
          {activeTab === 'Cloud Testing' && CloudTestingContent()}
          {activeTab === 'DevOps' && DevOpsContent()}
        </div>

      </div>
    </div >
  )
}


const BackendContent = () => {
  return (
    <div>

    </div>
  );
}

const FrontendContent = () => {
  return (
    <div className=''>

    </div >
  );
}

const DatabasesContent = () => {
  return (
    <div>

    </div>
  );
}

const CMSContent = () => {
  return (
    <div>

    </div>
  );
}

const CloudTestingContent = () => {
  return (
    <div>

    </div>
  );
}

const DevOpsContent = () => {
  return (
    <div>

    </div>
  );
}