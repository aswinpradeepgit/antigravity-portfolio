import React from 'react';
import Background from './components/Background';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen selection:bg-blue-200 selection:text-blue-900">
        <Background />
        <Navbar />

        <main className="relative z-10 flex flex-col gap-10 md:gap-20 pb-20">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <footer className="relative z-10 py-8 text-center text-gray-500 text-sm glass-panel mx-6 mb-6">
          <p>© 2026 Aswin Pradeep. Crafted with React, Framer Motion & ❤️</p>
        </footer>
      </div>
    </SmoothScroll>
  );
}

export default App;
