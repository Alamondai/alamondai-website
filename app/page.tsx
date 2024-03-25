import SectionOne from "./home/Section1";
import SectionTwo from "./home/Section2";
import SectionThree from "./home/Section3";
import SectionFour from "./home/Section4";
import SectionFive from "./home/Section5";
import SectionSix from "./home/Section6";

export default function Home() {
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


