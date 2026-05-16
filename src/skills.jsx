const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'React Router', 'Context API'],
  },
  {
    title: 'Backend',
    items: ['Python', 'Flask', 'Django', 'REST APIs', 'Node.js', 'Express.js'],
  },
  {
    title: 'Databases',
    items: ['SQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & AI',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Postman', 'npm', 'AI Integration', 'Gemini API', 'Fetch API'],
  },
]

function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Skills</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Built for modern web development.</h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A concise skillset focused on React, backend fundamentals, database integration, APIs, deployment, and a learning-first mindset.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
