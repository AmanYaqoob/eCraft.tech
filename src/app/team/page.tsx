"use client";
import { motion } from "motion/react";
import Image from "next/image";

function MembersPage() {
  const team = [
    {
      name: "Mirza Muhammad Abdullah Baig",
      role: "Founder & CEO",
      image: "/images/about/Abdullah.png",
      description: "Visionary leader with 5+ years of e-commerce expertise, driving strategic growth and innovation."
    },
    {
      name: "Muhammad Amman Yaqoob",
      role: "Chief Technology Officer",
      image: "/images/about/CTO.jpeg",
      description: "Technical architect leading development and innovation with cutting-edge solutions."
    },
    {
      name: "Mohsin Mehboob",
      role: "Forex Trader",
      image: "/images/about/Mohsin.png",
      description: "Expert forex trader with proven strategies and consistent performance in global markets."
    },
    {
      name: "Hamza Khan",
      role: "Marketing Head",
      image: "/images/about/Hamza Khan.jpg",
      description: "Strategic marketing leader driving brand growth and customer acquisition across digital channels."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4"
          >
            Meet the Experts Behind Your Success
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary font-semibold mb-6"
          >
            A passionate team of e-commerce specialists, developers, and strategists dedicated to growing your business across every marketplace.
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-body-color dark:text-body-color-dark max-w-3xl mx-auto"
          >
            Our diverse team brings together years of experience in marketplace management, digital marketing, and web development. We're not just service providers—we're your growth partners committed to your success.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-dark rounded-xl p-8 text-center shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-body-color dark:text-body-color-dark">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MembersPage;
