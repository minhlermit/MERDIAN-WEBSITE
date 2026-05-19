/**
 * Features Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Clean card layout with subtle shadows
 * - Generous padding and whitespace
 * - Typography hierarchy: display-lg for titles, body-md for descriptions
 * - Icons from lucide-react for visual interest
 */

import { Shield, Lock, Zap, BarChart3, Leaf, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Multi-Signature Verification",
    description: "CEO, Chairman, and Department Heads must collectively approve KPI records. No single point of failure.",
  },
  {
    icon: Lock,
    title: "Permissioned Blockchain",
    description: "Hyperledger Fabric with Proof-of-Authority consensus. Private, tamper-proof, and compliant with Decree 13/2023.",
  },
  {
    icon: Zap,
    title: "AI-Assisted Scoring",
    description: "Machine learning detects anomalies in real-time. Flags deviations without human bias.",
  },
  {
    icon: BarChart3,
    title: "Auto-Slashing Accountability",
    description: "Smart contracts automatically enforce penalties for rule violations. Immutable audit trails for regulators.",
  },
  {
    icon: Leaf,
    title: "80x Lower Emissions",
    description: "PoA consensus uses 0.001 kWh per transaction vs Bitcoin's 707 kWh. Supports SDG 13 (Climate Action).",
  },
  {
    icon: CheckCircle,
    title: "Regulatory Compliant",
    description: "Operates under Resolution 05/2025 sandbox pathway. On-shore hosting satisfies Decree 13/2023 data localisation.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            MERIDIAN Architecture
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            Permissioned blockchain + AI governance + multi-party consensus
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-feature">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stripi-canvas-soft">
                  <Icon className="h-6 w-6 text-stripi-primary" />
                </div>
                <h3 className="mb-3 text-xl font-light leading-snug" style={{ letterSpacing: "-0.26px" }}>
                  {feature.title}
                </h3>
                <p className="text-base font-light leading-relaxed text-stripi-ink-secondary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
