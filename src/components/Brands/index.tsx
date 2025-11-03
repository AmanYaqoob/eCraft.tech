"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const Brands = () => {
  const platforms = [
    { name: "TikTok", logo: "/images/brands/brandbird-TikTok-logotype.svg" },
    { name: "Etsy", logo: "/images/brands/brandbird-Etsy-logotype.svg" },
    { name: "eBay", logo: "/images/brands/brandbird-eBay-logotype.svg" },
    { name: "Amazon", logo: "/images/brands/brandbird-Amazon-logotype.svg" },
    { name: "Walmart", logo: "/images/logo/walmart-ar21~bgwhite.svg" }
  ];

  return (
    <section className="my-10 md:my-16 lg:my-20 bg-white py-8" id="brands">
      <Marquee>
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="relative dark:text-white text-black h-full w-fit mx-[4rem] flex items-center justify-start"
          >
            <Image
              src={platform.logo}
              className="hover:scale-110 transition-transform duration-200"
              alt={platform.name}
              width={200}
              height={80}
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Brands;
