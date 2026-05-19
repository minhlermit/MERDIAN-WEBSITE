/**
 * Token Economics Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Two-token system explanation
 * - Clear allocation and vesting schedules
 * - Tabular data for token distribution
 */

export default function TokenEconomics() {
  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            Dual Token Economics
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            PERFORM (utility) + MERIDIAN (governance) — addressing distinct functions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* PERFORM Token */}
          <div className="card-feature">
            <h3 className="mb-4 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
              PERFORM (PRFM)
            </h3>
            <p className="mb-4 text-sm font-light text-stripi-ink-secondary">
              Internal Utility Token — Fails Howey test for security status
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-light uppercase tracking-wider text-stripi-ink-mute">
                  Mechanism
                </h4>
                <ul className="space-y-2 text-sm font-light text-stripi-ink">
                  <li className="flex gap-2">
                    <span className="text-stripi-primary">✓</span>
                    <span>Minted upon multi-signature KPI verification</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-stripi-primary">✓</span>
                    <span>Burned upon VND treasury redemption at 1:1</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-stripi-primary">✓</span>
                    <span>Eliminates inflation through mint-burn cycle</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-light uppercase tracking-wider text-stripi-ink-mute">
                  Use Case
                </h4>
                <p className="text-sm font-light text-stripi-ink">
                  Employees receive PERFORM via integrated wallets. Redeem instantly without exposing personal banking information.
                </p>
              </div>

              <div className="rounded-lg bg-stripi-primary/5 p-3 border-l-4 border-stripi-primary">
                <p className="text-xs font-light text-stripi-primary">
                  <strong>Regulatory:</strong> Operates outside Resolution 05 Article 3.2 scope as internal utility, not CASP.
                </p>
              </div>
            </div>
          </div>

          {/* MERIDIAN Token */}
          <div className="card-feature">
            <h3 className="mb-4 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
              MERIDIAN (MERI)
            </h3>
            <p className="mb-4 text-sm font-light text-stripi-ink-secondary">
              Governance + Utility Hybrid — Regulated sandbox token
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-light uppercase tracking-wider text-stripi-ink-mute">
                  Fixed Supply
                </h4>
                <p className="text-sm font-light text-stripi-ink tabular-figures">
                  100 million tokens (deflationary)
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-light uppercase tracking-wider text-stripi-ink-mute">
                  Holder Benefits
                </h4>
                <ul className="space-y-2 text-sm font-light text-stripi-ink">
                  <li className="flex gap-2">
                    <span className="text-stripi-ruby">→</span>
                    <span>Vote on platform parameters</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-stripi-ruby">→</span>
                    <span>Earn 30% of commission quarterly</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-stripi-ruby">→</span>
                    <span>Benefit from 10% quarterly deflationary burns</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-stripi-primary/5 p-3 border-l-4 border-stripi-primary">
                <p className="text-xs font-light text-stripi-primary">
                  <strong>Mechanism:</strong> Mirroring Aave's model with real SaaS revenue underlying token value.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Token Allocation */}
        <div className="card-cream">
          <h3 className="mb-6 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
            MERIDIAN Token Allocation (100M Fixed Cap)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm font-light">
              <thead>
                <tr className="border-b border-stripi-ink/20">
                  <th className="pb-3 pr-4 text-left">Category</th>
                  <th className="pb-3 pr-4 text-right tabular-figures">Allocation</th>
                  <th className="pb-3 text-left">Lock-up Period</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stripi-ink/10">
                  <td className="py-3 pr-4">Public Sale</td>
                  <td className="py-3 pr-4 text-right tabular-figures">40M (40%)</td>
                  <td className="py-3">None</td>
                </tr>
                <tr className="border-b border-stripi-ink/10">
                  <td className="py-3 pr-4">Team</td>
                  <td className="py-3 pr-4 text-right tabular-figures">20M (20%)</td>
                  <td className="py-3">4-year linear vest</td>
                </tr>
                <tr className="border-b border-stripi-ink/10">
                  <td className="py-3 pr-4">Ecosystem Grants</td>
                  <td className="py-3 pr-4 text-right tabular-figures">20M (20%)</td>
                  <td className="py-3">1-year cliff</td>
                </tr>
                <tr className="border-b border-stripi-ink/10">
                  <td className="py-3 pr-4">Treasury</td>
                  <td className="py-3 pr-4 text-right tabular-figures">15M (15%)</td>
                  <td className="py-3">DAO-controlled</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Advisors</td>
                  <td className="py-3 pr-4 text-right tabular-figures">5M (5%)</td>
                  <td className="py-3">2-year linear vest</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-stripi-primary/5 border-l-4 border-stripi-primary">
            <p className="text-xs font-light text-stripi-primary">
              <strong>Anti-scam Design:</strong> CertiK/Hacken audited contracts, KYC + whale caps (max USD 10k/wallet), 4-year team vesting, real SaaS revenue backing token value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
