import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-10 md:gap-20 pb-20">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
