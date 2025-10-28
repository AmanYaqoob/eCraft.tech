import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import AnimatedCounter from "../Common/AnimatedCounter";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg gap-2 font-medium text-body-color">
      <span className="flex size-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Empowering Sellers, Brands, and Entrepreneurs"
                paragraph="Our range of expert e-commerce services is designed to streamline your marketplace operations, maximize profitability, and position your business as a leader across all major platforms."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <p className="mb-5 flex items-center text-lg gap-2 font-medium text-body-color">
                      <span className="flex size-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        {checkIcon}
                      </span>
                      Multi-Platform Account Management
                    </p>
                    <p className="mb-5 flex items-center text-lg gap-2 font-medium text-body-color">
                      <span className="flex size-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        {checkIcon}
                      </span>
                      Expert Listing Optimization
                      <abbr title="Organisation-as-a-service"></abbr>
                    </p>
                    <p className="mb-5 flex items-center text-lg gap-2 font-medium text-body-color">
                      <span className="flex size-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        {checkIcon}
                      </span>
                      Data-Driven Product Research
                    </p>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <p className="mb-5 flex items-center text-lg gap-2 font-medium text-body-color">
                      <span className="flex size-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                        {checkIcon}
                      </span>
                      Full-Service Store Building
                    </p>
                    <List text="Advanced PPC Campaign Management" />
                    <List text="Tailored to Your Business Model" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="w-full px-4 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <AnimatedCounter target="100+" className="text-center" />
                <p className="text-body-color dark:text-body-color-dark">Accounts Managed</p>
              </div>
              <div className="p-6">
                <AnimatedCounter target="$1M+" className="text-center" />
                <p className="text-body-color dark:text-body-color-dark">Revenue Generated</p>
              </div>
              <div className="p-6">
                <AnimatedCounter target="98%" className="text-center" />
                <p className="text-body-color dark:text-body-color-dark">Client Satisfaction</p>
              </div>
              <div className="p-6">
                <AnimatedCounter target="5+" className="text-center" />
                <p className="text-body-color dark:text-body-color-dark">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;