import React from 'react';
import styles from './Herosection.module.css';

// components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="bg-pink-100 h-screen flex flex-col justify-center items-center text-center">
      {/* Introduction */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I`m Anum</h1>
      {/* Tagline */}
      <p className="text-xl text-gray-600 mb-8">Passionate Web Developer Crafting Dynamic and User-Friendly Experiences</p>
      {/* Call to Action */}
      <a href="#projects" className="px-6 py-3 bg-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600">
        View My Projects
      </a>
    </section>
  );
}





// const Hero = () => {
//   return (
//     <section className={styles.hero}>
//       <h2>Welcome to the Hero Section</h2>
//       <p>I am a web developer with a passion for building modern web applications.</p>
//     </section>
//   );
// };

// export default Hero;

