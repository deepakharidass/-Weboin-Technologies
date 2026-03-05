"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="section-container grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-300">
            Design Agency
          </p>
          <h1 className="heading-xl">
            We craft digital brands
            <span className="block bg-gradient-to-r from-brand-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              that people remember.
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            Pixelcraft Studio partners with ambitious teams to design product
            experiences, marketing sites, and brands that feel as good as they
            look.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="btn-primary">
              View our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm text-slate-200 underline-offset-4 hover:underline"
            >
              Get a project quote
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-8 text-xs text-slate-400">
            <div>
              <p className="font-semibold text-slate-100">40+</p>
              <p>brands launched</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">120%</p>
              <p>avg conversion uplift</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">4.9/5</p>
              <p>client satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-80">
          <div className="card absolute inset-0 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-[11px] font-medium text-green-300">
                Live case study
              </span>
              <span className="text-[11px] text-slate-400">
                Revamp in Figma
              </span>
            </div>

            <div className="relative mt-4 h-32 w-full overflow-hidden rounded-2xl border border-white/5 bg-slate-900/70">
              <Image
                src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                alt="Design dashboard preview"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
              <div>
                <p className="font-medium">SaaS marketing website</p>
                <p className="text-slate-400">Conversion-focused UX</p>
              </div>
              <span className="rounded-full bg-brand-500/20 px-3 py-1 text-[11px] text-brand-200">
                +38% signups
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

