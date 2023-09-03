import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Make sure to register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


export default function HomePage() {

    useEffect(() => {
        // Select the element to animate
        const slideInElement = document.querySelector('.slide-in-element');
        const fadeInElement = document.querySelector('.fade-in-element');
    

        // Create the slide-in animation
        gsap.fromTo(
          slideInElement,
          { y: 0, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: 1,
            duration: 2,
            scrollTrigger: {
              trigger: slideInElement,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play reverse play reverse',
              continuous: true,
            },
          }
        );
    
        // Create the fade-in animation
        gsap.fromTo(
          fadeInElement,
          { opacity: 0 },
          {
            opacity: 1,
            delay: 0.5, // Add a delay of 0.5 seconds
            scrollTrigger: {
              trigger: fadeInElement,
              start: 'top 70%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, []);

      

  return (
    <>


        <section id="home" className="transition-colors duration-1500 font-outfit flex flex-nowrap overflow-hidden h-screen w-auto bg-light-cream justify-center items-center text-center dark:bg-dark-gray">
        <div className="absolute w-full md:max-w-xl lg:max-w-3xl top-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 640 800" opacity="1">
          <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="130" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur" />
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse rx="239" ry="277.5" cx="195.27342719432573" cy="249.31185625485728" fill="hsla(37, 100%, 50%, .30)" />
          </g>
        </svg>
      </div>        
          <motion.div className="slide-in-element">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div id="text-4" className="block text-center font-outfit justify-center items-center md:top-72 z-10">
                    <h1 className="text-dark-gray text-4xl md:text-6xl dark:text-light-cream">Hi, I'm Alex</h1>
                    <p className="text-dark-gray font-light mt-10 mx-20 text-lg md:text-2xl dark:text-light-cream">This is my official portfolio website where I showcase all of my work related to software development.</p>
                    <a target={'_blank'} href='.//Aleksandr_Garin_CV.pdf' className="mt-10 md:mt-15 inline-flex items-center justify-center px-5 py-3 text-base font-light text-center text-dark-gray bg-neutral-200 rounded-lg hover:bg-dark-gray hover:text-neutral-200 focus:ring-1 focus:ring-dark-gray dark:focus:ring-dark-gray">
                        Download CV
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                        </svg>
                    </a>
                </div>
            
                <div className="mt-20 md:mt-0 items-center text-center my-auto mx-auto overflow-hidden w-48 h-48 md:w-72 md:h-72 border border-dark-gray dark:border-light-cream rounded-3xl flex flex-col justify-center">
                    <p className="text-1 font-outfit font-extrabold text-dark-gray dark:text-light-cream text-5xl md:text-7xl tracking-widest">POR-</p>
                    <p className="text-2 font-outfit font-extrabold text-dark-gray dark:text-light-cream text-5xl md:text-7xl tracking-widest">TFO-</p>
                    <p className="text-3 font-outfit font-extrabold text-dark-gray dark:text-light-cream text-5xl md:text-7xl tracking-widest">LIO.</p>
                </div>
               
            </div>
            </motion.div>
        </section>

    </>
  )
}


