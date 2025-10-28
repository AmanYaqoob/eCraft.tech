import { FeatureSteps } from "@/components/blocks/feature-section"

// Using the requested JPEG images from the /public/images/about/ directory:
const features = [
  { 
    step: 'Step 1', 
    title: 'TikTok Shop',
    content: 'Maximize your reach with our TikTok Shop solutions. Grow your business through the power of social commerce and reach millions of potential customers.', 
    image: '/images/about/1.jpeg' // Using 1.jpeg as requested for TikTok shop
  },
  { 
    step: 'Step 2',
    title: 'Affiliate Marketing',
    content: 'Build a sustainable income stream with our proven affiliate marketing strategies. We provide the tools and training you need to succeed.',
    image: '/images/about/3.jpeg' // Using 3.jpeg as requested for Affiliate Marketing
  },
  { 
    step: 'Step 3',
    title: 'GMV Max Ads',
    content: 'Scale your business with our specialized GMV Max advertising solutions. Optimize your ad spend and maximize your return on investment.',
    image: '/images/about/4.jpeg' // Using 4.jpeg as requested for GMV Max Ads
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}