import Image from "next/image";
import Banner from "../components/HomePage/Banner/Banner";
import About from "../components/HomePage/About/About";
import SkillsSection from "../components/HomePage/Skills/Skills";
import Projects from "../components/HomePage/Projects/Projects";
import Headlines from "../components/shared/Headline/Headline"
import Contact from "../components/HomePage/Contact/Contact";

export default function Home() {
  return (
    <div >
      <Banner/>
      <About/>
      <SkillsSection/>
      <Projects/>
      <Headlines/>
      <Contact/>
    </div>
  );
}
