const services = [
  {
    title: "UI/UX Design",
    icon: "🎨",
    description:
      "Intuitive interfaces and flows that feel natural across web and mobile products.",
  },
  {
    title: "Web Development",
    icon: "💻",
    description:
      "Fast, accessible, SEO-friendly websites built with modern frontend stacks.",
  },
  {
    title: "Branding",
    icon: "✨",
    description:
      "Visual identities, design systems, and tone-of-voice that align your product and story.",
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    description:
      "Landing pages, campaigns, and analytics that turn attention into measurable growth.",
  },
  {
    title: "Design Systems",
    icon: "📐",
    description:
      "Reusable component libraries, tokens, and documentation that keep teams shipping consistently at scale.",
  },
  {
    title: "Product Strategy",
    icon: "🧭",
    description:
      "Workshops, discovery, and UX audits that clarify what to build next and how to measure success.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-950">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-300">
              Services
            </p>
            <h2 className="heading-md mt-2">What we can do for you</h2>
          </div>
          <div className="max-w-md space-y-2 text-sm text-slate-300">
            <p>
              From first sketch to final production build, we partner with your
              team to ship polished experiences on time.
            </p>
            <p>
              Whether you&apos;re refreshing an existing product or launching a
              new brand, we plug into your roadmap as an extension of your team.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="card group transition hover:-translate-y-1 hover:border-brand-500/80 hover:bg-white/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/15 text-lg">
                  <span>{service.icon}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-50">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

