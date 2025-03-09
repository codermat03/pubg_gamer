import AboutMe from "./Components/AboutMe/AboutMe";
import HeroSection from "./Components/HeroSection/HeroSection";
import WhoWeAre from "./Components/SecondHeroSection/SecondHeroSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <WhoWeAre></WhoWeAre>
      <AboutMe></AboutMe>
    </div>
  );
}
