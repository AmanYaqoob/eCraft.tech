const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
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
  );
};

export default Pricing;
