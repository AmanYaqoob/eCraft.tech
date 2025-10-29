"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { FeatureCarousel } from "@/components/ui/animated-feature-carousel";
import AnimatedCounter from "@/components/Common/AnimatedCounter";

const AboutPage = () => {


  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for excellence in every project, delivering results that exceed expectations."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We build long-term relationships with our clients, becoming true partners in their success."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We stay ahead of market trends and continuously adapt our strategies for optimal results."
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description: "Every decision is backed by analytics and proven methodologies to ensure maximum ROI."
    },
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-br from-primary/10 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-body-color dark:text-body-color-dark leading-relaxed"
            >
              Welcome to eCraft.tech — your trusted ecommerce growth partner.
            </motion.p>
          </div>
        </div>
      </motion.section>



      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-body-color dark:text-body-color-dark mb-4 leading-relaxed">
                With over 5 years of hands-on experience, we specialize in managing and scaling stores across multiple ecommerce platforms, including Etsy, TikTok Shop, Amazon Seller Central, Walmart, Shopify, and eBay. Our team has worked with brands of all sizes, helping them optimize product listings, improve conversions, and grow their online presence with real, measurable results.
              </p>
              <p className="text-body-color dark:text-body-color-dark mb-4 leading-relaxed">
                At eCraft.tech, we don't believe in shortcuts or outsourcing client work like many so-called "agencies" do. We don't just sell courses or delegate tasks to unskilled freelancers — we do the real work ourselves, backed by experience, data, and proven strategies.
              </p>
              <p className="text-body-color dark:text-body-color-dark mb-4 leading-relaxed">
                We believe in transparency and trust. That's why we're always ready to show you live proofs of our work and results. You can schedule a meeting with us anytime to see exactly how we operate and how we can help your business grow.
              </p>
              <p className="text-body-color dark:text-body-color-dark mb-4 leading-relaxed">
                Our mission is simple: to deliver genuine value through skilled execution, creative strategy, and consistent performance — not empty promises. When you work with eCraft.tech, you're not hiring just another agency; you're partnering with a team that truly cares about your success.
              </p>
              <p className="text-body-color dark:text-body-color-dark leading-relaxed">
                Let's connect and discuss how we can take your ecommerce business to the next level.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="https://www.shutterstock.com/image-photo/office-conference-room-meeting-diverse-600nw-2136488967.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
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
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Why Choose eCraft.tech
            </h2>
            <p className="text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Real work, real results, real partnership — no shortcuts, no empty promises
            </p>
          </div>
          <FeatureCarousel image={{
            alt: "E-commerce features",
            step1img1: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1740&auto=format&fit=crop",
            step1img2: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1740&auto=format&fit=crop",
            step2img1: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1661&auto=format&fit=crop",
            step2img2: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1674&auto=format&fit=crop",
            step3img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1740&auto=format&fit=crop",
            step4img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop",
            step5img: "/images/about/certificate.png",
          }} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Meet the experts behind eCraft.tech
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-dark rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/about/Abdullah.png"
                  alt="Mirza Muhammad Abdullah Baig"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                Mirza Muhammad Abdullah Baig
              </h3>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <p className="text-body-color dark:text-body-color-dark">
                Visionary leader with 5+ years of e-commerce expertise, driving strategic growth and innovation.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-dark rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/images/about/CTO.jpeg"
                  alt="Muhammad Amman Yaqoob"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                Muhammad Amman Yaqoob
              </h3>
              <p className="text-primary font-semibold mb-4">Chief Technology Officer</p>
              <p className="text-body-color dark:text-body-color-dark">
                Technical architect leading development and innovation with cutting-edge solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner with eCraft.tech?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's connect and discuss how we can take your ecommerce business to the next level
            </p>
            <a 
              href="https://calendly.com/ecraft-tech14/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
