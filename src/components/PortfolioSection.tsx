import Image from "next/image";

const projects = [
  {
    title: "Aurora Finance — Product dashboard",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
  {
    title: "Northwind Commerce — E‑commerce experience",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  },
  {
    title: "Voyager — Travel storytelling site",
    image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg",
  },
  {
    title: "Shift — Logistics operations platform",
    image:
      "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg",
  },
  {
    title: "Halo Health — Telemedicine web app",
    image:
      "https://images.pexels.com/photos/7578807/pexels-photo-7578807.jpeg",
  },
  {
    title: "Lumen — Creative studio landing page",
    image:
      "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="border-y border-white/5 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-300">
              Portfolio
            </p>
            <h2 className="heading-md mt-2">Selected projects</h2>
          </div>
          <div className="max-w-md space-y-2 text-sm text-slate-300">
            <p>
              A snapshot of recent collaborations across fintech, SaaS,
              e‑commerce, healthcare, and creative brands.
            </p>
            <p>
              Each project blends clear storytelling with conversion-focused UX,
              tailored to the client&apos;s goals.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl shadow-black/40"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 opacity-0 transition group-hover:opacity-100">
                  View case study →
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

