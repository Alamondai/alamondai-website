import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';

// Layouts
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

// Styles
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alamondai.com/'),
  icons: {
    icon: '/logo.png',
  },
  title: "Alamondai",
  description: "Software Development - Website Development and Mobile App Development",
  applicationName: 'Next.js',
  keywords: [
    'Software Development',
    'Fullstack Development',
    'Reactjs',
    'Nodejs',
    'Frontend Developer',
    'Ethiopia Developer',
    'Flutter Developer',
    'Software Developer in Ethiopia',
    'Reactjs Developer in Ethiopia',
    'Ethiopia',
    'Natnael Engeda',
    'Natty Engeda',
    'Natnael',
    'Natty',
    'Alamondai',
    'Alamondai Software Development',
    'Alamondai Software Development Ethiopia',
    'Alamondai Software Development Addis Ababa',
    'Alamondai.com',
    'Ethiopia Software Development',
    'Ethiopia Software Development Company',
  ],
  creator: 'Alamondai',
  authors: [
    {
      name: 'Alamondai',
      url: 'https://portfolio.alamondai.com'
    }
  ],
  publisher: "Alamondai",
  openGraph: {
    title: 'Alamondai',
    description: "Software Development - Website Development and Mobile App Development",
    url: "https://www.alamondai.com/",
    siteName: "Alamondai",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  twitter: {
    card: "summary_large_image",
    title: "Alamondai",
    description: "Software Development - Website Development and Mobile App Development",
    site: "@Alamondai",
    images: ['/seo-image.jpg'],
    creator: "@NatnaelEngeda",
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['nattynengeda@gmail.com', 'https://portfolio.alamondai.com']
    }
  },
  appleWebApp: {
    title: 'Alamondai',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/logo.png'
    ]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className='font-Roboto'>
        <Header />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
