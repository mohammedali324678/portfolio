function ContactPage() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 text-white min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Let's create something worth sharing.</h2>
          <p className="mt-6 text-slate-400 leading-8">
            I am open to internships, collaborations, project ideas, and developer opportunities where I can learn fast and contribute seriously.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <a href="mailto:mohammedali324678@gmail.com" className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-left transition hover:border-cyan-300/50">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email</p>
              <p className="mt-3 text-lg font-semibold text-white">mohammedali324678@gmail.com</p>
            </a>
            <a href="https://github.com/mohammedali324678" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-left transition hover:border-cyan-300/50">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">GitHub</p>
              <p className="mt-3 text-lg font-semibold text-white">/mohammedali324678</p>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-ali-01a753319/?skipRedirect=true" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-left transition hover:border-cyan-300/50">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">LinkedIn</p>
              <p className="mt-3 text-lg font-semibold text-white">Mohammad Ali</p>
            </a>
          </div>

          <div className="mt-12 rounded-[2rem] border border-cyan-500/10 bg-cyan-500/5 p-8 text-slate-200">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">What I focus on</p>
            <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
              {[
                'React',
                'Tailwind CSS',
                'Flask',
                'PostgreSQL',
                'SQL',
                'API Integration',
                'GitHub',
                'DSA journey',
              ].map((item) => (
                <li key={item} className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
