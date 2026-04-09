import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'NsN Global — Enterprise IT Consulting' },
      {
        name: 'description',
        content:
          'NsN Global provides enterprise IT consulting across cloud architecture, data engineering, DevOps, observability, and integrations.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <Header />
        <main>
          <Outlet />
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/industries', label: 'Industries' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-slate-900 text-lg tracking-tight">
              NsN <span className="text-blue-700">Global</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors [&.active]:text-slate-900 [&.active]:font-semibold"
                activeOptions={to === '/' ? { exact: true } : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Contact Us
          </Link>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  )
}

function MobileMenu({
  navItems,
}: {
  navItems: { to: string; label: string }[]
}) {
  return (
    <div className="md:hidden relative">
      <details className="group">
        <summary className="list-none cursor-pointer p-2 text-slate-600 hover:text-slate-900">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>

        <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-xl shadow-lg px-4 py-4 flex flex-col gap-3 z-50">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 py-1"
            >
              {label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">
                NsN <span className="text-blue-400">Global</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Enterprise IT consulting focused on cloud, data, DevOps, observability, and integration.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                'Cloud Architecture',
                'Data Engineering',
                'DevOps & Automation',
                'Observability',
                'API & Integrations',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', to: '/about' },
                { label: 'Industries', to: '/industries' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>support@nsnglobalinc.com</li>
              <li>+1 (743) 500-2632</li>
              <li>Charlotte, North Carolina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} NsN Global. All rights reserved.
        </div>
      </div>
    </footer>
  )
}