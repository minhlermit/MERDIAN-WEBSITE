/**
 * Footer Component - Minimalist Financial Elegance
 * 
 * Design Philosophy:
 * - Light background with muted text
 * - 4-6 columns of link groups
 * - Social icons and legal information
 * - Generous padding
 */

import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Pricing", "Features", "Security", "Status"],
  },
  {
    title: "Developers",
    links: ["Documentation", "API Reference", "SDKs", "Guides"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Compliance", "Contact"],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-stripi-hairline bg-stripi-canvas py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              MERIDIAN
            </h3>
            <p className="text-sm font-light text-stripi-ink-mute">
              Multi-sig Enterprise Resource and Identity DAO with AI Notary.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-stripi-ink-mute transition-colors hover:text-stripi-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-light uppercase tracking-wider text-stripi-ink">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-stripi-ink-mute transition-colors hover:text-stripi-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-stripi-hairline" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm font-light text-stripi-ink-mute md:flex-row">
          <p>&copy; 2024 MERIDIAN. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stripi-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stripi-primary">
              Terms of Service
            </a>
            <a href="#" className="hover:text-stripi-primary">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
