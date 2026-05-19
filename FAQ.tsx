/**
 * FAQ Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Accordion-style Q&A
 * - Common questions about blockchain, tokens, and implementation
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What is MERIDIAN and how does it solve information asymmetry?",
    answer:
      "MERIDIAN is a permissioned blockchain-AI governance platform that combines multi-signature consensus, AI-assisted scoring, and immutable audit trails. It solves information asymmetry by making large-scale fraud structurally infeasible: orchestrating falsified records requires collusion across three independent signatories (CEO, Chairman, Department Head) per transaction, with real-time AI anomaly detection flagging deviations.",
  },
  {
    question: "What is the difference between PERFORM and MERIDIAN tokens?",
    answer:
      "PERFORM (PRFM) is an internal utility token minted upon KPI verification and burned upon VND redemption at 1:1 parity. It fails the Howey test for security status and operates outside Resolution 05 Article 3.2 scope. MERIDIAN (MERI) is a governance token with fixed supply (100M), enabling voting on platform parameters and earning 30% of commission quarterly. MERIDIAN passes utility-governance hybrid classification under regulated sandbox rules.",
  },
  {
    question: "Is MERIDIAN compliant with Vietnamese regulations?",
    answer:
      "Yes. MERIDIAN operates under Resolution 05/2025/NQ-CP sandbox pathway: PERFORM qualifies as internal utility (outside CASP licensing), MERIDIAN qualifies under DTI Law sandbox. Hyperledger on-shore hosting satisfies Decree 13/2023 data localisation. VND redemption via licensed partners (MoMo, VNPay) complies with Labor Code Article 90. The platform is designed specifically for Vietnam's regulatory environment.",
  },
  {
    question: "How does the multi-signature verification process work?",
    answer:
      "When an employee submits a KPI report, it requires independent approval from three signatories: CEO, Chairman, and Department Head. Each must cryptographically sign the transaction. If any signer detects anomalies (flagged by AI), the process halts. Only after all three approvals does the smart contract execute and record the transaction immutably on the blockchain. This eliminates single-point-of-failure vulnerabilities.",
  },
  {
    question: "What is the energy consumption compared to traditional systems?",
    answer:
      "MERIDIAN uses Hyperledger Fabric with Proof-of-Authority consensus, consuming 0.001 kWh per transaction versus Bitcoin's 707 kWh (707,000x lower). For 100,000 annual transactions, MERIDIAN emits ~0.05 tCO₂e compared to ~4 tCO₂e from equivalent on-premises bank data centers (80x reduction). At national scale of 200 firms by 2030, cumulative avoided emissions reach ~790 tCO₂e annually.",
  },
  {
    question: "How is MERIDIAN different from existing HR platforms like SAP?",
    answer:
      "SAP HRM optimises administrative throughput but remains vulnerable to administrator-level manipulation. MERIDIAN adds multi-party consensus, immutable audit trails, and AI anomaly detection—making fraud structurally infeasible. Unlike public blockchains (Aragon), MERIDIAN is permissioned and HR-specific. Unlike enterprise blockchains (Corda), MERIDIAN includes AI-assisted scoring and auto-slashing mechanisms.",
  },
  {
    question: "What happens if an employee's KPI data is flagged as anomalous?",
    answer:
      "When AI detects anomalies (deviations in real-time data, pattern inconsistencies, or integrity issues), the verification process halts and the transaction is flagged for manual review. No auto-slashing occurs without human oversight. This preserves harmony while delivering accountability—a key design principle for Vietnam's hierarchical business culture.",
  },
  {
    question: "How is MERIDIAN funded and what is the ICO structure?",
    answer:
      "MERIDIAN raises capital through a 5-stage ICO: Stage 1 (Months 1–3): Whitepaper + audits (~USD 50k cost). Stage 2 (Months 4–6): Private sale 15M tokens at USD 0.50 (USD 7.5M raised). Stage 3 (Months 7–9): Public sale 25M tokens at USD 1.00 with KYC (USD 25M raised). Stage 4 (Months 10–12): Exchange listing. Stage 5 (Month 13+): Staking + governance. Team tokens vest over 4 years, preventing day-1 dumps.",
  },
  {
    question: "What is the pricing model for enterprises?",
    answer:
      "MERIDIAN uses tier-based perpetual licensing: Startup (50–100 employees): USD 50–75k. Professional (100–250 employees): USD 75–120k. Enterprise (250–500 employees): USD 120–200k. Annual maintenance is 15–20% of license fee. Settlement commission is 1.0% standard (0.5% for high-volume firms exceeding USD 1M monthly). Minimum transaction is USD 100.",
  },
  {
    question: "How does MERIDIAN support UN Sustainable Development Goals?",
    answer:
      "MERIDIAN advances SDG 13 (Climate Action) through 80x lower emissions than traditional data centers. It supports SDG 7 (Clean Energy) by eliminating mining hardware cycles. Most critically, it advances SDG 16 (Peace & Justice): multi-signature consensus + immutable audit trails make Vạn Thịnh Phát-style fraud structurally infeasible, supporting Vietnam's anti-corruption 'burning furnace' campaign and institutional integrity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            Common questions about MERIDIAN, blockchain, tokens, and implementation
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="card-feature">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between gap-4 text-left"
              >
                <h3 className="text-lg font-light leading-snug" style={{ letterSpacing: "-0.22px" }}>
                  {item.question}
                </h3>
                <ChevronDown
                  className={`mt-1 h-5 w-5 flex-shrink-0 text-stripi-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="mt-4 border-t border-stripi-hairline pt-4">
                  <p className="text-base font-light leading-relaxed text-stripi-ink-secondary">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-base font-light text-stripi-ink-secondary">
            Still have questions? Contact our team for more information.
          </p>
          <button className="btn-primary-pill">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
