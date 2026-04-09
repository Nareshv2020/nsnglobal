import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-green-600 text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Message Received
        </h3>
        <p className="text-slate-600">
          Thank you for reaching out. A member of our team will respond shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Jane Smith"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="jane@company.com"
            className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={fields.company}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Area of Interest
        </label>
        <select
          name="service"
          value={fields.service}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          <option value="">Select a service...</option>
          <option value="cloud">Cloud Architecture</option>
          <option value="data">Data Engineering</option>
          <option value="devops">DevOps & Automation</option>
          <option value="observability">Observability</option>
          <option value="integrations">API & Integrations</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your business need, project, or challenge..."
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  )
}

function ContactPage() {
  const contactDetails = [
    {
      label: 'Email',
      value: 'support@nsnglobalinc.com',
    },
    {
      label: 'Phone',
      value: '+1 (743) 500-2632',
    },
    {
      label: 'Location',
      value: '301 S McDowell Street, Suite 125-2272, Charlotte, NC 28204',
    },
    {
      label: 'Business Hours',
      value: 'Monday–Friday, 9:00 AM–6:00 PM ET',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Let’s Start the Conversation
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Whether you have a defined initiative or are still evaluating options, NsN Global is ready to understand your priorities and help identify the right path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Send Us a Message
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                We typically respond within one business day.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  {contactDetails.map(({ label, value }) => (
                    <div key={label} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                        {label}
                      </div>
                      <div className="text-slate-800">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-8">
                <h3 className="font-semibold text-slate-900 mb-3">
                  How We Engage
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We work with organizations across cloud architecture, data engineering, DevOps, observability, and enterprise integration. Early conversations are focused on understanding your environment, priorities, and constraints.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {['Cloud', 'Data', 'DevOps', 'Observability', 'Integrations'].map(
                    (s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1.5 bg-slate-100 rounded-full text-slate-600"
                      >
                        {s}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950 text-white p-8">
                <h3 className="font-semibold mb-3">
                  Prefer a Direct Conversation?
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Use the form to share a brief overview of your needs, and we will follow up to schedule an initial discussion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}