"use client";

import { useState } from "react";

// app/page.tsx – Progressive Spatial homepage (light theme)

const LOGO_SRC = "/ps-logo.png";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Sectors", href: "#sectors" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
];

const services = [
  {
    title: "Civil Construction Setout",
    description:
      "High-accuracy setout for roads, bridges, drainage and subdivisions that keeps crews on line, level and program.",
  },
  {
    title: "Bulk Earthworks & Volumes",
    description:
      "Design and as-built surfaces, volume calculations and progress reporting for earthworks and platforms.",
  },
  {
    title: "Structures & Precast",
    description:
      "Survey control and setout for bridges, retaining structures, culverts, pavements and complex geometry.",
  },
  {
    title: "Machine Control Support",
    description:
      "Model builds, data management and validation for GPS/UTS machine control fleets.",
  },
  {
    title: "As-Constructed & QA Surveys",
    description:
      "Compliance-ready as-constructed surveys, reports and deliverables for superintendents and asset owners.",
  },
  {
    title: "Monitoring & Verification",
    description:
      "Ongoing monitoring and verification surveys for critical assets, cut/fill and settlement.",
  },
  {
    title: "Quantity Breakdown for Bid Preperation",
    description:
      "Tailored Reporting and Breakdowns during the Tender Process.",
  },
];

const sectors = [
  {
    name: "Roads & Highways",
    body: "Greenfield and brownfield upgrades, interchanges and urban roadworks.",
  },
  {
    name: "Land Development",
    body: "Residential estates, industrial subdivisions and greenfield developments.",
  },
  {
    name: "Civil Infrastructure",
    body: "Bridges, rail, pipelines and critical public infrastructure.",
  },
  {
    name: "Resources & Industrial",
    body: "Mining, processing plants and associated non-process infrastructure.",
  },
];

const stats: { label: string; value: string }[] = [];

const projects = [
  {
    name: "CSBP - Sodium Cyanide Expansion",
    location: "Kwinana",
    scope: [
      "Perform Setout/As-construct surveys for Bulk earthworks to prepare site for future structural infrastructure",
      "High precision setout of new concrete support structures to support plant elements",
      "Capturing the installation of new and re-routing of existing various Underground Services",
      "Create site specific interactive GIS maps enabling real time awareness of existing underground services",
      "Provide and implement digital designs for Roads, stormwater drainage and temporary Crane Pads",
      "Establish a high end control network rigidly adjusted with least square",
    ],
    outcome:
      "Zero survey-related rework notices across the structures package.",
  },
  {
    name: "Barrow Island - JIC CUG Civil underground",
    location: "Barrow Island",
    scope: [
      "Perform Setout/As-constrcuted surveys to conform to above and beyond Industry Standard tolerances",
      "Provide rigorous Asbuilt/Prepour reports",
      "Capturing newly installed underground services",
      "Providing precise concrete volumes to no wastage in an environmentally sensitive environment ",
      "Create Models for and provide ongoing support for Trimble and Topcon Machine control systems ",
      "Establish and maintain a high quality survey control network"
    ],
    outcome: "High end deliverables and service, resulting in client satisfaction",
  },
];

const values = [
  {
    title: "Constructability-focused",
    description:
      "We think like contractors, not just surveyors – providing practical solutions that work on site.",
  },
  {
    title: "Technology-led accuracy",
    description:
      "Modern GNSS, total stations and robust control methodologies underpin every job.",
  },
  {
    title: "Safety & compliance",
    description:
      "Site-ready teams with strong HSEQ focus and documentation aligned to civil construction standards.",
  },
];

export default function ProgressiveSpatialHomepage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-emerald-800/10 via-emerald-700/5 to-transparent" />

      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
        <img
          src={LOGO_SRC}
          alt=""
          aria-hidden="true"
          className="w-[90vw] max-w-6xl object-contain opacity-[0.05] grayscale"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <Header />
        <main className="mt-8 space-y-24 sm:mt-16 sm:space-y-32">
          <Hero />
          <Stats />
          <Services />
          <Sectors />
          <Projects />
          <WhySection />
          <Careers />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 bg-white/80 backdrop-blur">
      <div className="flex items-center gap-3">
        {/* Logo block */}
        <div className="flex items-center gap-3">
<div className="w-56">
  <img
    src={LOGO_SRC}
    alt="Progressive Spatial logo"
    className="w-full h-auto object-contain"
  />
