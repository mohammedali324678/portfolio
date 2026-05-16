const highlights = [
  { value: '3 Projects', label: 'Built with React + Tailwind' },
  { value: '2027', label: 'B.Tech Computer Engineering' },
  { value: 'API Focus', label: 'Flask, PostgreSQL, Gemini API' },
]

function AboutPage() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_0.65fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">About</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">A student building modern web products.</h2>
            <div className="mt-8 space-y-6 text-slate-300">
              <p>
                I am a Computer Engineering student at RCOEM Nagpur currently focused on becoming a strong full stack developer. I started learning development from scratch and have been consistently building projects using React, JavaScript, Tailwind CSS, Flask, PostgreSQL, and modern frontend technologies.
              </p>
              <p>
                I enjoy building clean user interfaces, integrating APIs, and solving practical problems with software. Alongside frontend development, I am also exploring backend systems, databases, AI integration, and scalable application development.
              </p>
              <p>
                Currently, I am improving my DSA skills, React ecosystem knowledge, backend development, and project building consistency. My goal is to become a Software Development Engineer and contribute to impactful products.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200">
                  <p className="text-3xl font-black text-cyan-300">{item.value}</p>
                  <p className="mt-3 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Education</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Ramdeobaba University (RCOEM), Nagpur</h3>
                <p className="mt-2 text-slate-400">Bachelor of Technology in Computer Engineering — Expected graduation 2027</p>
              </div>

              <div className="rounded-3xl bg-slate-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focus areas</p>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Web Development</li>
                  <li>• Database Management Systems</li>
                  <li>• Operating Systems</li>
                  <li>• Software Engineering</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Skill level labels</p>
                <div className="mt-4 space-y-2 text-slate-200 text-sm">
                  <p>React.js — Comfortable</p>
                  <p>PostgreSQL — Learning</p>
                  <p>Flask — Familiar</p>
                  <p>AI Integration — Exploring</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
