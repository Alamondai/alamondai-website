import React from 'react'

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}
export default function Page({ params }: { params: { id: string } }) {

  return (
    <div className='w-full h-full min-h-screen'>

    </div>
  )
}

