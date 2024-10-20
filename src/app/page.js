"use client"
import { Button } from "@/components/ui/button";
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding', 'Web Development', 'Software Engineering', 'Data Science', 'Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              {/* Optional Search Input */}
              <input type="text" placeholder="Search components..." className="flex-1 p-2 border dark:border-gray-600 rounded-lg" />
              <Button type="submit" className="mt-2 md:mt-0">Search</Button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400"><s>10GB Storage</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Basic Support</s></li>
                  <li className="text-gray-600 dark:text-gray-400"><s>Single User</s></li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Weekly Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$20/month</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Bestseller</span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">50GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">Priority Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Up to 5 Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Daily Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$30/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">200GB Storage</li>
                  <li className="text-gray-600 dark:text-gray-400">24/7 Support</li>
                  <li className="text-gray-600 dark:text-gray-400">Unlimited Users</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Access</li>
                  <li className="text-gray-600 dark:text-gray-400">Real-time Updates</li>
                </ul>
                <Button className="mx-1" variant="outline">Choose Plan</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Hear from our satisfied customers</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"This service has been a game-changer for our business. Highly recommend!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Abhay Gupta</h3>
                <p className="text-gray-500 dark:text-gray-300">CEO, AuraMatch</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Amazing experience! The team was professional and the results were outstanding."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Deepika Kumar</h3>
                <p className="text-gray-500 dark:text-gray-300">CTO, TechSavvy</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"A top-notch product that exceeded my expectations. Will definitely use again!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Mohan Das</h3>
                <p className="text-gray-500 dark:text-gray-300">Founder, NextGen Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Latest Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Stay updated with our latest insights</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog Post 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <img src="https://source.unsplash.com/random/300x200/?coding" alt="Blog Post 1" className="mb-4 rounded" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">How to Learn Programming</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">A comprehensive guide on how to start your journey in programming.</p>
                <Button className="mt-4">Read More</Button>
              </div>
            </div>
            {/* Blog Post 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <img src="https://source.unsplash.com/random/300x200/?web" alt="Blog Post 2" className="mb-4 rounded" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Understanding Web Development</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">An insight into the various technologies and tools used in web development.</p>
                <Button className="mt-4">Read More</Button>
              </div>
            </div>
            {/* Blog Post 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <img src="https://source.unsplash.com/random/300x200/?tech" alt="Blog Post 3" className="mb-4 rounded" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Aboout Our Tech Journey</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">Sharing our experiences and lessons learned in the tech industry.</p>
                <Button className="mt-4">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
