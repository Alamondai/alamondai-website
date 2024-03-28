"use client"
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import SectionOne from "./home/Section1";
import SectionTwo from "./home/Section2";
import SectionThree from "./home/Section3";
import SectionFour from "./home/Section4";
import SectionFive from "./home/Section5";
import SectionSix from "./home/Section6";


export default function Home() {

  const firebaseConfig = {
    apiKey: "AIzaSyBDGUSCEaj2AFWLiBRXVQ3Nm7DF75Mrl_o",
    authDomain: "alamondai.firebaseapp.com",
    projectId: "alamondai",
    storageBucket: "alamondai.appspot.com",
    messagingSenderId: "494156209947",
    appId: "1:494156209947:web:3ba6ebd8c1afc89486fdbe",
    measurementId: "G-Z6HQ548PPY"
  };

  if (getApps().length < 1) {
    const app = initializeApp(firebaseConfig);
    if (app.name && typeof window !== 'undefined') {
      const analytics = getAnalytics(app);
    }
  }

  return (
    <main className="w-full h-full flex flex-col gap-10">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      {/* <div className="h-40">
      </div> */}
    </main>
  );

}


