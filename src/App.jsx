import About from "./about.jsx"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const projects = [
  {
    title: "AI Study Companion",
    description:
      "A smart learning assistant concept that summarizes notes, creates quizzes, and helps students revise faster.",
    stack: ["React", "Python", "AI"],
  },
  {
    title: "Full Stack Task Manager",
    description:
      "A productivity app with authentication, task boards, filtering, and a clean dashboard experience.",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built to present skills, projects, and contact information with polish.",
    stack: ["React", "Tailwind CSS", "Vite"],
  },
]

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "AI & Tools",
    items: ["Python", "Machine Learning", "Git", "Vite"],
  },
]

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-white">
          Mohammad Ali
        </a>

        <div className="hidden items-center gap-1 rounded-md border border-white/10 bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-32 text-white md:pt-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(244,114,182,0.14),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Full Stack Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Building clean digital products with code, curiosity, and focus.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I am Mohammad Ali, a Computer Engineering student at RCOEM Nagpur.
            I build responsive web apps, full stack projects, and AI-powered
            tools that solve real problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-white/10 bg-white/8 p-5 shadow-2xl shadow-cyan-950/50 backdrop-blur">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-4 font-mono text-sm text-slate-300">
              <p>
                <span className="text-pink-300">const</span>{" "}
                <span className="text-cyan-300">developer</span> = {"{"}
              </p>
              <p className="pl-5">
                name: <span className="text-emerald-300">"Mohammad Ali"</span>,
              </p>
              <p className="pl-5">
                focus: <span className="text-emerald-300">"Full Stack"</span>,
              </p>
              <p className="pl-5">
                stack:{" "}
                <span className="text-emerald-300">
                  ["React", "Node", "AI"]
                </span>
                ,
              </p>
              <p className="pl-5">
                mindset:{" "}
                <span className="text-emerald-300">"Build. Learn. Repeat."</span>
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {["React", "APIs", "AI"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/10 bg-white/5 p-4 text-center text-sm font-bold text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Tools I use to build fast, responsive applications.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-800 px-3 py-2 text-sm text-slate-200"
                  >
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

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Work that shows how I think and build.
            </h2>
          </div>
          <a
            href="#contact"
            className="w-fit rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Let&apos;s Build Together
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.07]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-md bg-cyan-400 text-lg font-black text-slate-950">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    {item}
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

function Experience() {
  return (
    <section className="bg-slate-900 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Journey
          </p>
          <h2 className="mt-3 text-4xl font-bold">What I am focused on now.</h2>
        </div>

        <div className="space-y-5">
          {[
            "Strengthening data structures, algorithms, and core computer engineering fundamentals.",
            "Building full stack applications with clean UI, API integration, and database-backed features.",
            "Exploring AI and machine learning projects that are practical, understandable, and useful.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Contact
        </p>
        <h2 className="mt-3 text-4xl font-black md:text-6xl">
          Let&apos;s create something worth sharing.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I am open to internships, collaborations, project ideas, and developer
          opportunities where I can learn fast and contribute seriously.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your.email@example.com"
            className="rounded-md bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
