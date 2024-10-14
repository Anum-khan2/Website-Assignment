
import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Style from './About.module.css'
const About: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg mb-4">
          I`m a dedicated web developer with a knack for creating responsive and interactive websites. I thrive on turning ideas into reality and love solving problems through code.
        </p>
        <p className="text-gray-700 text-lg">
          With a background in development, I focus on building user-friendly experiences that connect people with technology.
        </p>
      </div>
    </section>
  );
}
export default About;
