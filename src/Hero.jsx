import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'

function Hero() {
    const { dark } = useTheme()

    return (
        <section className={`relative overflow-hidden px-6 pb-24 pt-28 ${dark ? 'bg-slate-950 text-slate-100' : 'bg-gradient-to-b from-cyan-50 via-white to-slate-100 text-slate-900'}`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_20%)]" />
            <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.18),_transparent_45%)]" />
            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 shadow-sm shadow-cyan-200/20 dark:border-slate-700 dark:text-cyan-300 dark:shadow-slate-900/20">
                        Full Stack Developer
                    </span>

                    <h1 className={`mt-8 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl ${dark ? 'text-white' : 'text-slate-950'}`}>
                        Mohammad Ali
                    </h1>

                    <p className={`mt-6 max-w-3xl text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Computer Engineering student at RCOEM Nagpur passionate about building full stack web applications, AI-powered tools, and solving real-world problems through code.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link to="/projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                            View Projects
                        </Link>
                        <Link to="/contact" className={`inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-semibold transition ${dark ? 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-600 hover:bg-slate-800' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50'}`}>
                            Contact Me
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { label: 'Projects', value: '3 solid builds' },
                            { label: 'Stack', value: 'React / Flask / Tailwind' },
                            { label: 'Deployment', value: 'Vercel & GitHub' },
                            { label: 'Focus', value: 'DSA + API Integration' },
                        ].map((item) => (
                            <div key={item.label} className={`rounded-3xl border p-5 shadow-sm transition ${dark ? 'border-slate-800 bg-slate-900/80 text-slate-200 shadow-slate-950/30' : 'border-slate-200 bg-white text-slate-900 shadow-slate-200/50'}`}>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                                <p className="mt-3 text-lg font-semibold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex-1 rounded-[2rem] border p-6 shadow-2xl shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/80 lg:p-10">
                    <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl" />
                    <div className="absolute -right-10 bottom-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
                    <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-8 text-slate-100 shadow-2xl shadow-slate-950/20">
                        <div className="mb-8 flex items-center justify-between rounded-3xl bg-slate-900/90 p-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Profile</p>
                                <p className="mt-2 text-sm text-slate-300">Mohammad Ali • Full Stack Developer</p>
                            </div>
                            <span className="rounded-2xl bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">RCOEM</span>
                        </div>

                        <div className="space-y-4 text-sm leading-7 text-slate-300">
                            <p>Building modern web applications with React, Tailwind CSS, Flask, and PostgreSQL.</p>
                            <p>Focused on API-driven interfaces, clean frontend UX, and practical backend systems.</p>
                            <p>Current goal: secure an internship or entry-level SDE role by shipping real products.</p>
                        </div>

                        <div className="mt-8 grid gap-3 rounded-3xl bg-slate-900/95 p-5 text-slate-200">
                            {['React.js', 'Tailwind CSS', 'Flask', 'PostgreSQL', 'API Integration', 'DSA journey'].map((tag) => (
                                <span key={tag} className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero