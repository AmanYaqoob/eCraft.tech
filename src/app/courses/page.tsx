"use client";

import React from "react";
import CourseCard from "./CourseCard";
import Image from "next/image";

interface Course {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  duration: number;
  level: string;
  instructor: { name: string; avatar: string };
}

const allCourses: Course[] = [
  { 
    id: '1', 
    image: 'https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80', 
    title: 'Complete E-commerce Mastery - All-in-One Course', 
    category: 'E-commerce', 
    price: 50, 
    rating: 4.9, 
    duration: 60, 
    level: 'All Levels', 
    instructor: { name: 'Mirza Muhammad Abdullah Baig', avatar: '/images/about/business.svg' }, 
    description: 'Master every aspect of e-commerce from Amazon FBA to multi-channel selling, PPC campaigns, and marketplace success across all platforms including Amazon, Walmart, eBay, Etsy, and TikTok Shop.' 
  },
  { 
    id: '2', 
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000', 
    title: 'Complete Forex Trading Mastery', 
    category: 'Trading & Finance', 
    price: 149, 
    rating: 4.9, 
    duration: 48, 
    level: 'Beginner to Advanced', 
    instructor: { name: 'Mohsin Mehboob', avatar: '/images/about/business.svg' }, 
    description: 'Master forex trading from basics to advanced strategies. Learn technical and fundamental analysis, risk management, and develop profitable trading systems across all major currency pairs.' 
  },
];

const CoursesPage = () => {

  return (
    <section className="container mx-auto px-5 py-10 mt-32">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Explore Our <span className="text-primary">Courses</span>
        </h1>
        <p className="text-body-color dark:text-body-color-dark mt-4">
          Master E-commerce and Forex Trading with our comprehensive expert-led courses
        </p>
      </div>

      <div className="mt-10">
        <p className="mb-6 text-sm text-body-color dark:text-body-color-dark text-center">
          Showing <span className="font-bold">{allCourses.length}</span> courses
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="mt-20 py-16 bg-gray-50 dark:bg-gray-dark">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content and Feature Cards */}
            <div className="lg:w-1/2">
              <div className="text-center lg:text-left mb-10">
                <p className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
                  Why Choose Us?
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6">
                  Creating A Community Of Life Long Learners.
                </h2>
                <p className="text-body-color dark:text-body-color-dark text-lg leading-relaxed">
                  We provide a unique learning environment that helps you develop your skills and achieve your academic and professional goals through high-quality content and expert trainers.
                </p>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="group bg-white dark:bg-gray-dark rounded-xl p-6 border border-stroke dark:border-strokedark shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-black dark:text-white mb-2">World Class Trainers</h3>
                      <p className="text-body-color dark:text-body-color-dark text-sm">Professional guidance and advanced skills in various fields</p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group bg-white dark:bg-gray-dark rounded-xl p-6 border border-stroke dark:border-strokedark shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-black dark:text-white mb-2">Easy Learning</h3>
                      <p className="text-body-color dark:text-body-color-dark text-sm">A simplified learning system suitable for all levels</p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group bg-white dark:bg-gray-dark rounded-xl p-6 border border-stroke dark:border-strokedark shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-black dark:text-white mb-2">Flexible</h3>
                      <p className="text-body-color dark:text-body-color-dark text-sm">Learn anytime, anywhere</p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group bg-white dark:bg-gray-dark rounded-xl p-6 border border-stroke dark:border-strokedark shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-black dark:text-white mb-2">Affordable Price</h3>
                      <p className="text-body-color dark:text-body-color-dark text-sm">Courses at affordable prices for everyone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Corner Accents */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-lg"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-lg"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden h-80">
                  <img 
                    src="https://www.shutterstock.com/image-photo/office-conference-room-meeting-diverse-600nw-2136488967.jpg" 
                    alt="Community of learners" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Expert Instructors Section */}
      <section id="instructors" className="mt-20 py-16">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
                OUR INSTRUCTORS
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6">
                Meet Our Expert Instructors
              </h2>
              <p className="text-body-color dark:text-body-color-dark mb-8 text-lg leading-relaxed">
                Our experienced instructors are dedicated to providing high-quality education and practical insights to help you achieve your learning goals.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Contact Us
              </button>
            </div>

            {/* Right Instructor Cards */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Instructor 1 */}
                <div className="group relative bg-white dark:bg-gray-dark rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="relative overflow-hidden rounded-xl mb-4 h-41">
                    <img src="/images/about/Abdullah.png" alt="Mirza Muhammad Abdullah Baig" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-black dark:text-white">
                      Mirza Muhammad Abdullah Baig
                    </h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-primary font-medium text-sm">
                    E-commerce Expert
                  </p>
                </div>

                {/* Instructor 2 */}
                <div className="group relative bg-white dark:bg-gray-dark rounded-2xl p-6 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <div className="relative overflow-hidden rounded-xl mb-1 h-39">
                    <img src="/images/about/Mohsin.png" alt="Mohsin Mehboob" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-black dark:text-white">
                      Mohsin Mehboob
                    </h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="text-primary font-medium text-sm">
                    Forex Trader
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-gray-100 dark:bg-gray-dark px-6 py-10 md:flex-row lg:px-20 lg:py-16">
                <div className="md:w-1/2">
                  <h4 className="mb-4 text-2xl font-bold text-black dark:text-white md:text-3xl">
                    Ready to Start Your Learning Journey?
                  </h4>
                  <p className="text-body-color dark:text-body-color-dark mb-6">
                    Join thousands of students who have transformed their careers with our expert-led courses. Start learning today and unlock your potential in E-commerce and Forex Trading.
                  </p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                    Get Started Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className="md:w-1/3">
                  <ul className="flex flex-col space-y-3 text-sm font-medium">
                    <li className="flex items-center text-black dark:text-white">
                      <svg className="mr-4 w-4 h-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Lifetime Access
                    </li>
                    <li className="flex items-center text-black dark:text-white">
                      <svg className="mr-4 w-4 h-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Expert Instructors
                    </li>
                    <li className="flex items-center text-black dark:text-white">
                      <svg className="mr-4 w-4 h-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Practical Projects
                    </li>
                    <li className="flex items-center text-black dark:text-white">
                      <svg className="mr-4 w-4 h-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 Support
                    </li>
                    <li className="flex items-center text-black dark:text-white">
                      <svg className="mr-4 w-4 h-4 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Certificate of Completion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CoursesPage;
