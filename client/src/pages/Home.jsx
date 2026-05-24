import React from 'react';
import Hero from '../components/sections/Hero';
import MarqueeStrip from '../components/sections/Marquee';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Gallery from '../components/sections/Gallery';
import About from '../components/sections/About';
import VideoShowcase from '../components/sections/VideoShowcase';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import Inquiry from '../components/sections/Inquiry';
import Contact from '../components/sections/Contact';

const Home = () => (
  <main>
    <Hero />
    <MarqueeStrip />
    <Services />
    <Stats />
    <Gallery />
    <VideoShowcase />
    <About />
    <Testimonials />
    <Pricing />
    <Inquiry />
    <Contact />
  </main>
);

export default Home;
