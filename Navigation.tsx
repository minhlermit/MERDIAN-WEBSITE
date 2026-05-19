/**
 * Navigation Component - Minimalist Financial Elegance
 * 
 * Design Philosophy:
 * - Floating nav bar over gradient mesh
 * - Logo on left, nav links center, CTA on right
 * - Clean, minimal design with generous spacing
 */

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Comparison", href: "#comparison" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-stripi-primary" />
          <span className="text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
            MERIDIAN
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-light text-stripi-ink transition-colors hover:text-stripi-primary"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm font-light text-stripi-ink transition-colors hover:text-stripi-primary"
          >
            Sign In
          </a>
          <button className="btn-primary-pill text-sm">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-stripi-hairline bg-white md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-light text-stripi-ink transition-colors hover:text-stripi-primary"
              >
                {link.label}
              </button>
            ))}
            <div className="border-t border-stripi-hairline pt-4">
              <button className="btn-primary-pill w-full text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
