import Image from "next/image";
import SectionOne from "./home/sectionOne";
export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-10">
      <SectionOne />
    </main>
  );
}
