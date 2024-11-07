"use client"

import Image from "next/image";
import Typed from 'typed.js';
import React from "react";



export default function Home() {


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['coding' , 'software development' , 'data science' , 'machine learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left 1g:w-1/2 lg:-mt-8">
          <h1 className="text-3x1 leading-snug text-gray-800 dark:text-gray-200 md:text-4x1">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" />
            components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el}></span>
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div
            className="mt-6 bg-transparent border rounded-1g dark:border-gray-700 1g:w-2/3
    focus-within:border-primary focus-within: ring focus-within: ring-primary dark: focus-within: border-primary
    focus-within: ring-opacity-20"
          >
              {/* <form
              
                className="flex flex-wrap justify-between md:flex-row"
              >
                <input
                  type="search"
                  name="query"
                  placeholder="Search Components"
                  required="required"
                  className="flex-1
      h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12
      dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-full p-2 m-1 text-white
      transition-colors duration-300 transform rounded-lg 1g:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 211-6-6m2-5a7 7 0 11-14 0
      7 7 0 0114 0Z"
                    />
                  </svg>
                </button>
              </form> */}
          </div>
        </div>
        <div className="w-full mt-4 1g:mt-0 1g: w-1/2">
          {/* <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css
components"
            className="w-full h-full max-w-md mx-auto"
          />*/}
       

        <Image
    src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
    alt="tailwind css components"
    width={500}      // Specify the width and height in pixels (or suitable values for your layout)
    height={500}
    className="w-full h-full max-w-md mx-auto"
  />
 </div> 
      </section>

      <section>
      <div className="bg-gray-100 dark:bg-gray-900 py-16 ">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-200">Our Pricing</h1>
        <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
          Choose the perfect plan for your needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Basic Plan */}
        <div className="bg-white p-8 rounded-xl dark:bg-gray-800 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Basic</h2>
          <p className="text-gray-800 dark:text-gray-200 mt-2">Ideal for individuals starting out</p>
          <p className="text-5xl font-extrabold text-gray-800 dark:text-gray-200 mt-6">$19<span className="text-lg">/mo</span></p>
          <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-center space-x-2 ">
              <span>✔</span> <span>5 Projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>Basic Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>5GB Storage</span>
            </li>
          </ul>
          <button className="size-sm w-full mt-10 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white p-8 dark:bg-gray-800 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 border-4 border-purple-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 ">Pro</h2>
          <p className="text-gray-500 dark:text-gray-300  mt-2">Perfect for professionals</p>
          <p className="text-5xl font-extrabold text-gray-500 dark:text-gray-300  mt-6">$49<span className="text-lg">/mo</span></p>
          <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-center space-x-2 ">
              <span>✔</span> <span>Unlimited Projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>Priority Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>50GB Storage</span>
            </li>
          </ul>
          <button className="w-full mt-10 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Enterprise</h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">Best for large teams and organizations</p>
          <p className="text-5xl font-extrabold text-gray-500 dark:text-gray-300 mt-6">$99<span className="text-lg">/mo</span></p>
          <ul className="mt-8 space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>Unlimited Projects</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>Dedicated Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✔</span> <span>200GB Storage</span>
            </li>
          </ul>
          <button className="w-full mt-10 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300">
            Get Started
          </button>
        </div>

      </div>

    </div>
      </section>

      
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            What My Clients Say
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Hear from some of the people I’ve had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <p className="text-gray-800 dark:text-gray-300 text-lg italic">
              "Albin is an exceptional developer. His attention to detail and
              dedication to quality made our project a huge success."
            </p>
            <div className="mt-6 flex items-center">
            <Image
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="Client 1"
    width={500}      // Specify the width and height in pixels (or suitable values for your layout)
    height={500}
    className="h-12 w-12 rounded-full object-cover"
  />
              {/* <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client 1"
              /> */}
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">CEO, TechCorp</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <p className="text-gray-800 dark:text-gray-300 text-lg italic">
              "Albin’s work was outstanding. He brought our vision to life, and we
              couldn’t be more satisfied."
            </p>
            <div className="mt-6 flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client 2"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Jane Smith
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  COO, Designify
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <p className="text-gray-800 dark:text-gray-300 text-lg italic">
              "Working with Albin was a great experience. He’s professional,
              skilled, and delivered high-quality work on time."
            </p>
            <div className="mt-6 flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://randomuser.me/api/portraits/men/83.jpg"
                alt="Client 3"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Michael Johnson
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manager, Solutions Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
       </section>
    

       <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
          Top Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <img
              src="/nextjs.png"
              alt="Blog 1"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blog Title 1
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A brief description of the blog post that highlights its content.
            </p>
            <a href="#" className="text-blue-500 dark:text-blue-400 mt-4 block">
              Read More →
            </a>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <img
              src="/nodejs.jpg"
              alt="Blog 2"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blog Title 2
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A brief description of the blog post that highlights its content.
            </p>
            <a href="#" className="text-blue-500 dark:text-blue-400 mt-4 block">
              Read More →
            </a>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <img
              src="/react.png"
              alt="Blog 3"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Blog Title 3
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              A brief description of the blog post that highlights its content.
            </p>
            <a href="#" className="text-blue-500 dark:text-blue-400 mt-4 block">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
