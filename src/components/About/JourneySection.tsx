import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const JourneySection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <SectionTitle
            title="Your Journey Starts Here"
            paragraph=""
            center
            mb="50px"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* TikTok Shop */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-lg">
                <Image
                  src="/images/about/1.jpeg"
                  alt="TikTok Shop"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                TikTok Shop
              </h3>
            </div>

            {/* GMV Max Ads */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-lg">
                <Image
                  src="/images/about/4.jpeg"
                  alt="GMV Max Ads"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                GMV Max Ads
              </h3>
            </div>

            {/* Affiliate Marketing */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-lg">
                <Image
                  src="/images/about/3.jpeg"
                  alt="Affiliate Marketing"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                Affiliate Marketing
              </h3>
            </div>

            {/* Certificate */}
            <div className="text-center">
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-lg">
                <Image
                  src="/images/about/Certicate.png"
                  alt="FundedNext Elite Trader Certificate"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                Elite Trader Status
              </h3>
            </div>
          </div>

          {/* Certificate Description */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-lg text-body-color dark:text-body-color-dark leading-relaxed">
              Recognized for exceptional strategy execution, rigorous risk allocation, and unwavering discipline in financial markets. FundedNext Elite Trader status reflects proven ability to operate at professional standards with consistent attention to market nuances and trading excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;