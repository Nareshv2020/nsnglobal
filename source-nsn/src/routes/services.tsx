import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const services = [
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    tagline: 'Architect. Modernize. Scale.',
    desc: 'We help enterprises design secure, scalable, and cost-efficient cloud foundations across AWS, Azure, and GCP. From migration planning to governance and operating model design, we enable cloud platforms that support long-term growth and resilience.',
    points: [
      'Cloud strategy and target-state architecture',
      'Landing zones, networking, and security design',
      'Migration planning and modernization roadmaps',
      'Hybrid and multi-cloud governance',
      'Resilience, disaster recovery, and continuity planning',
      'Cost optimization and platform scalability',
    ],
  },
  {
    id: 'data',
    title: 'Data Engineering',
    tagline: 'Trusted data for better decisions.',
    desc: 'We build modern data platforms that improve accessibility, reliability, and business value. Our teams design data pipelines, analytics foundations, and governance practices that turn fragmented data into a strategic asset.',
    points: [
      'Data pipeline architecture and ETL/ELT design',
      'Data warehouse and lakehouse solutions',
      'Real-time and batch processing platforms',
      'BigQuery, Snowflake, and Databricks foundations',
      'Data quality, lineage, and governance',
      'Analytics enablement and reporting readiness',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    tagline: 'Accelerate delivery with control.',
    desc: 'We help engineering organizations improve delivery speed, reduce manual effort, and strengthen release confidence through automation, platform engineering, and standardized DevOps practices.',
    points: [
      'CI/CD pipeline design and implementation',
      'Infrastructure as code with Terraform and related tooling',
      'Kubernetes and container platform enablement',
      'Deployment standardization across environments',
      'Release governance and policy automation',
      'Developer experience and internal platform improvements',
    ],
  },
  {
    id: 'observability',
    title: 'Observability',
    tagline: 'Operational visibility at enterprise scale.',
    desc: 'We design observability capabilities that help organizations detect issues earlier, respond faster, and improve service reliability. Our approach integrates metrics, logs, traces, and alerting into a practical operational model.',
    points: [
      'Monitoring, logging, and tracing strategy',
      'Centralized telemetry and operational dashboards',
      'SLA, SLO, and service health visibility',
      'Alerting design and incident response enablement',
      'Runbook-driven operational practices',
      'Reliability reviews and production readiness assessments',
    ],
  },
  {
    id: 'integrations',
    title: 'API & Enterprise Integrations',
    tagline: 'Connect platforms. Reduce complexity.',
    desc: 'We help enterprises modernize integration landscapes by designing scalable APIs, event-driven architectures, and reliable connectivity patterns across internal and external systems.',
    points: [
      'API strategy, design, and governance',
      'Enterprise integration architecture',
      'Event-driven messaging patterns',
      'Legacy integration modernization',
      'Partner and third-party connectivity',
      'Security, reliability, and lifecycle management',
    ],
  },
]

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Enterprise Consulting Services Designed for Scale, Reliability, and Execution
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              NsN Global helps organizations solve complex technology challenges across cloud, data, DevOps, observability, and integration with a practical, outcome-focused consulting approach.
            </p>
          </div>
        </div>
      </section>

      {/* Nav Pills */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {services.map(({ id, title }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex-shrink-0 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors whitespace-nowrap"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {services.map(({ id, title, tagline, desc, points }, i) => (
        <section
          key={id}
          id={id}
          className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600 mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  {title}
                </h2>
                <p className="text-blue-700 font-medium mb-5">{tagline}</p>
                <p className="text-slate-600 leading-relaxed text-lg">{desc}</p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                  What We Deliver
                </h3>
                <ul className="space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Approach */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A Practical Delivery Model Focused on Outcomes
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We combine strategic planning with hands-on execution to help enterprises reduce risk, improve alignment, and deliver measurable business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Assess</h3>
              <p className="text-slate-600 leading-relaxed">
                Understand the current state, identify constraints, and clarify priorities across architecture, platforms, and operations.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Design</h3>
              <p className="text-slate-600 leading-relaxed">
                Define target-state solutions, delivery patterns, and practical roadmaps aligned to technical and business goals.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Deliver</h3>
              <p className="text-slate-600 leading-relaxed">
                Execute with engineering discipline, governance, and a focus on long-term maintainability and operational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Strengthen Your Technology Foundation?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-3xl mx-auto">
            Whether you are modernizing cloud platforms, scaling data capabilities, improving DevOps, or strengthening observability, NsN Global can help you move forward with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}