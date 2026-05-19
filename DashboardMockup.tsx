/**
 * Dashboard Mockup Component - Minimalist Financial Elegance
 * 
 * Design Philosophy:
 * - Composite dashboard UI rendered as static mockup
 * - Deep navy background for product UI
 * - Tabular figures for financial data
 * - Subtle shadows for depth
 */

import { TrendingUp, BarChart3, PieChart } from "lucide-react";

export default function DashboardMockup() {
  return (
    <section className="w-full bg-stripi-canvas py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light leading-snug" style={{ letterSpacing: "-0.96px" }}>
            Powerful Dashboard
          </h2>
          <p className="text-lg font-light text-stripi-ink-secondary">
            Monitor your business with real-time analytics and insights.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="card-feature overflow-hidden">
          <div className="bg-stripi-brand-dark-900 p-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between border-b border-stripi-hairline pb-4">
              <h3 className="text-lg font-light text-stripi-canvas" style={{ letterSpacing: "-0.22px" }}>
                Dashboard
              </h3>
              <div className="flex gap-2">
                <button className="rounded px-3 py-1 text-xs font-light text-stripi-ink-mute hover:bg-stripi-canvas-soft">
                  1D
                </button>
                <button className="rounded bg-stripi-primary px-3 py-1 text-xs font-light text-stripi-canvas">
                  1M
                </button>
                <button className="rounded px-3 py-1 text-xs font-light text-stripi-ink-mute hover:bg-stripi-canvas-soft">
                  1Y
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-6 md:grid-cols-3">
              {/* Total Revenue */}
              <div className="rounded-lg bg-stripi-canvas-soft/10 p-4 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-stripi-primary" />
                  <span className="text-xs font-light text-stripi-ink-mute">Total Revenue</span>
                </div>
                <div className="text-2xl font-light text-stripi-canvas tabular-figures" style={{ letterSpacing: "-0.64px" }}>
                  $1,234,567
                </div>
                <div className="mt-2 text-xs font-light text-stripi-primary">
                  +12.5% from last month
                </div>
              </div>

              {/* Transaction Count */}
              <div className="rounded-lg bg-stripi-canvas-soft/10 p-4 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-stripi-ruby" />
                  <span className="text-xs font-light text-stripi-ink-mute">Transactions</span>
                </div>
                <div className="text-2xl font-light text-stripi-canvas tabular-figures" style={{ letterSpacing: "-0.64px" }}>
                  45,892
                </div>
                <div className="mt-2 text-xs font-light text-stripi-ruby">
                  +8.3% from last month
                </div>
              </div>

              {/* Success Rate */}
              <div className="rounded-lg bg-stripi-canvas-soft/10 p-4 backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-stripi-magenta" />
                  <span className="text-xs font-light text-stripi-ink-mute">Success Rate</span>
                </div>
                <div className="text-2xl font-light text-stripi-canvas tabular-figures" style={{ letterSpacing: "-0.64px" }}>
                  99.87%
                </div>
                <div className="mt-2 text-xs font-light text-stripi-magenta">
                  Industry leading
                </div>
              </div>
            </div>

            {/* Recent Transactions Table */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full text-left text-xs font-light text-stripi-canvas-soft">
                <thead>
                  <tr className="border-b border-stripi-hairline">
                    <th className="pb-3 pr-4">Transaction ID</th>
                    <th className="pb-3 pr-4">Customer</th>
                    <th className="pb-3 pr-4">Amount</th>
                    <th className="pb-3 pr-4">Status</th>
                    <th className="pb-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "TXN-001", customer: "Acme Corp", amount: "$5,234.00", status: "Completed", date: "2024-05-19" },
                    { id: "TXN-002", customer: "TechStart Inc", amount: "$12,450.50", status: "Completed", date: "2024-05-19" },
                    { id: "TXN-003", customer: "Global Solutions", amount: "$8,920.25", status: "Pending", date: "2024-05-19" },
                  ].map((row) => (
                    <tr key={row.id} className="border-b border-stripi-hairline/30">
                      <td className="py-3 pr-4 font-mono">{row.id}</td>
                      <td className="py-3 pr-4">{row.customer}</td>
                      <td className="py-3 pr-4 tabular-figures">{row.amount}</td>
                      <td className="py-3 pr-4">
                        <span className={`rounded-full px-2 py-1 text-xs ${row.status === "Completed" ? "bg-stripi-primary/20 text-stripi-primary" : "bg-stripi-magenta/20 text-stripi-magenta"}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
