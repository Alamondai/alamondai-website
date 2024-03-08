import SectionOne from "./home/sectionOne";
import SectionTwo from "./home/sectionTwo";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-10">
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
