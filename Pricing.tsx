/**
 * Pricing Component - MERIDIAN Revenue Model
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - 3-up grid on desktop, 2-up on tablet, 1-up on mobile
 * - Featured tier uses dark navy background (brand-dark-900)
 * - Tabular figures for pricing numbers
 * - Generous padding and clear hierarchy
 */

import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Startup",
    range: "50–100 employees",
    price: 50000,
    currency: "USD",
    description: "For growing Vietnamese firms",
    features: [
      "Perpetual platform license",
      "Smart contract customisation",
      "Employee onboarding",
      "12-month standard support",
      "1% settlement commission",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    range: "100–250 employees",
    price: 75000,
    currency: "USD",
    description: "For mid-tier enterprises",
    features: [
      "Perpetual platform license",
      "Advanced customisation",
      "Priority support",
      "AI anomaly detection",
      "1% settlement commission",
      "Annual maintenance included",
    ],
    cta: "Schedule Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    range: "250–500 employees",
    price: 120000,
    currency: "USD",
    description: "For large financial firms",
    features: [
      "Perpetual platform license",
      "Full customisation",
      "Dedicated account manager",
      "Real-time AI monitoring",
      "0.5% settlement commission",
      "24/7 premium support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="w-full bg-stripi-canvas-soft py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            Revenue Model
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            Tier-based licensing reflecting Vietnamese enterprise SaaS ownership mentality
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={tier.featured ? "card-pricing-featured" : "card-pricing"}
            >
              <div className={`mb-2 text-xs font-light uppercase tracking-wider ${tier.featured ? "text-stripi-canvas" : "text-stripi-ink-mute"}`}>
                {tier.range}
              </div>
              <h3 className="mb-2 text-lg font-light leading-snug" style={{ letterSpacing: "-0.22px" }}>
                {tier.name}
              </h3>
              <p className={`mb-6 text-sm font-light ${tier.featured ? "text-stripi-canvas" : "text-stripi-ink-secondary"}`}>
                {tier.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-sm font-light ${tier.featured ? "text-stripi-canvas" : "text-stripi-ink-mute"}`}>
                    {tier.currency}
                  </span>
                  <span className="text-3xl font-light tabular-figures" style={{ letterSpacing: "-0.64px" }}>
                    {(tier.price / 1000).toFixed(0)}k
                  </span>
                </div>
                <div className={`mt-2 text-xs font-light ${tier.featured ? "text-stripi-canvas" : "text-stripi-ink-mute"}`}>
                  One-time license + annual maintenance (15–20%)
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.featured ? "text-stripi-canvas" : "text-stripi-primary"}`} />
                    <span className={`text-sm font-light ${tier.featured ? "text-stripi-canvas" : "text-stripi-ink"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={tier.featured ? "btn-primary-pill w-full" : "btn-secondary w-full"}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <h4 className="mb-2 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              Annual Maintenance
            </h4>
            <p className="text-sm font-light text-stripi-ink-secondary">
              15–20% of initial license fee. Covers smart contract patches, security audits, and regulatory updates.
            </p>
          </div>
          <div className="text-center">
            <h4 className="mb-2 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              Settlement Commission
            </h4>
            <p className="text-sm font-light text-stripi-ink-secondary">
              Standard 1.0% on smart contract settlements. 0.5% for high-volume firms (USD 1M+ monthly).
            </p>
          </div>
          <div className="text-center">
            <h4 className="mb-2 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              Minimum Transaction
            </h4>
            <p className="text-sm font-light text-stripi-ink-secondary">
              USD 100 minimum per transaction. Comparable to NAPAS (1–2%) and enterprise settlement norms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
