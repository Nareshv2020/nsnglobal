import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const values = [
  {
    title: 'Technical Integrity',
    desc: 'We recommend solutions based on sound engineering judgment, practical feasibility, and long-term sustainability.',
  },
  {
    title: 'Client Transparency',
    desc: 'We communicate clearly on priorities, trade-offs, risks, and timelines so leadership and delivery teams stay aligned.',
  },
  {
    title: 'Execution Focus',
    desc: 'Our work is grounded in real implementation, not just recommendations. We help clients move from strategy to delivery.',
  },
  {
    title: 'Measured Impact',
    desc: 'We focus on outcomes that improve scalability, reliability, operational efficiency, and delivery confidence.',
  },
]

const principles = [
  {
    title: 'Enterprise Perspective',
    desc: 'We understand the realities of large-scale environments, governance requirements, and cross-functional delivery.',
  },
  {
    title: 'Hands-On Delivery',
    desc: 'We work closely with client teams to design, implement, and operationalize practical solutions.',
  },
  {
    title: 'Long-Term Thinking',
    desc: 'We aim to leave behind architectures, processes, and capabilities that remain effective well beyond the engagement.',
  },
]

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Built for Enterprises That Need Practical Technology Leadership
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              NsN Global is an enterprise IT consulting firm focused on helping organizations modernize cloud platforms, strengthen data foundations, improve delivery practices, and build more reliable operations.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Who We Are
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                A Consulting Partner Grounded in Real-World Execution
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-lg">
                We work with enterprise teams to solve complex technology challenges across cloud architecture, data engineering, DevOps, observability, and integration.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our approach combines strategic clarity with hands-on delivery. We help clients define the right path forward, implement practical solutions, and strengthen internal capabilities so progress is sustainable over time.
              </p>
              <Link
                to="/services"
                className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: 'Cloud & Platform Strategy',
                  sub: 'Architecture, governance, modernization',
                },
                {
                  label: 'Data & Analytics Foundations',
                  sub: 'Pipelines, platforms, reliability',
                },
                {
                  label: 'Delivery Enablement',
                  sub: 'DevOps, automation, release confidence',
                },
                {
                  label: 'Operational Resilience',
                  sub: 'Observability, incident readiness, visibility',
                },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-6"
                >
                  <div className="font-semibold text-slate-900 mb-2">
                    {label}
                  </div>
                  <div className="text-slate-500 text-sm leading-relaxed">
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Principles That Shape How We Work
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our work is guided by a commitment to technical rigor, transparency, and outcomes that matter in enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Our Approach
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How NsN Global Creates Value
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We engage as a practical consulting partner — helping teams align strategy, delivery, and operations so technology investments translate into measurable business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 p-8 bg-slate-50"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build a Stronger Technology Foundation
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed text-lg">
            Whether you need strategic direction, architecture support, or hands-on delivery, NsN Global is ready to help your organization move forward with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}