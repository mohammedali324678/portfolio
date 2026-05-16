import { Link, useLocation } from 'react-router-dom'
import { useTheme } from './ThemeContext'

function Navbar() {
  const location = useLocation()
  const { dark, toggleTheme } = useTheme()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition duration-500 ${dark ? 'bg-slate-950/90 border-slate-800 text-slate-100' : 'bg-white/90 border-slate-200 text-slate-900'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
          <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${dark ? 'border-slate-700 bg-slate-900 text-cyan-300' : 'border-slate-200 bg-slate-100 text-cyan-600'}`}>
            MA
          </span>
          <span className="hidden sm:inline-block">Mohammad Ali</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition ${location.pathname === item.path ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="mailto:mohammedali324678@gmail.com"
            className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition ${dark ? 'border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800' : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'}`}
          >
            Email
          </a>
          <button
            onClick={toggleTheme}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${dark ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800' : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'}`}
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
