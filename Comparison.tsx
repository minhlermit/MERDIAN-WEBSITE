/**
 * Comparison Component - MERIDIAN vs Existing Solutions
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Clear comparison table
 * - Feature-by-feature breakdown
 * - Highlight MERIDIAN advantages
 */

import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Multi-Party Consensus",
    meridian: true,
    sap: false,
    aragon: true,
    corda: true,
  },
  {
    feature: "HR-Specific Modules",
    meridian: true,
    sap: true,
    aragon: false,
    corda: false,
  },
  {
    feature: "AI-Assisted Scoring",
    meridian: true,
    sap: false,
    aragon: false,
    corda: false,
  },
  {
    feature: "Auto-Slashing Accountability",
    meridian: true,
    sap: false,
    aragon: true,
    corda: false,
  },
  {
    feature: "Permissioned Architecture",
    meridian: true,
    sap: false,
    aragon: false,
    corda: true,
  },
  {
    feature: "Vietnam Data Localisation",
    meridian: true,
    sap: true,
    aragon: false,
    corda: false,
  },
  {
    feature: "Immutable Audit Trails",
    meridian: true,
    sap: false,
    aragon: true,
    corda: true,
  },
  {
    feature: "Tamper-Proof Records",
    meridian: true,
    sap: false,
    aragon: true,
    corda: true,
  },
  {
    feature: "Admin-Level Manipulation Risk",
    meridian: false,
    sap: true,
    aragon: false,
    corda: false,
  },
  {
    feature: "Public Chain Compatibility",
    meridian: false,
    sap: false,
    aragon: true,
    corda: false,
  },
];

export default function Comparison() {
  return (
    <section className="w-full bg-stripi-canvas-soft py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            MERIDIAN vs Existing Solutions
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            How MERIDIAN combines the best of centralized and decentralized systems
          </p>
        </div>

        {/* Comparison Table */}
        <div className="card-feature overflow-x-auto">
          <table className="w-full text-sm font-light">
            <thead>
              <tr className="border-b border-stripi-hairline">
                <th className="pb-4 pr-4 text-left">Feature</th>
                <th className="pb-4 pr-4 text-center">
                  <div className="font-light">MERIDIAN</div>
                  <div className="text-xs text-stripi-primary">Blockchain + AI</div>
                </th>
                <th className="pb-4 pr-4 text-center">
                  <div className="font-light">SAP HRM</div>
                  <div className="text-xs text-stripi-ink-mute">Centralized</div>
                </th>
                <th className="pb-4 pr-4 text-center">
                  <div className="font-light">Aragon</div>
                  <div className="text-xs text-stripi-ink-mute">DAO Governance</div>
                </th>
                <th className="pb-4 text-center">
                  <div className="font-light">R3 Corda</div>
                  <div className="text-xs text-stripi-ink-mute">Enterprise Blockchain</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-stripi-canvas" : "bg-stripi-canvas-soft"}>
                  <td className="py-4 pr-4 font-light text-stripi-ink">{row.feature}</td>
                  <td className="py-4 pr-4 text-center">
                    {row.meridian ? (
                      <Check className="mx-auto h-5 w-5 text-stripi-primary" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    )}
                  </td>
                  <td className="py-4 pr-4 text-center">
                    {row.sap ? (
                      <Check className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    )}
                  </td>
                  <td className="py-4 pr-4 text-center">
                    {row.aragon ? (
                      <Check className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {row.corda ? (
                      <Check className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-stripi-ink-mute" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key Advantages */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="card-cream">
            <h3 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              vs Centralized (SAP)
            </h3>
            <ul className="space-y-2 text-sm font-light text-stripi-ink">
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>No single point of failure</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Immutable audit trails</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Prevents admin manipulation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Cryptographic verification</span>
              </li>
            </ul>
          </div>

          <div className="card-cream">
            <h3 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              vs DAO Governance (Aragon)
            </h3>
            <ul className="space-y-2 text-sm font-light text-stripi-ink">
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>HR-specific modules</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>AI-assisted scoring</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Vietnam compliant</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Permissioned (private)</span>
              </li>
            </ul>
          </div>

          <div className="card-cream">
            <h3 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
              vs Enterprise Blockchain (Corda)
            </h3>
            <ul className="space-y-2 text-sm font-light text-stripi-ink">
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>AI anomaly detection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Auto-slashing mechanism</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Lower energy consumption</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Dual-token economics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
