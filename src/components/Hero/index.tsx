'use client';
import { HeroData } from "@/static/heroData";
import Hyperspeed from "./Hyperspeed";
import Link from "next/link";
import { StarBorder } from "@/components/ui/star-border";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 flex h-screen items-center justify-center overflow-hidden bg-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <Hyperspeed />
        
        <div className="container relative z-50 flex items-center justify-center">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[900px] text-center">
                <h1 className="mb-5 text-5xl font-bold leading-tight text-white sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
                  {HeroData.title}
                </h1>
                <p className="mb-12 text-xl !leading-relaxed text-gray-300 sm:text-2xl md:text-3xl">
                  {HeroData.subtitle}
                </p>
                <StarBorder as={Link} href="/contact" className="text-2xl font-semibold">
                  {HeroData.primaryButtonText}
                </StarBorder>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black" />
      </section>
    </>
  );
};

export default Hero;
