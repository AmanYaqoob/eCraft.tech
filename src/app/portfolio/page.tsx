import { FeatureSteps } from "@/components/blocks/feature-section";

function MarketPlacePage() {
  const features = [
    {
      step: 'Step 1',
      title: 'GMV Max Ads',
      content: 'Maximize your growth and revenue with our advanced advertising solutions.',
      image: '/images/about/4.jpeg'
    },
    {
      step: 'Step 2',
      title: 'Affiliate Marketing',
      content: 'Build powerful partnerships and expand your reach through strategic affiliate programs.',
      image: '/images/about/3.jpeg'
    },
    {
      step: 'Step 3',
      title: 'TikTok Shop',
      content: 'Leverage the power of social commerce with our TikTok Shop integration solutions.',
      image: '/images/about/1.jpeg'
    },
    {
      step: 'Step 4',
      title: 'Prop Firm',
      content: 'Recognized for exceptional strategy execution, rigorous risk allocation, and unwavering discipline in financial markets. FundedNext Elite',
      image: '/images/about/Certificate.png'
    },
  ];

  return (
    <>
      <section className="container pt-28 lg:pt-[135px] pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl mb-6 text-black dark:text-white">
            Our Recent Sales & Success Stories
          </h2>
          <p className="mx-auto max-w-4xl text-lg font-normal text-gray-500 dark:text-gray-400 px-4">
            We take pride in helping our clients achieve remarkable growth through strategic solutions and dedicated support. These recent sales represent more than just numbers — they reflect the trust our clients place in us and the results we deliver. Whether you're a startup or an established brand, we have the expertise and creativity to elevate your business and drive measurable success. Let us help you turn your goals into real growth stories.
          </p>
        </div>
      </section>
      <FeatureSteps 
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </>
  );
}

export default MarketPlacePage;
