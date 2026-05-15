const highlights = [
  { value: "10+", label: "Practice projects" },
  { value: "3+", label: "Core tech areas" },
  { value: "100%", label: "Learning mindset" },
]

function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            About
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            A developer in progress, building with intention.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I am a Computer Engineering student at RCOEM Nagpur with a strong
            interest in full stack development and AI-powered products. I like
            taking ideas from rough concepts to working interfaces, then
            improving them through better code, better design, and better
            problem solving.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            My current focus is React, backend APIs, database-driven features,
            and machine learning fundamentals. I care about clean user
            experiences, readable code, and building projects that can be
            explained clearly.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-md bg-slate-900 p-5">
                <p className="text-3xl font-black text-cyan-300">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-md bg-slate-900 p-6">
            <h3 className="text-xl font-bold text-white">What I bring</h3>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>Clear thinking from problem to implementation.</li>
              <li>Frontend attention to layout, spacing, and responsiveness.</li>
              <li>Curiosity for AI, automation, and practical software ideas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
