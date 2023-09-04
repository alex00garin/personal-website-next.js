import { useEffect } from 'react';
import './about.css'

export default function AboutPage() {

    useEffect(() => {
        const listItems = document.querySelectorAll('.slide-element');
    
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in');
            } else {
              entry.target.classList.remove('slide-in');
            }
          });
        }, 
        {
            threshold: 1
        });
    
        listItems.forEach(item => {
          observer.observe(item);
        });
    
        // Cleanup when the component unmounts
        return () => {
          listItems.forEach(item => {
            observer.unobserve(item);
          });
        };
      }, []);

  return (
    <>
        <section id="about" className="font-outfit flex h-full md:h-screen w-auto px-5 md:px-10 overflow-hidden bg-light-cream dark:bg-dark-gray">
            <div className="absolute w-full md:max-w-lg lg:max-w-3xl justify-end right-0">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 640 800" opacity="0.40">
                    <defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur" /></filter>
                    </defs><g filter="url(#bbblurry-filter)"><ellipse rx="202.5" ry="149" cx="462.8146422378661" cy="303.43768070250985" fill="hsla(88, 92%, 24%, 1.00)" /></g>
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-x-16 md:gap-36 justify-between z-10">
                <div className="font-outfit flex items-center text-center md:my-auto mx-auto overflow-hidden w-48 h-48 md:w-72 md:h-72 border border-dark-gray dark:border-light-cream dark:text-neutral-300 rounded-3xl flex-col justify-center" data-carousel="slide">
                    <div className="relative h-48 w-48 md:w-72 mx-auto my-auto top-5 overflow-hidden rounded-lg ">

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Graphic</h5>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Design</h5>
                        <img className='mx-auto mt-5' src='.//graphic-design.jpg' />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Responsive</h5>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Design</h5>
                        <img className='mx-auto mt-5' src='.//responsive-design.jpg' />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Web</h5>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Design</h5>
                        <img className='mx-auto mt-5' src='.//web-design.jpg' />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Web</h5>
                        <h5 className="text-2xl md:text-4xl uppercase font-extrabold tracking text-center text-dark-gray dark:text-neutral-300">Development</h5>
                        <img className='mx-auto mt-5' src='.//web-development.jpg' />
                    </div>
                       
                    </div>
                </div>

                <div className="block right-0 my-auto">    
                    <h1 className="text-dark-gray dark:text-neutral-300 text-2xl md:text-4xl text-start mt-10 md:mt-0 font-outfit">Software Developer Jurney</h1>

                    <ol className="block mt-10 md:mt-16 border-l border-neutral-200 dark:border-neutral-700 justify-start text-left ml-5">                  
                        <li className="mb-5 ml-8 text-left slide-element">            
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-dark-gray dark:text-neutral-300 dark:ring-dark-gray dark:bg-neutral-600">
                                <svg className="w-2.5 h-2.5 text-dark-gray dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 ml-8 md:text-md font-semibold text-dark-gray dark:text-neutral-300">HTML</h3>
                            <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">January 2023</time>
                            <p className="mb-4  text-base font-normal text-neutral-500 dark:text-neutral-400">Designed all sorts of web pages.</p>
                        </li>
                        <li className="mb-5 ml-8 text-left slide-element">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-dark-gray dark:text-neutral-300 dark:ring-dark-gray dark:bg-neutral-600">
                                <svg className="w-2.5 h-2.5 text-dark-gray dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 className="flex mb-1 ml-8 text-md font-semibold text-dark-gray dark:text-neutral-300">CSS (Tailwind)</h3>
                            <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">February 2023</time>
                            <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Styled things up and kept them in line with Figma.</p>
                        </li>
                        <li className="mb-5 ml-8 text-left slide-element">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-dark-gray dark:text-neutral-300 dark:ring-dark-gray dark:bg-neutral-600">
                                <svg className="w-2.5 h-2.5 text-dark-gray dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 className="flex mb-1 ml-8 text-md font-semibold text-dark-gray dark:text-neutral-300">JavaScript</h3>
                            <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">April 2023</time>
                            <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Learned how to make websites interactive and lively.</p>
                        </li>
                        <li className="mb-5 ml-8 text-left slide-element">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-dark-gray dark:text-neutral-300 dark:ring-dark-gray dark:bg-neutral-600">
                                <svg className="w-2.5 h-2.5 text-dark-gray dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 className="flex mb-1 ml-8 text-md font-semibold text-dark-gray dark:text-neutral-300">React/Next.js</h3>
                            <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">June 2023</time>
                            <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Learned how to work with and crafted UI components.</p>
                        </li>
                        <li className="mb-5 ml-8 text-left slide-element">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-dark-gray dark:text-neutral-300 dark:ring-dark-gray dark:bg-neutral-600">
                                <svg className="w-2.5 h-2.5 text-dark-gray dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 className="flex mb-1 ml-8 text-md font-semibold text-dark-gray dark:text-neutral-300">Node.js</h3>
                            <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">August 2023</time>
                            <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">I am learning how to built fast and search-friendly sites.</p>
                        </li>
                        <li className="mb-5 ml-8 text-left slide-element">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-neutral-100 rounded-full -left-3 ring-8 ring-dark-gray dark:text-neutral-300 dark:ring-dark-gray dark:bg-neutral-600">
                                <svg className="w-2.5 h-2.5 text-dark-gray dark:text-neutral-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </span>
                            <h3 className="flex mb-1 ml-8 text-md font-semibold text-dark-gray dark:text-neutral-300">Python/Java</h3>
                            <time className="flex mb-2 ml-7 text-sm font-normal leading-none text-neutral-700 dark:text-neutral-500">...</time>
                            <p className="text-base font-normal text-neutral-500 dark:text-neutral-400">Aiming to master Python and Java for diverse applications.</p>
                        </li>
                    </ol>
                </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
            
        </section>
    </>
  )
}
        
