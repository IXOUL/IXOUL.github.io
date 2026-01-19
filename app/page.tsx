import Image from "next/image";

export default function Home() {
  const hobbyCards = [
    {
      title: "Photography",
      image: "/about/photography.jpeg",
    },
    {
      title: "Theater",
      image: "/about/theater.jpg",
    },
    {
      title: "Doggie",
      image: "/about/dog.jpg",
    },
    {
      title: "Anime + Blog",
      image: "/about/acgn.png",
    },
  ];

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
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center px-8 pb-24 pt-20 text-center sm:px-16">
        <nav className="flex flex-wrap items-center justify-center gap-6 text-base">
          <a className="rounded-sm bg-blue-600 px-2 py-1 text-white" href="#home">
            Home
          </a>
          <a className="text-blue-600 hover:underline" href="#projects">
            Project
          </a>
          <a className="text-blue-600 hover:underline" href="#about">
            About
          </a>
          <a className="text-blue-600 hover:underline" href="#contact">
            Contact
          </a>
        </nav>

        <header id="home" className="mt-32 flex flex-col items-center gap-8">
          <h1
            className="text-[5.5rem] font-bold"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            Lucille Wang
          </h1>
          <p className="max-w-3xl text-lg leading-loose text-slate-700">
            Hi! I'm Lucille, a first-year Computer Science student (B.S.E) at Princeton University. Driven by curiosity, I build human-centered interfaces and enjoy turning ideas and thoughts into fun products. 
            I am broadly interested in multimodal generation and am currently exploring machine learning through research.
          </p>
        </header>


        <section id="projects" className="mt-30 flex w-full max-w-3xl flex-col gap-6">
          <h2
            className="text-6xl font-bold"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            Project
          </h2>
          <p className="text-lg text-slate-600">I build...</p>
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
                    <span className="ml-2 text-xs font-semibold text-slate-800">
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

        <section id="about" className="mt-30 flex flex-col gap-6">
          <h2
            className="text-6xl font-bold"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            About
          </h2>
          <p className="text-lg text-slate-600">I like...</p>
          <div className="grid w-full max-w-4xl gap-8 place-items-center sm:grid-cols-2">
            {hobbyCards.map((card, index) => (
              <div
                key={card.title}
                className="h-[380px] w-[260px] transition hover:-translate-y-1"
                style={{
                  transform: `rotate(${[-4, 2, -1, 3][index % 4]}deg)`,
                }}
              >
                <div className="relative h-full rounded-[18px] border border-slate-200 bg-white px-4 pb-8 pt-4 shadow-[0_18px_30px_rgba(15,23,42,0.12)]">
                  <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-amber-100/70 shadow-sm" />
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-slate-100">
                    <Image
                      src={card.image}
                      alt={`${card.title} snapshot`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p
                      className="text-2xl tracking-[0.04em] text-slate-800"
                      style={{ fontFamily: '"Caveat Brush", cursive' }}
                    >
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex w-full max-w-4xl flex-col items-center gap-2 text-slate-600">
            <p className="text-lg font-semibold text-slate-800">
              Other hobbies
            </p>
            <p className="text-lg">
              Chinese calligraphy, equestrian, gym, dancing, eating & exploring...
            </p>
          </div>
        </section>

        <section id="contact" className="mt-30 flex flex-col gap-4">
          <h2
            className="text-6xl font-bold"
            style={{ fontFamily: '"Caveat Brush", cursive' }}
          >
            Contact
          </h2>
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

        <footer className="mt-30 text-sm text-slate-400">
          © 2026 Lucille Wang. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
