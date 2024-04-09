import React from 'react'

export default function HelpCenter() {
  return (
    <div className='w-full mx-auto md:container h-full min-h-screen flex flex-col gap-10 items-center py-28'>
      <div className='w-full md:w-2/3 flex flex-col gap-8 px-5 md:px-2 text-gray-600'>
        {/* Title */}
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl md:text-3xl font-bold'>Help Center</h1>
          <h1 className='text-xl md:text-2xl font-semibold'>Welcome to Alamondai Help Center!</h1>
        </div>

        {/* Primary Text*/}
        <div className='flex flex-col '>
          <p className='text-base md:text-lg'>Welcome to the Alamondai Help Center! We're here to help you get the most out of our products and services.
            This comprehensive resource center is designed to answer your questions, troubleshoot issues, and guide you through using our platform.</p>
        </div>

        {/* Category */}
        <div className='w-full h-full flex flex-col gap-5 text-base md:text-lg'>
          <h1 className=' font-bold'>Browse by Category:</h1>
          <ul className='list-disc list-inner'>
            <li><b>Getting Started:</b> This section provides introductory guides, tutorials, and FAQs to help you set up your account, understand core features, and navigate the platform with ease.</li>
            <li><b>Troubleshooting:</b> Encountered an issue? This section offers solutions to common problems you might face while using our products or services. Follow our step-by-step guides or browse FAQs to get your questions answered.</li>
            <li><b>In-Depth Guides:</b> Delve deeper into specific functionalities with our detailed guides. These resources provide comprehensive explanations and walkthroughs for advanced users who want to maximize their experience.</li>
            <li><b>Billing & Payments:</b> Find answers to your billing and payment inquiries here. This section covers topics like subscription plans, payment methods, troubleshooting payment issues, and managing invoices.</li>
          </ul>
        </div>




      </div>

    </div>
  )
}
