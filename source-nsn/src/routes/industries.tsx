import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/industries')({
  component: IndustriesPage,
})

const industries = [
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    desc: 'Support modernization of regulated platforms with secure cloud architectures, data platforms, and integration strategies aligned to compliance and reliability requirements.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    desc: 'Enable secure, compliant systems that support data integration, analytics, and operational efficiency across healthcare environments.',
  },
  {
    id: 'retail',
    title: 'Retail & Consumer Goods',
    desc: 'Build scalable platforms that support high-traffic systems, real-time data processing, and integrated customer and supply chain experiences.',
  },
  {
    id: 'technology',
    title: 'Technology & SaaS',
    desc: 'Support platform engineering, DevOps, and data capabilities for organizations building and scaling digital products.',
  },
]

function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Experience Across Key Enterprise Sectors
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              NsN Global works with organizations across industries, helping teams modernize technology platforms, improve delivery capabilities, and strengthen operational resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Industry List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map(({ id, title, desc }) => (
            <div
              key={id}
              className="border-b border-slate-200 pb-10 last:border-b-0"
            >
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                {title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg max-w-3xl">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Looking for Industry-Specific Guidance?
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed text-lg">
            We tailor our consulting approach to your environment, constraints, and priorities.
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