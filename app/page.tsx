import SectionFive from "./home/sectionFive";
import SectionFour from "./home/sectionFour";
import SectionOne from "./home/sectionOne";
import SectionThree from "./home/sectionThree";
import SectionTwo from "./home/sectionTwo";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-10">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />

      <div className="h-40">

      </div>
    </main>
  );
}
