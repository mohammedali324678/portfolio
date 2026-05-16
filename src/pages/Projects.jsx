function ProjectsPage() {
  const projects = [
    {
      title: 'GitHub User Finder',
      description:
        'Built a React application that fetches live GitHub user data using the GitHub API. Users can search profiles and view information like followers, repositories, bio, and profile image.',
      features: ['Search GitHub users', 'API integration', 'Loading & error handling', 'Dynamic rendering', 'Responsive UI'],
      stack: ['React', 'JavaScript', 'Fetch API', 'Tailwind CSS'],
    },
    {
      title: 'Todo App',
      description:
        'Developed a modern Todo application with add, delete, toggle complete, and filter functionality using React state management.',
      features: ['Add & delete tasks', 'Mark tasks completed', 'Filter active/completed todos', 'Local state management', 'Keyboard support'],
      stack: ['React', 'useState', 'JavaScript', 'Tailwind CSS'],
    },
    {
      title: 'Portfolio Website',
      description:
        'Designed and deployed a personal portfolio website to showcase projects, skills, and development journey.',
      features: ['Multi-page React application', 'Dark/Light theme toggle', 'React Router navigation', 'Responsive design', 'Modern UI'],
      stack: ['React', 'Tailwind CSS', 'React Router', 'Context API', 'Vercel'],
    },
    {
      title: 'AI Study Helper',
      description:
        'AI-powered learning assistant that generates summaries and quiz questions using AI APIs.',
      features: ['AI-generated summaries', 'Quiz generation', 'Topic-based learning', 'API integration'],
      stack: ['React', 'Flask', 'Gemini API', 'PostgreSQL'],
      future: true,
    },
  ]

  return (
    <section className="bg-slate-950 px-6 py-24 text-white min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Projects</p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">Projects that demonstrate real growth.</h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A carefully selected collection of projects that highlight frontend craftsmanship, API integration, and full stack problem solving.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Talk about opportunities
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-cyan-300/30">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{project.future ? 'Upcoming' : 'Featured'}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
                </div>
                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  {project.future ? 'Future' : 'Live'}
                </span>
              </div>

              <p className="mt-6 text-slate-300 leading-7">{project.description}</p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <span key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
