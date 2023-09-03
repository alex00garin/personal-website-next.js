import React, { useState } from "react";
import { db } from './firebaseConfig.js'
import { addDoc, collection } from 'firebase/firestore'

const ContactPage = () => {

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [ name, setName ] = useState();
  const [ email, setEmail ] = useState();
  const [ message, setMessage ] = useState();

  const userCollectionRef = collection(db, "contactdata")
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    
  
    try {
      // Status
      setSubmissionStatus('Sending...');

      // Send the data to Firestore and await the result
      await addDoc(userCollectionRef, {
        name: name,
        email: email,
        message: message
      });
  
      // Update submission status to 'Sent successfully!'
      setSubmissionStatus('Sent successfully!');

      // You can also clear the form fields here if needed
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Handle any errors that occur during Firestore operation
      setSubmissionStatus('Error sending message');
      console.error('Error sending message:', error.message);    }
  };
  
  return (
    <>
      <section id="contact" className="flex flex-col h-screen w-auto items-center justify-center bg-back px-5">

        <div className="absolute w-full md:max-w-xl lg:max-w-3xl left-0">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev/svgjs" viewBox="0 0 640 800" opacity="0.24">
            <defs><filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feGaussianBlur stdDeviation="61" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter></defs><g filter="url(#bbblurry-filter)"><ellipse rx="154" ry="103.5" cx="196.9878668597364" cy="406.7447754867434" fill="hsla(55, 94%, 54%, 1.00)"></ellipse></g>
          </svg>
        </div>

        <section className="font-outfit bg-transparent z-10">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="font-outfit mb-4 text-4xl tracking-tight font-extrabold text-center text-dark-gray dark:text-light-cream">Contact Me</h2>
            <p className="font-outfit mb-8 lg:mb-16 font-light text-center text-dark-gray dark:text-light-cream sm:text-xl">Feel free to reach me through the contact form below</p>
            <form action="#" id="contactForm" className="space-y-8 justify-center">
                <div>
                    <label htmlFor="name" className="font-outfit block mb-2 text-sm font-medium text-dark-gray dark:text-light-cream">Your name</label>
                    <input onChange={(event)=>setName(event.target.value)} type="text" id="name" className="font-outfit block p-3 w-full text-sm text-neutral-200 bg-neutral-200 rounded-lg border border-gray-300 shadow-sm focus:ring-1 focus:outline-none focus:ring-dark-gray" placeholder="Write your name here" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-gray dark:text-light-cream">Your email</label>
                    <input onChange={(event)=>setEmail(event.target.value)} type="email" id="email" className="block p-3 w-full text-sm text-neutral-200 bg-neutral-200 rounded-lg border border-gray-300 shadow-sm focus:ring-1 focus:outline-none focus:ring-dark-gray" placeholder="your@email.com" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-dark-gray dark:text-light-cream">Your message</label>
                    <textarea onChange={(event)=>setMessage(event.target.value)} id="message" rows="6" className="block p-3 w-full text-sm text-dark-gray bg-neutral-200 rounded-lg border border-gray-300 shadow-sm focus:ring-1 focus:outline-none focus:ring-dark-gray" placeholder="Leave a comment..." required></textarea>
                </div>

                <div className="flex justify-center">
                    <button onClick={handleSubmit} disabled={submissionStatus === 'Sending...'} id="submitBtn" type="submit" className="py-3 px-5 text-sm font-medium text-center text-dark-gray hover:text-light-cream rounded-lg bg-neutral-200 hover:bg-neutral-800 sm:w-fit focus:ring-1 focus:outline-none focus:ring-dark-gray">{submissionStatus || 'Send message'}</button>
                </div>                                               
            </form>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactPage;