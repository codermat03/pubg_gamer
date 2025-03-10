import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import HeroSection from "./Components/HeroSection/HeroSection";
import WhoWeAre from "./Components/SecondHeroSection/SecondHeroSection";
import ServicesSection from "./Components/Services/Services";
import ShowcaseVideos from "./Components/ShowCaseVideos/ShowCaseVideos";
import TestimonialsCollab from "./Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <WhoWeAre></WhoWeAre>
      <AboutMe></AboutMe>
      <ShowcaseVideos></ShowcaseVideos>
      <ServicesSection></ServicesSection>
      <TestimonialsCollab></TestimonialsCollab>
      <ContactMe></ContactMe>
    </div>
  );
}
