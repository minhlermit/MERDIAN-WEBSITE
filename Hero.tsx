/**
 * Hero Component - MERIDIAN with 3D Text Effect
 * 
 * Design Philosophy: Minimalist Financial Elegance + Tech-Forward
 * - 3D text effect on main title
 * - Gradient mesh backdrop with animated particles
 * - Smooth entrance animations
 * - Interactive 3D perspective on mouse move
 */

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = title.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y - rect.height / 2) * 0.015;
      const rotateY = (x - rect.width / 2) * -0.015;

      title.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      title.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    title.addEventListener("mousemove", handleMouseMove);
    title.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      title.removeEventListener("mousemove", handleMouseMove);
      title.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-stripi-canvas">
      {/* Animated gradient mesh backdrop */}
      <div className="absolute inset-0 overflow-hidden h-96">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-indigo-200/40 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-gradient-to-tl from-purple-200/30 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-300/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden h-96">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-stripi-primary rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center py-32">
        <div className="container max-w-4xl text-center">
          {/* 3D Title with glow effect */}
          <div
            ref={titleRef}
            className="mb-8 transition-transform duration-200 ease-out"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Main title with 3D gradient */}
            <h1
              className="text-6xl md:text-8xl font-light leading-tight mb-2"
              style={{
                letterSpacing: "-2.5px",
                background: "linear-gradient(135deg, #533afd 0%, #0d253d 50%, #533afd 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientShift 6s ease infinite",
                filter: "drop-shadow(0 0 30px rgba(83, 58, 253, 0.4)) drop-shadow(0 0 60px rgba(83, 58, 253, 0.2))",
                textShadow: "0 20px 40px rgba(83, 58, 253, 0.15)",
              }}
            >
              MERIDIAN
            </h1>

            {/* Subtitle with alternating gradient */}
            <div
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{
                letterSpacing: "-1.2px",
                background: "linear-gradient(135deg, #0d253d 0%, #533afd 50%, #0d253d 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientShift 6s ease infinite",
                animationDirection: "reverse",
                filter: "drop-shadow(0 0 20px rgba(83, 58, 253, 0.25))",
              }}
            >
              Enterprise Blockchain Governance
            </div>
            <div
              className="text-3xl md:text-5xl font-light leading-tight"
              style={{
                letterSpacing: "-1.2px",
                background: "linear-gradient(135deg, #533afd 0%, #0d253d 50%, #533afd 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientShift 6s ease infinite",
                filter: "drop-shadow(0 0 20px rgba(83, 58, 253, 0.25))",
              }}
            >
              for Vietnam
            </div>
          </div>

          {/* Tagline */}
          <p className="mb-6 text-lg font-light text-stripi-ink-secondary max-w-2xl mx-auto">
            Multi-sig Enterprise Resource and Identity DAO with AI Notary
          </p>

          {/* Description */}
          <p className="mb-12 text-base font-light text-stripi-ink-secondary max-w-3xl mx-auto leading-relaxed">
            Solve information asymmetry between principals and agents with permissioned blockchain, multi-signature KPI
            verification, and AI-assisted performance evaluation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn-primary-pill"
              style={{
                animation: "slideUp 0.8s ease-out 0.2s both",
              }}
            >
              Learn More
            </button>
            <button
              className="btn-secondary"
              style={{
                animation: "slideUp 0.8s ease-out 0.4s both",
              }}
            >
              View Whitepaper
            </button>
          </div>
        </div>
      </div>

      {/* Decorative spacing */}
      <div className="h-16" />

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.2;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
