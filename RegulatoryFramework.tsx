/**
 * Regulatory Framework Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Clear regulatory compliance pathway
 * - Vietnamese regulatory context
 * - Implementation timeline
 */

export default function RegulatoryFramework() {
  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            Regulatory Compliance
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            Operating under Vietnam's Resolution 05/2025 sandbox pathway
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {/* Resolution 05/2025 */}
          <div className="card-feature">
            <h3 className="mb-4 text-lg font-light leading-snug" style={{ letterSpacing: "-0.22px" }}>
              Resolution 05/2025/NQ-CP
            </h3>
            <p className="mb-4 text-sm font-light text-stripi-ink-secondary">
              Crypto-asset market pilot framework
            </p>
            <ul className="space-y-3 text-sm font-light text-stripi-ink">
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>PERFORM classified as internal utility (outside CASP scope)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>MERIDIAN qualifies under DTI Law sandbox</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Tamper-proof multi-party verification required</span>
              </li>
            </ul>
          </div>

          {/* Decree 13/2023 */}
          <div className="card-feature">
            <h3 className="mb-4 text-lg font-light leading-snug" style={{ letterSpacing: "-0.22px" }}>
              Decree 13/2023
            </h3>
            <p className="mb-4 text-sm font-light text-stripi-ink-secondary">
              Data localisation requirements
            </p>
            <ul className="space-y-3 text-sm font-light text-stripi-ink">
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Hyperledger on-shore hosting</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Personal data stored in Vietnam</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Compliant with strict access restrictions</span>
              </li>
            </ul>
          </div>

          {/* Labor Code */}
          <div className="card-feature">
            <h3 className="mb-4 text-lg font-light leading-snug" style={{ letterSpacing: "-0.22px" }}>
              Labor Code Article 90
            </h3>
            <p className="mb-4 text-sm font-light text-stripi-ink-secondary">
              Payroll and compensation
            </p>
            <ul className="space-y-3 text-sm font-light text-stripi-ink">
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>VND redemption via MoMo & VNPay</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Licensed payment partners</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stripi-primary">✓</span>
                <span>Instant settlement without banking exposure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="card-cream">
          <h3 className="mb-6 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
            Market Expansion Timeline
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-stripi-primary flex items-center justify-center text-stripi-canvas font-light">
                  1
                </div>
                <div className="h-12 w-0.5 bg-stripi-hairline" />
              </div>
              <div className="pb-8">
                <h4 className="text-sm font-light uppercase tracking-wider text-stripi-ink-mute mb-1">
                  March 2026
                </h4>
                <p className="text-sm font-light text-stripi-ink">
                  <strong>Initial Pilot:</strong> 5 qualified financial firms licensed under Resolution 05/2025
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-stripi-primary flex items-center justify-center text-stripi-canvas font-light">
                  2
                </div>
                <div className="h-12 w-0.5 bg-stripi-hairline" />
              </div>
              <div className="pb-8">
                <h4 className="text-sm font-light uppercase tracking-wider text-stripi-ink-mute mb-1">
                  2026–2027
                </h4>
                <p className="text-sm font-light text-stripi-ink">
                  <strong>Scaling Phase:</strong> 20–50 mid-tier securities and fund management firms
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-stripi-primary flex items-center justify-center text-stripi-canvas font-light">
                  3
                </div>
                <div className="h-12 w-0.5 bg-stripi-hairline" />
              </div>
              <div className="pb-8">
                <h4 className="text-sm font-light uppercase tracking-wider text-stripi-ink-mute mb-1">
                  2028–2030
                </h4>
                <p className="text-sm font-light text-stripi-ink">
                  <strong>National Scale:</strong> 200 financial firms across Vietnam, ~790 tCO₂e avoided annually
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="h-10 w-10 rounded-full bg-stripi-primary flex items-center justify-center text-stripi-canvas font-light">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-sm font-light uppercase tracking-wider text-stripi-ink-mute mb-1">
                  Post-2030
                </h4>
                <p className="text-sm font-light text-stripi-ink">
                  <strong>Regulatory Transition:</strong> Sandbox pilot concludes; permanent licensing pathway established
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
