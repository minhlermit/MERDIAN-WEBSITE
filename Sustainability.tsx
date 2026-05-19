/**
 * Sustainability Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Environmental impact comparison
 * - SDG alignment
 * - Technical efficiency metrics
 */

export default function Sustainability() {
  return (
    <section className="w-full bg-stripi-canvas-soft py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            Sustainability & Impact
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            80x lower emissions than traditional data centers. Supporting UN SDG 13 & 16.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {/* Energy Efficiency */}
          <div className="card-feature">
            <h3 className="mb-4 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
              Energy Efficiency
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-light uppercase tracking-wider text-stripi-ink-mute">
                  Per-Transaction Consumption
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light">MERIDIAN (PoA)</span>
                    <span className="text-lg font-light tabular-figures text-stripi-primary">
                      0.001 kWh
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light">Bitcoin (PoW)</span>
                    <span className="text-lg font-light tabular-figures text-stripi-ink-mute">
                      707 kWh
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stripi-hairline">
                    <span className="text-sm font-light font-bold">Reduction</span>
                    <span className="text-lg font-light tabular-figures text-stripi-ruby">
                      707,000x lower
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-stripi-primary/5 p-4">
                <p className="text-sm font-light text-stripi-ink">
                  <strong>Why?</strong> Proof-of-Authority eliminates competitive mining hardware cycles, reducing e-waste and energy consumption relative to PoW chains.
                </p>
              </div>
            </div>
          </div>

          {/* Annual Impact */}
          <div className="card-feature">
            <h3 className="mb-4 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
              Annual Carbon Footprint
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-light uppercase tracking-wider text-stripi-ink-mute">
                  MERIDIAN vs Traditional Data Center
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light">MERIDIAN (100k tx/year)</span>
                    <span className="text-lg font-light tabular-figures text-stripi-primary">
                      0.05 tCO₂e
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-light">Bank data center (redundant SQL)</span>
                    <span className="text-lg font-light tabular-figures text-stripi-ink-mute">
                      4 tCO₂e
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stripi-hairline">
                    <span className="text-sm font-light font-bold">Reduction</span>
                    <span className="text-lg font-light tabular-figures text-stripi-ruby">
                      80x lower
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-stripi-primary/5 p-4">
                <p className="text-sm font-light text-stripi-ink">
                  <strong>At Scale:</strong> 200 financial firms by 2030 = ~790 tCO₂e avoided annually.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SDG Alignment */}
        <div className="card-cream">
          <h3 className="mb-6 text-2xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
            UN Sustainable Development Goals
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
                SDG 13: Climate Action
              </h4>
              <p className="text-sm font-light text-stripi-ink-secondary">
                Permissioned blockchain architecture reduces energy consumption by 80x compared to traditional data centers, supporting global climate mitigation targets.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
                SDG 7: Clean Energy
              </h4>
              <p className="text-sm font-light text-stripi-ink-secondary">
                Proof-of-Authority consensus eliminates mining hardware cycles, reducing e-waste and supporting renewable energy infrastructure.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
                SDG 16: Peace & Justice
              </h4>
              <p className="text-sm font-light text-stripi-ink-secondary">
                Multi-signature consensus and immutable audit trails make large-scale fraud structurally infeasible, supporting institutional integrity.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-light" style={{ letterSpacing: "-0.22px" }}>
                SDG 16.5: Reduce Corruption
              </h4>
              <p className="text-sm font-light text-stripi-ink-secondary">
                Cryptographic trust substitution replaces human intermediaries, eliminating bribery vectors and rent-seeking behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
