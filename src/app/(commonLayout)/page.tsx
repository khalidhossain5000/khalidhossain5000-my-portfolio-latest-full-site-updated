import Image from "next/image";
import Banner from "../components/HomePage/Banner/Banner";
import About from "../components/HomePage/About/About";
import SkillsSection from "../components/HomePage/Skills/Skills";


export default function Home() {
  return (
    <div >
      <Banner/>
      <About/>
      <SkillsSection/>
    </div>
  );
}
