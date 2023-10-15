import React from "react";
import { HeroSection } from "../Components/LandingPage/HeroSection";
import { AboutUsSection } from "../Components/LandingPage/AboutUsSection";
import { EventSection } from "../Components/LandingPage/EventSection";
import { WhyUs } from "../Components/LandingPage/WhyUs";
import { Sponsors } from "../Components/LandingPage/Sponsors";
import "./Scrollbar.css";
import Gallery from "../Components/LandingPage/Gallery";
import { Contact } from "../Components/LandingPage/Contact";
import { Footer } from "../Components/LandingPage/Footer";
import Form from "../Components/LandingPage/Form";

export default function Landing() {
  return (
    <>
      <div className="landing-container">
        <HeroSection />
        <AboutUsSection />
        <Form />
        <WhyUs />
        <EventSection />
        <Gallery />
        <Sponsors />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
