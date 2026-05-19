/**
 * CTA Component - Minimalist Financial Elegance
 * 
 * Design Philosophy:
 * - Cream-band feature card for warmth
 * - Simple form with email input
 * - Single CTA button
 * - Generous padding and centered layout
 */

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="card-cream max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
              Stay Updated
            </h2>
            <p className="mb-8 text-base font-light text-stripi-ink-secondary">
              Get the latest updates on new features, pricing changes, and industry insights delivered to your inbox.
            </p>

            {submitted ? (
              <div className="rounded-lg bg-stripi-primary/10 p-4 text-sm font-light text-stripi-primary">
                ✓ Thanks for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-text flex-1 sm:max-w-xs"
                />
                <button type="submit" className="btn-primary-pill">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
