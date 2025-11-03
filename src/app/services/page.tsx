"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "TikTok Shop Management",
      subtitle: "Social Commerce Done Right",
      image: "/images/brands/brandbird-TikTok-logotype.svg",
      shortDescription: "Dominate the fastest-growing social commerce platform with our comprehensive TikTok Shop services.",
      fullDescription: "Dominate the fastest-growing social commerce platform with our comprehensive TikTok Shop services. From viral product strategies to affiliate marketing, we turn trending content into consistent sales.",
      services: [
        {
          name: "Storefront Setup & Branding",
          description: "Complete shop registration, verification, and professional branding that aligns with TikTok's creative culture and maximizes first impressions."
        },
        {
          name: "Viral Product Strategy",
          description: "Trend analysis and content-friendly product selection that leverages TikTok's algorithm to create momentum and drive organic reach."
        },
        {
          name: "GMV Max Ads Management",
          description: "Strategic campaign setup, audience targeting, creative testing, and ROAS optimization to maximize your advertising investment and gross merchandise value."
        },
        {
          name: "Affiliate Marketing",
          description: "Full affiliate program management including creator recruitment, commission optimization, relationship building, and performance tracking to scale through influencer partnerships."
        },
        {
          name: "Product Hunting",
          description: "Research and validation of trending products with high viral potential, competitive gap analysis, and profit margin assessment tailored for TikTok audiences."
        },
        {
          name: "Product Listing Optimization",
          description: "Mobile-first listings with SEO-optimized titles, high-converting descriptions, engaging product videos, and compliance with TikTok Shop policies."
        },
        {
          name: "Account Health Management",
          description: "Daily monitoring of seller metrics, policy compliance audits, violation prevention, shipping performance tracking, and proactive issue resolution to maintain excellent standing."
        },
        {
          name: "Customer Support Management",
          description: "24/7 inquiry handling, pre and post-sale support, returns processing, review management, and rapid response times to maintain high seller ratings."
        }
      ],
      idealFor: "Private label brands, dropshippers, and trendy product sellers looking to tap into TikTok's massive Gen Z and Millennial audience."
    },
    {
      title: "Amazon FBA Management",
      subtitle: "Complete Amazon Success Solution",
      image: "/images/brands/brandbird-Amazon-logotype.svg",
      shortDescription: "Full-service Amazon FBA management from product research to inventory management and PPC campaigns.",
      fullDescription: "Maximize your Amazon potential with our comprehensive FBA management services. We handle everything from product research to advanced PPC strategies, ensuring your success on the world's largest marketplace.",
      services: [
        {
          name: "Product Research & Validation",
          description: "In-depth market analysis, competitor research, and profit margin calculations to identify winning products with high demand and low competition."
        },
        {
          name: "Listing Optimization",
          description: "SEO-optimized titles, bullet points, descriptions, and A+ content creation with high-converting images and videos to maximize visibility and conversions."
        },
        {
          name: "PPC Campaign Management",
          description: "Strategic advertising campaigns including Sponsored Products, Brands, and Display ads with continuous optimization for maximum ROAS."
        },
        {
          name: "Inventory Management",
          description: "Demand forecasting, reorder planning, and inventory optimization to prevent stockouts while minimizing storage fees."
        },
        {
          name: "Brand Registry & Protection",
          description: "Brand registration assistance, trademark protection, and counterfeit monitoring to safeguard your intellectual property."
        },
        {
          name: "Review Management",
          description: "Proactive review monitoring, response management, and strategies to improve product ratings and customer feedback."
        }
      ],
      idealFor: "Established brands and serious sellers looking to scale their Amazon business with professional management and optimization."
    },
    {
      title: "Etsy Store Management",
      subtitle: "Handmade & Creative Success",
      image: "/images/brands/brandbird-Etsy-logotype.svg",
      shortDescription: "Specialized Etsy management for handmade, vintage, and creative products with focus on organic growth.",
      fullDescription: "Transform your creative passion into a profitable Etsy business with our specialized management services designed for handmade, vintage, and creative products.",
      services: [
        {
          name: "Shop Setup & Branding",
          description: "Complete shop creation, branding design, and policy setup that reflects your unique creative style and builds customer trust."
        },
        {
          name: "SEO Optimization",
          description: "Keyword research and listing optimization specifically for Etsy's search algorithm to improve organic visibility and rankings."
        },
        {
          name: "Product Photography",
          description: "Professional product photography guidance and editing to showcase your items in the best light and increase conversion rates."
        },
        {
          name: "Social Media Integration",
          description: "Pinterest, Instagram, and social media marketing strategies to drive external traffic and build your brand presence."
        },
        {
          name: "Customer Communication",
          description: "Professional customer service, custom order management, and relationship building to encourage repeat purchases and positive reviews."
        }
      ],
      idealFor: "Creative entrepreneurs, artisans, and vintage sellers looking to build a sustainable handmade business on Etsy."
    },
    {
      title: "eBay Store Management",
      subtitle: "Auction & Fixed Price Mastery",
      image: "/images/brands/brandbird-eBay-logotype.svg",
      shortDescription: "Complete eBay management covering both auction and Buy It Now strategies for maximum profitability.",
      fullDescription: "Leverage eBay's unique marketplace dynamics with our comprehensive management services covering both auction and fixed-price strategies.",
      services: [
        {
          name: "Listing Strategy",
          description: "Optimal listing formats, timing strategies, and pricing models to maximize visibility and final sale prices."
        },
        {
          name: "Inventory Sourcing",
          description: "Product sourcing strategies, liquidation opportunities, and wholesale connections to maintain profitable inventory levels."
        },
        {
          name: "Shipping Optimization",
          description: "Calculated shipping setup, packaging optimization, and carrier negotiations to reduce costs and improve delivery times."
        },
        {
          name: "Feedback Management",
          description: "Proactive feedback monitoring, dispute resolution, and reputation management to maintain high seller ratings."
        }
      ],
      idealFor: "Resellers, liquidation specialists, and businesses looking to tap into eBay's diverse customer base and auction opportunities."
    },
    {
      title: "Walmart Marketplace Management",
      subtitle: "Retail Giant Growth",
      image: "/images/logo/walmart-ar21~bgwhite.svg",
      shortDescription: "Tap into America's largest retailer online marketplace with professional account management that maximizes visibility and sales on Walmart.com.",
      fullDescription: "Tap into America's largest retailer online marketplace with professional account management that maximizes visibility and sales on Walmart.com.",
      services: [
        {
          name: "Account Setup & Optimization",
          description: "Complete seller registration, category approval, storefront branding, and profile optimization to meet Walmart's high seller standards."
        },
        {
          name: "Product Listing Management",
          description: "Walmart-compliant listings with rich product content, competitive pricing strategy, variant management, and Buy Box optimization."
        },
        {
          name: "Inventory Synchronization",
          description: "Real-time inventory tracking across multiple channels, stock level management, replenishment alerts, and fulfillment coordination (WFS or seller-fulfilled)."
        },
        {
          name: "Walmart Connect Advertising",
          description: "Strategic sponsored product campaigns, display ads, and search placement optimization to increase product visibility and drive conversions."
        },
        {
          name: "Pricing & Competition Strategy",
          description: "Dynamic pricing adjustments based on competitor analysis, Buy Box winning strategies, and profit margin protection."
        },
        {
          name: "Performance Monitoring",
          description: "Order defect rate tracking, on-time shipping compliance, customer service metrics, and seller scorecard optimization."
        },
        {
          name: "Growth Opportunities",
          description: "Walmart+ program participation, seasonal promotions, clearance strategies, and category expansion recommendations."
        },
        {
          name: "Customer Service Management",
          description: "Order processing, returns handling, customer inquiries, and dispute resolution to maintain excellent seller ratings."
        }
      ],
      idealFor: "Established brands and retailers looking to expand their reach through America's largest retailer and compete in the growing Walmart marketplace."
    },
    {
      title: "Strategic Marketing & Brand Building",
      subtitle: "Marketing Strategy & Brand Development",
      image: "/images/about/marketing.jpg",
      shortDescription: "Develop powerful marketing strategies and build memorable brands that resonate with your target audience. From brand positioning to digital marketing campaigns, we create cohesive strategies that drive business growth and customer engagement.",
      fullDescription: "Develop powerful marketing strategies and build memorable brands that resonate with your target audience. From brand positioning to digital marketing campaigns, we create cohesive strategies that drive business growth and customer engagement.",
      services: [
        {
          name: "Brand Strategy & Positioning",
          description: "Define your unique market position and brand identity. Brand purpose and values definition, target audience research and personas, competitive analysis and differentiation, brand positioning statement development, unique value proposition (UVP) creation, brand architecture for product lines, and brand messaging framework."
        },
        {
          name: "Brand Identity Development",
          description: "Create a visual and verbal identity that stands out. Brand name development and testing, logo and visual identity design direction, brand color palette and typography, brand voice and tone guidelines, tagline and slogan development, brand style guide creation, and brand story and narrative development."
        },
        {
          name: "Marketing Strategy Planning",
          description: "Comprehensive plans to reach and convert your audience. Market research and opportunity analysis, marketing objectives and KPIs, customer journey mapping, multi-channel marketing mix strategy, budget allocation and ROI planning, campaign calendar and timeline, and competitive positioning strategy."
        },
        {
          name: "Digital Marketing Strategy",
          description: "Online presence optimization for maximum impact. Website strategy and user experience, search engine optimization (SEO) strategy, content marketing and blog strategy, social media marketing plan, email marketing campaigns, paid advertising strategy (PPC, social ads), and marketing automation implementation."
        },
        {
          name: "Content Marketing",
          description: "Engaging content that attracts and converts customers. Content strategy and editorial calendar, blog post and article development, case study and white paper creation, video content strategy, infographic and visual content, social media content creation, and thought leadership content."
        },
        {
          name: "Marketing Analytics & Performance Tracking",
          description: "Data-driven insights to optimize campaigns. Marketing KPI dashboard development, campaign performance analysis, customer acquisition cost (CAC) tracking, ROI measurement and reporting, A/B testing and optimization, conversion funnel analysis, and monthly performance reports with recommendations."
        }
      ],
      idealFor: "Startups establishing their brand, businesses rebranding, companies entering new markets, organizations lacking marketing expertise, and brands seeking growth acceleration."
    },
    {
      title: "Full-Stack Web Development",
      subtitle: "End-to-End Solutions",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-illustration-svg-download-png-4051527.png",
      shortDescription: "Build powerful, scalable web applications with our comprehensive full-stack development services. We handle everything from frontend user interfaces to backend architecture and database design.",
      fullDescription: "Build powerful, scalable web applications with our comprehensive full-stack development services. We handle everything from frontend user interfaces to backend architecture and database design.",
      services: [
        {
          name: "Frontend Development",
          description: "Modern, responsive interfaces built with React, Next.js, and TypeScript. Component-based architecture, state management with Redux or Context API, responsive design with Tailwind CSS, and seamless user experiences with Framer Motion animations."
        },
        {
          name: "Backend Development",
          description: "Robust server-side applications using Node.js, Express, and RESTful API design. Secure authentication and authorization systems, efficient data handling and validation, real-time functionality with WebSockets, and scalable microservices architecture."
        },
        {
          name: "Database Design & Management",
          description: "Strategic database architecture with MongoDB, PostgreSQL, or MySQL. Data modeling and schema design, query optimization for performance, automated backups and disaster recovery, and database migration and version control."
        },
        {
          name: "API Development & Integration",
          description: "Custom RESTful and GraphQL APIs designed for scalability. Third-party API integrations (payment gateways, shipping providers, social media), API documentation with Swagger/OpenAPI, rate limiting and security implementation, and webhook integration for real-time updates."
        },
        {
          name: "Cloud Deployment & DevOps",
          description: "Production-ready deployment on AWS, Vercel, or DigitalOcean. CI/CD pipeline setup with GitHub Actions or Jenkins, Docker containerization for consistency, load balancing and auto-scaling configuration, and monitoring and logging with error tracking."
        },
        {
          name: "Performance Optimization",
          description: "Lightning-fast load times and optimal user experience. Code splitting and lazy loading implementation, image optimization and CDN integration, caching strategies for improved performance, database query optimization, and Core Web Vitals optimization for SEO."
        },
        {
          name: "Security Implementation",
          description: "Enterprise-grade security measures to protect your data. SSL/TLS encryption and HTTPS enforcement, input validation and sanitization, protection against SQL injection and XSS attacks, secure session management and JWT authentication, and GDPR and data privacy compliance."
        },
        {
          name: "Testing & Quality Assurance",
          description: "Comprehensive testing to ensure reliability and performance. Unit testing with Jest and React Testing Library, integration testing for API endpoints, end-to-end testing with Cypress or Playwright, performance testing and load testing, and automated testing in CI/CD pipeline."
        }
      ],
      idealFor: "Startups needing MVPs, businesses requiring custom solutions, e-commerce brands, SaaS companies, and enterprises modernizing legacy systems."
    },
    {
      title: "Forex Trading Education",
      subtitle: "Trade Smarter, Not Harder: Master Forex and Get Funded—Your Capital is $0, Your Risk is Zero.",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMjJDNTVFIiByeD0iMTAiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjRkZGRkZGIj4KPHBhdGggZD0iTTE2IDZMMTAuNSAxMkwxNiAxOFYxNUgyMVY5SDE2VjZaTTggMThWMTVIM1Y5SDhWNkwyLjUgMTJMOCAxOFoiLz4KPC9zdmc+Cjx0ZXh0IHg9IjgwIiB5PSI0NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0ZGRkZGRiI+Rm9yZXggVHJhZGluZzwvdGV4dD4KPC9zdmc+",
      shortDescription: "Comprehensive forex trading education covering technical analysis, risk management, and profitable trading strategies.",
      fullDescription: "Master the forex markets with our comprehensive trading education program designed to transform beginners into profitable traders.",
      services: [
        {
          name: "Technical Analysis Training",
          description: "Complete chart reading, indicator analysis, and pattern recognition training to identify high-probability trading opportunities."
        },
        {
          name: "Risk Management Systems",
          description: "Position sizing, stop-loss strategies, and portfolio management techniques to protect capital and maximize long-term profitability."
        },
        {
          name: "Trading Psychology",
          description: "Mental discipline training, emotional control techniques, and mindset development for consistent trading performance."
        },
        {
          name: "Live Trading Sessions",
          description: "Real-time market analysis, live trade execution, and interactive learning sessions with experienced traders."
        },
        {
          name: "Strategy Development",
          description: "Custom trading strategy creation, backtesting, and optimization based on individual risk tolerance and trading goals."
        }
      ],
      idealFor: "Aspiring traders, investment professionals, and individuals looking to generate consistent income from forex trading."
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-20 lg:py-28 mt-32"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto">
            We provide comprehensive e-commerce and forex trading services to help you build, grow, and scale your online business successfully.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-dark rounded-xl shadow-lg border border-stroke dark:border-strokedark overflow-hidden"
            >
              <div 
                className="p-8 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="flex-shrink-0">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={80}
                          height={32}
                          className="w-20 h-8 object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <h4 className="text-lg text-primary font-semibold mb-4">
                        {service.subtitle}
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="ml-6">
                    <svg 
                      className={`w-6 h-6 text-primary transition-transform duration-200 ${expandedService === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {expandedService === index && (
                <div className="px-8 pb-8 border-t border-stroke dark:border-strokedark">
                  <div className="pt-6">
                    <p className="text-body-color dark:text-body-color-dark mb-8 text-lg leading-relaxed">
                      {service.fullDescription}
                    </p>
                    
                    <h5 className="text-xl font-bold text-black dark:text-white mb-6">What We Handle:</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {service.services.map((subService, subIndex) => (
                        <div key={subIndex} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                          <h6 className="font-bold text-black dark:text-white mb-3">
                            {subService.name}
                          </h6>
                          <p className="text-body-color dark:text-body-color-dark text-sm leading-relaxed">
                            {subService.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-6">
                      <h6 className="font-bold text-black dark:text-white mb-3">Ideal For:</h6>
                      <p className="text-body-color dark:text-body-color-dark">
                        {service.idealFor}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-body-color dark:text-body-color-dark mb-6">
              Contact us today to discuss how we can help you achieve your e-commerce and trading goals.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ServicesPage;
