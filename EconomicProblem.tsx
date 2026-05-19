/**
 * Economic Problem Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Cream-band feature card for warmth
 * - Clear problem statement with statistics
 * - Real-world example (Vạn Thịnh Phát case)
 */

export default function EconomicProblem() {
  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="card-cream max-w-3xl mx-auto">
          <h2 className="mb-6 text-3xl font-light leading-snug" style={{ letterSpacing: "-0.64px" }}>
            The Economic Problem: Information Asymmetry
          </h2>
          
          <div className="space-y-6 text-base font-light leading-relaxed text-stripi-ink">
            <p>
              Vietnamese enterprises are rapidly digitising workforce management, with PwC estimating that digital HR transformation lifts productivity by 30 percent. However, these tools optimise administrative throughput without resolving the underlying economic problem: <strong>information asymmetry between principals and agents</strong>.
            </p>

            <div className="rounded-lg bg-stripi-primary/5 p-4 border-l-4 border-stripi-primary">
              <p className="font-light">
                When shareholders cannot verify management actions, rent-seeking and moral hazard absorb an estimated <strong>5 to 10 percent of firm value annually</strong>.
              </p>
            </div>

            <p>
              The Vạn Thịnh Phát case exemplifies this concretely:
            </p>

            <ul className="space-y-3 ml-4">
              <li className="flex gap-3">
                <span className="text-stripi-primary font-bold">•</span>
                <span><strong>916 falsified loan files</strong> orchestrated by Trương Mỹ Lan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stripi-primary font-bold">•</span>
                <span><strong>VND 304,000 billion</strong> extracted through SCB</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stripi-primary font-bold">•</span>
                <span><strong>State Bank inspectors bribed</strong> to suppress audits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stripi-primary font-bold">•</span>
                <span><strong>VND 677,000 billion damages</strong> to 36,000 bondholders</span>
              </li>
            </ul>

            <p>
              Resolution 05/2025/NQ-CP licenses crypto-asset providers requiring tamper-proof multi-party verification. MERIDIAN addresses this by making such fraud structurally infeasible through permissioned blockchain consensus and immutable audit trails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
