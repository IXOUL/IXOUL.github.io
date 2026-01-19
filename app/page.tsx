import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Food @ Princeton",
      role: "Full-stack",
      description:
        "Data Story of 80 meals over 36 days during my first semester at Princeton",
      stack: ["Next.js", "Supabase", "Mapbox"],
      image: "/projects/food-princeton.png",
      href: "https://food-princeton.vercel.app/",
    },
    {
      title: "Stock Manager",
      role: "Data + Frontend",
      description:
        "Automated inventory redistribution with proactive replenishment alerts.",
      stack: ["Python", "FastAPI", "Postgres"],
      image: "/projects/stock-manager.png",
      href: "https://stock-allocator.vercel.app/",
    },
    {
      title: "Currency Flow",
      role: "Frontend",
      description:
        "An interactive map for coins across 3000 years on the Silk Road",
      stack: ["React", "WebRTC", "Socket.io"],
      image: "/projects/currency-flow.png",
      href: "https://currency-flow-iota.vercel.app/",
    },

    {
      title: "In(Expressible)",
      role: "Frontend",
      description:
        "A linguistic game aims to engage players in decoding new languages to investigate the demise of a lost civilization",
      stack: ["React", "WebRTC", "Socket.io"],
      image: "/projects/in-expressible.png",
      href: "https://in-expressible.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 pb-20 pt-16 text-center sm:px-10">
        <nav className="flex flex-wrap items-center justify-center gap-6 text-base">
          <a className="rounded-sm bg-blue-600 px-2 py-1 text-white" href="#home">
            Home
          </a>
          <a className="text-blue-600 hover:underline" href="#about">
            About
          </a>
          <a className="text-blue-600 hover:underline" href="#projects">
            Project
          </a>
          <a className="text-blue-600 hover:underline" href="#contact">
            Contact
          </a>
        </nav>

        <header id="home" className="mt-30 flex flex-col items-center gap-6">
          <h1
            className="text-6xl font-bold"
            style={{ fontFamily: '"Momo Signature", cursive' }}
          >
            Lucille Wang
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-700">
            I build clean, human-centered interfaces and love turning ideas into
            working products.
          </p>
        </header>


        <section id="about" className="mt-30 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">About</h2>
          <div className="space-y-2 text-lg text-slate-700">
            <p>Hi, I’m Lucille, a freshman at Princeton University studying Computer Science (B.S.E.).</p>
          </div>
        </section>

        <section id="projects" className="mt-30 flex w-full flex-col gap-6">
          <h2 className="text-3xl font-bold">Project</h2>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white text-left shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.12)]"
              >
                <div className="relative overflow-hidden rounded-t-[24px] bg-slate-100">
                  <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose-300" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300" />
                    <span className="ml-2 text-sm font-semibold text-slate-800">
                      {project.href.replace(/^https?:\/\//, "")}
                    </span>
                  </div>
                  <div className="relative aspect-[16/9] w-full bg-white">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 px-4 py-5 text-center">
                  <p className="text-2xl font-bold italic text-slate-900">
                    {project.title}
                  </p>
                  <p className="text-base text-slate-600">
                    {project.description}
                  </p>
                  <span className="text-sm font-medium text-blue-600">
                    View Project →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-30 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg text-blue-600">
            <a className="hover:underline" href="mailto:lw8858@princeton.edu">
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m4 8 8 5 8-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a className="hover:underline" href="https://github.com/IXOUL">
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.486 2 12.02c0 4.432 2.865 8.19 6.839 9.518.5.094.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.342-3.369-1.342-.455-1.16-1.11-1.468-1.11-1.468-.907-.62.069-.608.069-.608 1.003.07 1.53 1.036 1.53 1.036.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.026A9.53 9.53 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.026 2.748-1.026.545 1.379.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.482C19.138 20.207 22 16.452 22 12.02 22 6.486 17.523 2 12 2Z" />
                </svg>
              </span>
            </a>
            <a
              className="hover:underline"
              href="www.linkedin.com/in/lucille-wang-766657345"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98ZM9.75 8.98h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21h-3.96v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9.75V8.98Z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
