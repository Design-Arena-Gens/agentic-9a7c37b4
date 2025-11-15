export default function Home() {
  const quickFacts = [
    { label: "Latest Release", value: "Next 15 Beta" },
    { label: "AI Patterns", value: "45+" },
    { label: "Community Recipes", value: "12k+" },
    { label: "Updated", value: "May 2025" },
  ];

  const knowledgeBase = [
    {
      title: "AI-Ready Architecture",
      description:
        "Learn how the App Router, Server Components, and streaming enable responsive AI interfaces out of the box.",
      items: ["Hybrid data fetching", "Edge runtime patterns", "Prompt caching"],
    },
    {
      title: "Model Integration",
      description:
        "Best practices for wiring OpenAI, Anthropic, and self-hosted models into Next actions while keeping UX fast.",
      items: ["Server Actions orchestration", "Realtime inference channels", "Background jobs"],
    },
    {
      title: "Responsible AI",
      description:
        "Framework for user trust, observability, and guardrails tailored to the Next.js rendering lifecycle.",
      items: ["User consent flows", "Red teaming playbooks", "Audit logging hooks"],
    },
  ];

  const releaseTimeline = [
    {
      version: "Next 15 Beta",
      date: "May 2025",
      highlights: [
        "Actions now execute on edge by default with streaming form responses.",
        "First-class Prompt Registry with cache invalidation hooks.",
      ],
    },
    {
      version: "Next 14.2",
      date: "Feb 2025",
      highlights: [
        "Partial prerendering reaches stable for AI-heavy dashboards.",
        "React Server Components profiling tools ship in DevTools.",
      ],
    },
    {
      version: "Next 14",
      date: "Oct 2024",
      highlights: [
        "Server Actions graduate from beta with typed form helpers.",
        "Metadata API gains generative page summaries for SEO.",
      ],
    },
    {
      version: "Next 13.4",
      date: "May 2023",
      highlights: [
        "App Router introduces streaming layouts, ideal for AI responses.",
        "Edge runtime gains experimental support for AI SDKs.",
      ],
    },
  ];

  const resourceLibrary = [
    {
      title: "Design Sprints for AI Interfaces",
      description:
        "Workshop kit for prototyping chat surfaces, agent copilots, and mixed-initiative flows in Next.js.",
      cta: "Download kit",
    },
    {
      title: "Production Monitoring Blueprint",
      description:
        "Telemetry, evaluation, and fallbacks reference architecture deployable on Vercel Observability.",
      cta: "View blueprint",
    },
    {
      title: "Prompt Engineering Cookbook",
      description:
        "Curated prompt modules for search QA, summarization, and narrative generation tuned for Server Actions.",
      cta: "Explore recipes",
    },
    {
      title: "Edge Inference Starter",
      description:
        "Template for shipping quantized models alongside Next middleware with dynamic throttling.",
      cta: "Clone repo",
    },
  ];

  const navigation = [
    "Overview",
    "Foundations",
    "Releases",
    "Blueprints",
    "Community",
    "Changelog",
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-[-20rem] h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-20rem] top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute -bottom-20 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <header
        id="overview"
        className="relative z-10 border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950/40"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:py-16">
          <nav className="flex flex-wrap items-center justify-between gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg font-semibold text-white shadow-lg shadow-cyan-500/20">
                AI
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-200/80">
                  Next.js Knowledge Base
                </p>
                <p className="text-sm text-slate-200">Next AI Wiki</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.2em] text-slate-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/40 hover:bg-white/10">
                Subscribe
              </button>
              <button className="rounded-full bg-cyan-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-300">
                Start Guide
              </button>
            </div>
          </nav>

          <div className="grid items-end gap-12 md:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-8">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                Overview
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Designing adaptive AI experiences with Next.js
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                The Next AI Wiki curates the patterns, primitives, and production insights
                teams use to ship conversational apps, copilots, and intelligence dashboards
                that feel instantly responsive. Explore reference architectures, learn how to
                compose Server Actions with model orchestration, and bring intents to life with
                resilient UX.
              </p>
              <div className="flex flex-col gap-3 text-sm text-slate-300 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/60" />
                  <span>Live documentation stream</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px] shadow-cyan-400/60" />
                  <span>Vercel + community maintained</span>
                </div>
              </div>
            </div>

            <aside className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
                Quick Facts
              </p>
              <div className="grid gap-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {fact.label}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-xs text-slate-300">
                <p className="font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                  Beam Drop
                </p>
                <p className="mt-2 leading-relaxed">
                  Weekly summary with rollout notes, sample prompts, and component kits ready
                  to copy into your workspace.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 md:py-24">
        <section id="foundations" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                Foundations
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Build the backbone of intelligence-first products
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Each pillar distills the latest lessons from teams pushing Next.js to the edge of
              what AI interfaces can be. Start with architecture, layer in orchestration, then
              expand your surface responsibly.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {knowledgeBase.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 opacity-0 transition group-hover:opacity-100" />
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="text-sm text-slate-300">{pillar.description}</p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="releases" className="space-y-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                Releases
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Evolution of the Next.js AI toolkit
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Follow the changelog to align your roadmap with new platform primitives. Every
              release entry documents what it unlocks for assistants, copilots, and knowledge
              retrieval experiences.
            </p>
          </div>

          <div className="relative flex flex-col gap-10 before:absolute before:left-[10px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/0 before:via-cyan-400/40 before:to-cyan-400/0 before:content-[''] md:before:left-[13px]">
            {releaseTimeline.map((release, index) => (
              <article
                key={release.version}
                className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 pl-12 md:pl-16"
              >
                <span className="absolute left-0 top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-white/50 bg-cyan-400 shadow-[0_0_12px] shadow-cyan-500/50" />
                <div className="flex flex-col gap-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span>{release.date}</span>
                  <span className="text-white">{release.version}</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {release.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {index === 0 && (
                  <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200">
                    Featured release
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="blueprints" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
                Blueprints
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Drop-in recipes for AI-first shipping
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              Adaptable kits covering research, implementation, and operations. Pair them with
              Vercel workflows to keep velocity high without sacrificing reliability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resourceLibrary.map((resource) => (
              <article
                key={resource.title}
                className="group flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">
                    Template
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-300">{resource.description}</p>
                </div>
                <button className="self-start rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition group-hover:border-white/40 group-hover:bg-white/10">
                  {resource.cta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section
          id="community"
          className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/20 to-slate-900/60 p-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
              Community Pulse
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Tap into the builders shaping multimodal Next.js
            </h2>
            <p className="text-sm text-slate-300">
              Join weekly office hours, share experiments, and get paired with reviewers who
              have shipped production agents. Contributors publish teardown notes on latency,
              prompting, and evaluation design.
            </p>
            <div className="grid gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                <span>1,200+ active members in the #next-ai channel</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                <span>Bi-weekly demo day featuring emerging AI UX</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-400" />
                <span>Mentored onboarding for open-source contributors</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-slate-200">
                Join Discord
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 hover:bg-white/10">
                Submit Insight
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/60">
              Field Notes
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                  Latency win
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Streaming tokens first, UI panels second cut perceived wait time by 37%.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-200">
                  UX pattern
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Use progressive disclosure to introduce agent capabilities and set expectations.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                  Ops insight
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Pair offline evaluation suites with Server Action retries to stabilize rollouts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="changelog"
        className="relative z-10 border-t border-white/10 bg-slate-950/80 px-6 py-12"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200/80">
              Changelog
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Subscribe for weekly AI shipping notes
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              We send distilled updates covering new RFCs, component kits, and field reports
              from teams serving millions of AI requests through Next.js.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 md:flex-row">
            <input
              type="email"
              placeholder="you@studio.dev"
              className="h-11 flex-1 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-cyan-400 px-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-cyan-300"
            >
              Join
            </button>
          </form>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-start gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Next AI Wiki. Maintained by the Next.js community.</span>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-slate-300">
              Governance
            </a>
            <a href="#" className="transition hover:text-slate-300">
              Contribution Guide
            </a>
            <a href="#" className="transition hover:text-slate-300">
              RSS Feed
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
