import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { motion, useScroll } from 'framer-motion';


export default function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { scrollYProgress } = useScroll();


  function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - headerHeight;
    const duration = 1000;
    const startTime = performance.now();
    

    function animation(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(1, timeElapsed / duration);
      const ease = Math.easeInOutQuad(progress, startPosition, distance, 1);
      window.scrollTo(0, ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }

  const menuItems = [
    "HOME",
    "ABOUT",
    "CONTACT",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  
  const handleLinkClick = (target) => {
    smoothScroll(target);
    if (isSmallScreen) {
      setIsMenuOpen(false); // Close the menu immediately on small screens
    } else {
      // Close the menu after a short delay to ensure smooth scrolling finishes
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };
  
  return (
    <Flowbite>
    <Navbar onMenuOpenChange={setIsMenuOpen} className='bg-blur-sm'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-sm md:text-xl font-outfit">ALEXANDER GARIN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12" justify="center">
        
        <NavbarItem>
          <Link className="text-dark-gray dark:text-light-cream cursor-pointer" onClick={() => smoothScroll('#home')}>
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-dark-gray dark:text-light-cream cursor-pointer" onClick={() => smoothScroll('#about')}>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-dark-gray dark:text-light-cream cursor-pointer" onClick={() => smoothScroll('#contact')}>
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <DarkThemeToggle className='duration-1000 border border-dark-gray dark:border-light-cream ring-0 focus:ring-0 text-dark-gray dark:text-light-cream hover:bg-dark-gray hover:text-light-cream dark:hover:bg-light-cream dark:hover:text-dark-gray '/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="gap-5 bg-blur-sm">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className='bg-blur-sm'
          isSmallScreen={isSmallScreen}
          setIsMenuOpen={setIsMenuOpen}
          >
            <Link
              className="w-full text-dark-gray border border-neutral-50 hover:border-dark-gray hover:bg-light-cream dark:text-light-cream dark:hover:bg-neutral-800 py-3 pl-3 rounded-lg dark:border dark:border-dark-gray dark:hover:border-light-cream cursor-pointer "
              onClick={() => {
                smoothScroll(`#${item.toLowerCase()}`);
                handleLinkClick(`#${item.toLowerCase()}`);
              }}              
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
    </NavbarMenu>
    </Navbar>
    <motion.div className="fixed top-16 left-0 right-0 h-0.5 bg-dark-gray dark:bg-light-cream transform origin-top-left z-50  rounded-xl" style={{ scaleX: scrollYProgress }}/>   

    </Flowbite>
    
  );
}
