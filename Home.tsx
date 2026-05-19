/**
 * Home Page - MERIDIAN Marketing Site
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Gradient mesh hero section
 * - Economic problem statement
 * - Feature cards with architecture details
 * - Pricing tiers with revenue model
 * - How it works with visual flowcharts
 * - Comparison table with existing solutions
 * - Token economics (PERFORM + MERIDIAN)
 * - Sustainability & SDG alignment
 * - Regulatory compliance framework
 * - FAQ section
 * - Newsletter CTA
 * - Comprehensive footer
 */

import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EconomicProblem from "@/components/EconomicProblem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import TokenEconomics from "@/components/TokenEconomics";
import Sustainability from "@/components/Sustainability";
import RegulatoryFramework from "@/components/RegulatoryFramework";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    problem: useRef<HTMLDivElement>(null),
    features: useRef<HTMLDivElement>(null),
    howItWorks: useRef<HTMLDivElement>(null),
    pricing: useRef<HTMLDivElement>(null),
    comparison: useRef<HTMLDivElement>(null),
    tokens: useRef<HTMLDivElement>(null),
    sustainability: useRef<HTMLDivElement>(null),
    regulatory: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full bg-stripi-canvas">
      <Navigation />
      
      {/* Add padding for fixed nav */}
      <div className="pt-16">
        <div ref={sectionRefs.hero} id="hero">
          <Hero />
        </div>

        <div ref={sectionRefs.problem} id="problem">
          <EconomicProblem />
        </div>

        <div ref={sectionRefs.features} id="features">
          <Features />
        </div>

        <div ref={sectionRefs.howItWorks} id="how-it-works">
          <HowItWorks />
        </div>

        <div ref={sectionRefs.pricing} id="pricing">
          <Pricing />
        </div>

        <div ref={sectionRefs.comparison} id="comparison">
          <Comparison />
        </div>

        <div ref={sectionRefs.tokens} id="tokens">
          <TokenEconomics />
        </div>

        <div ref={sectionRefs.sustainability} id="sustainability">
          <Sustainability />
        </div>

        <div ref={sectionRefs.regulatory} id="regulatory">
          <RegulatoryFramework />
        </div>

        <div ref={sectionRefs.faq} id="faq">
          <FAQ />
        </div>

        <CTA />
        <Footer />
      </div>
    </div>
  );
}
