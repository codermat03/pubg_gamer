import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import DigitalServices from "./Components/DigitalService/DigitalService";
import HeroSection from "./Components/HeroSection/HeroSection";
import WhoWeAre from "./Components/SecondHeroSection/SecondHeroSection";
import ServicesSection from "./Components/Services/Services";
import ShowcaseVideos from "./Components/ShowCaseVideos/ShowCaseVideos";
import BattleGearStore from "./Components/Store/Store";
import TestimonialsCollab from "./Components/Testimonial/Testimonial";
import UpcomingEvents from "./Components/Tournaments/Tournaments";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <WhoWeAre></WhoWeAre>
      <AboutMe></AboutMe>
      <ShowcaseVideos></ShowcaseVideos>
      <ServicesSection></ServicesSection>
      <BattleGearStore></BattleGearStore>
      <DigitalServices></DigitalServices>
      <UpcomingEvents></UpcomingEvents>
      <TestimonialsCollab></TestimonialsCollab>
      <ContactMe></ContactMe>
    </div>
  );
}
