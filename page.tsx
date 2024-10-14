"use client";
import React from 'react';
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from '../components/Hero/Herosection';
import AboutSection from '../components/About';
import ProjectsSection from '../components/Project';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
      <Hero />
       
        <nav>
        {/* <About />
        <Projects /> */}
        <Contact />
      
      </nav>
      </main>
      <Footer />
    </div>
  );
};

export default Home;


