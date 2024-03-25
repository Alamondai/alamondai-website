"use client"
import { useState } from 'react';
import Image from 'next/image';

// Images

// Backend
import nodeImage from '../assets/images/techstack/backend/nodejs.png';
import phpImage from '../assets/images/techstack/backend/php.png';
import mysqlImage from '../assets/images/techstack//backend/mysql.png';
import javaImage from '../assets/images/techstack/backend/java.png';
import pythonImage from '../assets/images/techstack/backend/python.png'
import rubyonRailsImage from '../assets/images/techstack/backend/rubyonrails.png';
import goLangImage from '../assets/images/techstack/backend/go.png';
import mongodbImage from '../assets/images/techstack/backend/mongodb.png';

// Frontend 
import reactjsImage from '../assets/images/techstack/frontend/reactjs.svg';
import nextjsImage from '../assets/images/techstack/frontend/nextjs.svg';
import vuejsImage from '../assets/images/techstack/frontend/vuejs.png';
import flutterImage from '../assets/images/techstack/frontend/flutter.png';

// Backend 
import postgreSqlImage from '../assets/images/techstack/database/postgresql.png'


export default function SectionFive() {

  const [activeTab, setActiveTab] = useState('Backend');

  const tabs = ['Backend', 'Frontend', 'Databases'];
  // const tabs = ['Backend', 'Frontend', 'Databases', 'CMS', 'Cloud Testing', 'DevOps'];

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
          {/* {activeTab === 'CMS' && CMSContent()}
          {activeTab === 'Cloud Testing' && CloudTestingContent()}
          {activeTab === 'DevOps' && DevOpsContent()} */}
        </div>

      </div>
    </div >
  )
}


const BackendContent = () => {
  const backendStack1 = [
    { id: 1, name: 'Node.js', image: nodeImage },
    { id: 2, name: 'PHP', image: phpImage },
    { id: 3, name: 'MySQL', image: mysqlImage },
    { id: 4, name: 'Java', image: javaImage },
    { id: 5, name: 'Python', image: pythonImage },
  ];

  const backendStack2 = [
    { id: 1, name: 'Ruby on Rails', image: rubyonRailsImage },
    { id: 2, name: 'Go', image: goLangImage },
    { id: 3, name: 'MongoDB', image: mongodbImage },
  ];


  return (
    <div className='w-full h-full flex flex-col gap-5 items-center'>
      {/* Upper Section */}
      <div className='w-full h-full flex flex-row gap-10 items-center'>
        {
          backendStack1.map(stack => (
            <div key={stack.id} className='w-40 h-40 flex flex-col gap-2 items-center'>
              <Image
                className='w-44 h-auto'
                src={stack.image}
                alt={stack.name} />
            </div>
          ))
        }
      </div>

      {/* Lower Section */}
      <div className='w-full h-full flex flex-row gap-10 items-center justify-center'>
        {
          backendStack2.map(stack => (
            <div key={stack.id} className='w-40 h-40 flex flex-col gap-2 items-end'>
              <Image
                className='w-44 h-auto'
                src={stack.image}
                alt={stack.name} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

const FrontendContent = () => {

  const frontendStack1 = [
    { id: 1, name: 'React.js', image: reactjsImage },
    { id: 2, name: 'Next.js', image: nextjsImage },
    { id: 3, name: 'Vue.js', image: vuejsImage },
    { id: 4, name: 'Flutter', image: flutterImage },
  ];
  return (
    <div className='w-full h-full flex flex-col gap-5 items-center'>
      {/* Upper Section */}
      <div className='w-full h-full flex flex-row gap-10 items-center'>
        {
          frontendStack1.map(stack => (
            <div key={stack.id} className='w-40 h-40 flex flex-col justify-center gap-2 items-center '>
              <Image
                className='w-44 h-auto'
                src={stack.image}
                alt={stack.name} />
            </div>
          ))
        }
      </div>

    </div >
  );
}

const DatabasesContent = () => {
  const databaseStack = [
    { id: 1, name: 'MySQL', image: mysqlImage },
    { id: 2, name: 'MongoDB', image: mongodbImage },
    { id: 3, name: 'PostgreSQL', image: postgreSqlImage }

  ];
  return (
    < div className='w-full h-full flex flex-col gap-5 items-center' >
      {/* Upper Section */}
      < div className='w-full h-full flex flex-row gap-10 items-center' >
        {
          databaseStack.map(stack => (
            <div key={stack.id} className='w-40 h-40 flex flex-col justify-center gap-2 items-center '>
              <Image
                className='w-44 h-auto'
                src={stack.image}
                alt={stack.name} />
            </div>
          ))
        }
      </div >
    </div >
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