</div>
          <div>
            <p className="text-lg font-semibold tracking-[0.22em] text-slate-700">
              PROGRESSIVE SPATIAL
            </p>
            <p className="text-lg text-slate-500">
              Engineering Surveyors for Civil Construction
            </p>
          </div>
        </div>
      </div>

      <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transition hover:text-emerald-800"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full border border-emerald-800/70 bg-emerald-800/90 px-4 py-1.5 text-sm font-medium text-white shadow-sm shadow-emerald-800/30 transition hover:bg-emerald-700"
        >
          Request a quote
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grid gap-10 pt-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
    >
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
        </p>
        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Engineering surveyors
            <span className="block text-emerald-800">
              specialising in civil construction.
            </span>
          </h1>
          <p className="max-w-xl text-balance text-sm text-slate-700 sm:text-base">
            Progressive Spatial provides dedicated engineering survey support
            for civil contractors – from bulk earthworks and roads to bridges,
            structures and complex infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-800/30 transition hover:bg-emerald-700"
          >
            Request survey support
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-emerald-800 hover:text-emerald-800"
          >
            View services
          </a>
        </div>

        <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-600 sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-8 bg-gradient-to-r from-emerald-700 to-emerald-400" />
            <span>Dedicated to civil construction projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-8 bg-gradient-to-r from-slate-400 to-slate-600" />
            <span>Survey teams ready for site mobilisation</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div/>
        <div>
          <div>
            <span >
            </span>
          </div>

          <div >
            <div>
              <span>
              </span>
            </div>

            <div>
              <div>
              </div>
              <div>
                <div>
                  {Array.from({ length: 14 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-full rounded-full bg-emerald-700/80"
                      style={{ height: `${20 + (idx % 5) * 12}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <dl>
              <div>
                <dd>
                </dd>
                <p>
                </p>
              </div>
              <div>
                <dd>

                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section>
      <div className="grid gap-6 text-center sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              {stat.value}
            </p>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="space-y-6 pt-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Services built for civil construction
          </h2>
          <p className="max-w-xl text-sm text-slate-700">
            Progressive Spatial delivers end-to-end engineering survey support
            across every stage of your civil project – from early works to
            handover.
          </p>
        </div>
        <a
          href="#contact"
          className="text-xs font-medium text-emerald-800 underline-offset-4 hover:underline"
        >
          Talk to us about your next project
        </a>
      </div>

      <div className="grid gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/80 transition hover:-translate-y-0.5 hover:border-emerald-700/70 hover:shadow-emerald-100"
          >
            <h3 className="mb-2 text-sm font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mb-3 text-xs text-slate-700">
              {service.description}
            </p>
            <span className="mt-auto inline-flex items-center text-[11px] font-medium text-emerald-800">
              
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sectors() {
  return (
    <section id="sectors" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Focused on civil & infrastructure sectors
          </h2>
          <p className="max-w-xl text-sm text-slate-700">
            We support contractors across a range of sectors where accuracy,
            safety and program certainty are critical.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {sectors.map((sector) => (
          <div
            key={sector.name}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800"
          >
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                {sector.name}
              </h3>
              <p className="text-xs text-slate-700">{sector.body}</p>
            </div>
            <div className="mt-4 h-px w-10 bg-gradient-to-r from-emerald-700 to-slate-400" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Selected project experience
          </h2>
          <p className="max-w-xl text-sm text-slate-700">
            A snapshot of the types of projects we support. Specific project
            lists and references are available on request.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 justify-center">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800"
          >
            <div className="mb-2 flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-900">
                {project.name}
              </h3>
              <p className="text-[11px] text-slate-500">{project.location}</p>
            </div>
            <ul className="mb-2 list-disc pl-5 text-xs text-slate-700 space-y-1">
  {project.scope.map((item, idx) => (
    <li key={idx}>{item}</li>
  ))}
</ul>
            <p className="mt-auto text-xs text-emerald-800">
              Outcome: {project.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  const [showDirectors, setShowDirectors] = useState(false);

  return (
    <>
      <section
        id="about"
        className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Why Progressive Spatial
          </h2>

          <p className="max-w-xl text-sm text-slate-700">
            We exist to make civil construction more predictable. That means
            reliable survey teams, clear communication and deliverables that match
            how your project actually runs.
          </p>

          <button
            type="button"
            onClick={() => setShowDirectors(true)}
            className="inline-flex items-center justify-center rounded-full border border-emerald-800 bg-white px-5 py-2 text-sm font-medium text-emerald-800 shadow-sm transition hover:bg-emerald-50"
          >
            Who are we?
          </button>

          <dl className="space-y-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <dt className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  {value.title}
                </dt>
                <dd className="text-xs text-slate-700">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

      </section>

      {showDirectors && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 px-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  Who are we?
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-900">
                  Meet the Team behind Progressive Spatial
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowDirectors(false)}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-lg font-semibold text-slate-900">
                  Lachlan Damhuis
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Lachlan is a highly experienced construction surveyor with over 15 years in the industry, delivering survey services across civil infrastructure, transport, airport, subdivision and resource sector projects throughout Western Australia. He has operated both independently as a sole surveyor and as part of large multidisciplinary construction teams. Lachlan brings strong expertise in construction set-out, survey control establishment, machine control systems, and high-accuracy as-built surveys that underpin successful civil project delivery. 
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-lg font-semibold text-slate-900">
                  Cameron Gardiner
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Cameron is a graduate of South West Regional TAFE and brings over 17 years of experience across the construction industry. He has delivered and managed complex infrastructure projects throughout Western Australia, developing a broad skill set ranging from day-to-day survey operations to advanced volume calculations and end-of-month reporting. Cameron brings strong leadership and practical expertise to every project, ensuring reliable outcomes and clear direction for project teams.
                </p>
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Careers() {
  return (
    <section id="careers" className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Careers with Progressive Spatial
          </h2>
          <p className="max-w-xl text-sm text-slate-700">
            We&apos;re always interested in experienced engineering surveyors and
            motivated juniors who want to grow in civil construction.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-100 p-5">
        <div className="max-w-xl text-sm text-slate-800">
          <p className="font-medium text-slate-900">
            Surveyors who like being close to the work.
          </p>
          <p className="mt-1 text-xs text-slate-700">
            If you enjoy solving problems on site, working closely with civil
            crews and taking ownership of quality outcomes, we&apos;d like to hear
            from you.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-medium text-slate-900 transition hover:border-emerald-800 hover:text-emerald-800"
        >
          Send us your CV
        </a>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section
      id="contact"
      className="mt-4 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/80 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Ready to talk about your next project?
        </h2>
        <p className="max-w-xl text-sm text-slate-700">
          Tell us a bit about your civil works package and where you need
          survey support. We&apos;ll come back to you quickly with availability and
          next steps.
        </p>
        <ul className="space-y-1 text-xs text-slate-700">
          <li>• Road, subdivision or infrastructure project scope</li>
          <li>• Site location and program dates</li>
          <li>• Any specific deliverables or QA requirements</li>
        </ul>
      </div>

      <form className="space-y-3 text-sm">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs text-slate-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-emerald-700/30 placeholder:text-slate-400 focus:border-emerald-800 focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="company" className="text-xs text-slate-700">
              Company
            </label>
            <input
              id="company"
              name="company"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-emerald-700/30 placeholder:text-slate-400 focus:border-emerald-800 focus:ring-2"
              placeholder="Civil contractor / organisation"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-xs text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-emerald-700/30 placeholder:text-slate-400 focus:border-emerald-800 focus:ring-2"
            placeholder="name@company.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="project" className="text-xs text-slate-700">
            Project &amp; location
          </label>
          <input
            id="project"
            name="project"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-emerald-700/30 placeholder:text-slate-400 focus:border-emerald-800 focus:ring-2"
            placeholder="Project name and site location"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="message" className="text-xs text-slate-700">
            Scope / requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none ring-emerald-700/30 placeholder:text-slate-400 focus:border-emerald-800 focus:ring-2"
            placeholder="Tell us about the works, program and where you need survey support."
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-800/30 transition hover:bg-emerald-700"
          >
            Submit enquiry
          </button>
          <p className="text-[11px] text-slate-500">
            Prefer to talk directly? Add your mobile and we&apos;ll call you.
          </p>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 pt-6 text-xs text-slate-500">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Progressive Spatial. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <p>Engineering Surveyors · Civil Construction</p>
        </div>
        <div className="mt-4 space-y-2 text-[11px] text-slate-500">
  <p>
    Progressive Spatial acknowledges the Traditional Custodians of the land on which we work and pay our respects to Elders past and present. We recognise their continuing connection to land, waters and community.
  </p>
  <p className="flex flex-wrap items-center gap-2">
    We support diversity and inclusion across our workforce and industry.
  </p>
  <div className="flex items-center gap-3 pt-1">
  <img src="/aboriginal-flag.png" alt="Aboriginal flag" className="h-4" />
  <img src="/torres-strait-flag.png" alt="Torres Strait Islander flag" className="h-4" />
  <img src="/rainbow-flag.png" alt="LGBTQIA+ pride flag" className="h-4" />
</div>
</div>
      </div>
    </footer>
  );
}
