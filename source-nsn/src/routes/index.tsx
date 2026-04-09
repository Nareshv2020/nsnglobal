import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    title: 'Cloud Architecture',
    desc: 'Design secure, scalable, and cost-efficient cloud foundations across AWS, Azure, and GCP.',
  },
  {
    title: 'Data Engineering',
    desc: 'Build modern data pipelines, analytics platforms, and trusted data foundations for enterprise decision-making.',
  },
  {
    title: 'DevOps & Automation',
    desc: 'Accelerate delivery through CI/CD, infrastructure as code, and standardized platform engineering practices.',
  },
  {
    title: 'Observability',
    desc: 'Improve operational visibility with monitoring, logging, tracing, and alerting across critical systems.',
  },
  {
    title: 'API & Integrations',
    desc: 'Connect enterprise platforms with scalable API design, modern integration patterns, and secure interoperability.',
  },
]

const strengths = [
  {
    title: 'Proven at Scale',
    desc: 'Experience supporting complex enterprise technology environments with practical, execution-focused solutions.',
  },
  {
    title: 'Security-First',
    desc: 'Architecture and delivery approaches that incorporate governance, resilience, and risk reduction from the start.',
  },
  {
    title: 'Outcome-Oriented',
    desc: 'A consulting model built around measurable impact, operational improvement, and long-term maintainability.',
  },
  {
    title: 'Technology-Agnostic',
    desc: 'Recommendations grounded in your needs, your environment, and the realities of enterprise operations.',
  },
]

const approach = [
  {
    title: 'Assess',
    desc: 'Understand the current state, identify risks and constraints, and clarify the highest-value opportunities.',
  },
  {
    title: 'Design',
    desc: 'Define target-state architecture, delivery patterns, and implementation roadmaps aligned to business priorities.',
  },
  {
    title: 'Deliver',
    desc: 'Execute with engineering discipline, documentation, and a focus on operational success after implementation.',
  },
]

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
              Enterprise IT Consulting
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transforming Enterprise Technology with{' '}
              <span className="text-blue-400">
                Scalable Cloud, Data, and DevOps Solutions
              </span>
            </h1>

            <p className="text-xl text-slate-200 leading-relaxed mb-4">
              NsN Global partners with enterprises to modernize cloud, data, and platform engineering capabilities.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              We deliver practical, high-impact consulting solutions focused on scalability, reliability, and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-md hover:bg-white/20 transition-colors border border-white/20"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Capabilities
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              What We Do
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deep technical expertise across cloud, data, DevOps, observability, and integration — designed to help enterprises move with greater clarity and control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, desc }) => (
              <div
                key={title}
                className="p-7 rounded-2xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}

            <div className="p-7 rounded-2xl border border-slate-200 bg-white flex flex-col items-start justify-between">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">
                  Need a Starting Point?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We assess your current environment, identify the highest-impact opportunities, and recommend a practical path forward.
                </p>
              </div>
              <Link
                to="/services"
                className="text-blue-700 font-semibold hover:underline"
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Why NsN Global
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Why Enterprise Teams Choose NsN Global
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We combine strategic thinking with hands-on execution. Our consultants work closely with client teams to design practical solutions, improve delivery confidence, and leave behind capabilities that are sustainable over time.
              </p>

              <ul className="space-y-5">
                {strengths.map(({ title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">{title}</div>
                      <div className="text-slate-600 leading-relaxed">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Cloud Platforms', sub: 'GCP, AWS, Azure' },
                { label: 'Data Foundations', sub: 'Pipelines, analytics, governance' },
                { label: 'Delivery Enablement', sub: 'CI/CD, automation, platform engineering' },
                { label: 'Operational Resilience', sub: 'Monitoring, logging, and reliability' },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
                >
                  <div className="font-semibold text-slate-900 mb-2">{label}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Our Approach
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              A Practical Consulting Model Focused on Outcomes
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our engagement model is designed to create clarity, reduce risk, and deliver measurable value through every stage of transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Modernize Your Technology Foundation?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed text-lg">
            Let’s talk about your priorities, your challenges, and how NsN Global can help you move forward with confidence.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}