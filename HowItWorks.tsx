/**
 * How It Works Component - MERIDIAN
 * 
 * Design Philosophy: Minimalist Financial Elegance
 * - Visual flowchart with images
 * - Step-by-step process explanation
 * - Feature image integration
 */

export default function HowItWorks() {
  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            How MERIDIAN Works
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            Four-step process: KPI submission → Multi-signature approval → AI verification → Blockchain execution
          </p>
        </div>



        {/* Step-by-step breakdown */}
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              step: 1,
              title: "KPI Submission",
              description: "Employee submits performance KPI report with supporting data and metrics.",
            },
            {
              step: 2,
              title: "Multi-Signature Approval",
              description: "CEO, Chairman, and Department Head independently review and approve KPI records.",
            },
            {
              step: 3,
              title: "AI Anomaly Detection",
              description: "Machine learning analyzes data for anomalies and validates accuracy in real-time.",
            },
            {
              step: 4,
              title: "Blockchain Execution",
              description: "Smart contracts execute transaction and record immutably on Hyperledger Fabric.",
            },
          ].map((item) => (
            <div key={item.step} className="card-feature">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stripi-primary text-stripi-canvas font-light">
                {item.step}
              </div>
              <h3 className="mb-3 text-lg font-light leading-snug" style={{ letterSpacing: "-0.22px" }}>
                {item.title}
              </h3>
              <p className="text-sm font-light text-stripi-ink-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
