import React from 'react';
import Hero from '../components/sections/Hero';
import MarqueeStrip from '../components/sections/Marquee';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import Gallery from '../components/sections/Gallery';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Inquiry from '../components/sections/Inquiry';
import Contact from '../components/sections/Contact';

const Home = () => (
  <main>
    <Hero />
    <MarqueeStrip />
    <Services />
    <WhyUs />
    <Gallery />
    <About />
    <Testimonials />
    <Pricing />
    <Inquiry />
    <Contact />
  </main>
);

export default Home;
