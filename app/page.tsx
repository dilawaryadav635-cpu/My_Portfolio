import Image from "next/image";

const stats = [
  ["5+", "years across product, business analysis, and execution"],
  ["6", "enterprise platforms transformed across lending, supply chain, and workflow operations"],
  ["$25-30M", "estimated annual value unlocked across product-led transformation initiatives"],
  ["5,000+", "users and FTE-equivalent impact enabled through automation and platform adoption"],
] as const;

const socials = [
  { label: "Email", href: "mailto:dilawaryadav635@gmail.com", icon: <MailIcon className="h-4 w-4" /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/dilawar-singh-yadav", icon: <LinkedInIcon className="h-4 w-4" /> },
  { label: "Phone", href: "tel:+917358538945", icon: <PhoneIcon className="h-4 w-4" /> },
] as const;

const spotlightSections = [
  {
    eyebrow: "Spotlight - JPMorgan Chase - 2024-2025",
    title: "Covenant Monitoring Automation",
    subtitle: "",
    description:
      "A document-spreading workflow redesigned from fragmented borrower intake and manual financial extraction into an AI-assisted case-management flow that accelerated processing, improved controls, and removed major operational bottlenecks.",
    beats: [
      {
        n: "1",
        tone: "blue" as const,
        title: "The real problem",
        body:
          "Borrower financial documents were coming in through multiple ingestion channels including CODA at origination, DDE for servicing submissions, and email or fax requests triggered through CAMP. Operations teams then had to manually review different file types, apply rules, and spread the financial data in iSpresso, making the process slow, labor-intensive, and difficult to scale.",
      },
      {
        n: "2",
        tone: "amber" as const,
        title: "What I changed",
        body:
          "We automated the intake flow across the upstream channels and connected them into Aurora, our cloud-based task creation system. As soon as a document arrived, Aurora created a case automatically, triggered the AI LLM service, and generated a side-by-side experience where the source document sat on one side and extracted data fields appeared on the other. Within minutes, the case moved from newly created to processed and was routed directly into iSpresso for QC, removing the earlier manual throughput.",
      },
      {
        n: "3",
        tone: "emerald" as const,
        title: "Why it mattered",
        body:
          "This changed covenant spreading from a heavily manual workflow into a near-touchless operational system with stronger controls, faster turnaround, and far better capacity. The impact was not just speed; it was a more resilient operating model that could handle large borrower volumes without depending on repetitive manual effort.",
      },
    ],
    metrics: [
      ["45min -> 5min", "document processing time"],
      ["$6-8M", "annual business value"],
      ["100%", "automated intake and monitoring flow"],
      ["150-160", "operations capacity impact"],
    ],
    systems: ["CODA", "DDE", "CAMP", "Aurora", "iSpresso", "AI LLM Service"],
  },
  {
    eyebrow: "Spotlight - JPMorgan Chase - Present",
    title: "SMART",
    subtitle: "Strategic Multi Asset Review Tool",
    description:
      "A portfolio-risk platform redesigned to automate the end-to-end credit grading and loan review lifecycle, moving CTL from fragmented annual reviews toward a scalable, data-driven risk operating model.",
    beats: [
      {
        n: "1",
        tone: "blue" as const,
        title: "The real problem",
        body:
          "Credit grading and loan review were critical annual processes where every borrower and loan had to be assessed for default risk and watchlist inclusion. The work depended heavily on manual intervention across multiple systems and borrower relationships, which made the process slow, inconsistent, and difficult for credit officers to manage at scale.",
      },
      {
        n: "2",
        tone: "amber" as const,
        title: "What I changed",
        body:
          "As Product Owner for SMART in the CTL portfolio, I led the transformation of that lifecycle into a system-led process. We automated about 90% of portfolio grading through a Probability of Default model trained on more than 10 years of historical data and executed monthly. The model evaluated updated borrower operating statements, LTV, DSC, and ZIP code-level market conditions while integrating upstream systems such as CREOS, CREAM, STRATEGY, and EDH. This automation covered MFL loans below $5M and CML loans below $10M, while the remaining 10% were routed for manual review through an intelligent prioritization engine based on review deadlines, rate changes, and other risk signals.",
      },
      {
        n: "3",
        tone: "emerald" as const,
        title: "Why it mattered",
        body:
          "For KRG exposures above key thresholds, including borrower exposure above $35M, we re-engineered the relationship-level review process itself. That included automating validation checks, digitizing complex spreading activities, calculating aggregate risk metrics like LTV, DSC, net worth, and worst-case default grades, and replacing PDF approvals with a system-driven workflow that routed approvals, triggered notifications, and posted final grades through downstream integrations including ICRD. The result was higher efficiency, stronger data accuracy, and a far more scalable framework for portfolio risk management.",
      },
    ],
    metrics: [
      ["90%", "portfolio grading automated"],
      ["10+ yrs", "historical data powering the PD model"],
      ["Monthly", "risk evaluation cadence"],
      ["$35M+", "KRG relationship exposure workflow"],
    ],
    systems: ["CREOS", "CREAM", "STRATEGY", "EDH", "ICRD", "PD Model"],
  },
] as const;

const storyCards = [
  {
    meta: "JPMorgan Chase - 2023-2024",
    title: "Aurora WaaS",
    subtitle: "Workflow-as-a-Service",
    body:
      "Owned product delivery for a low-code workflow platform that reduced engineering dependency and accelerated operational change across enterprise teams.",
    chips: ["200+ workflows", "4M+ annual requests", "400+ inbox-led flows modernized"],
  },
  {
    meta: "Portable Product Edge",
    title: "Why This Travels",
    subtitle: "Strength beyond one domain",
    body:
      "My strongest work shows up where teams face operational complexity, ambiguous ownership, and business-critical workflows that need product discipline.",
    chips: ["Discovery to rollout", "Deep process mapping", "Business + engineering fluency"],
  },
] as const;

const timeline = [
  [
    "Nov 2022 - Present",
    "Product Manager / Associate Product Owner",
    "JPMorgan Chase & Co.",
    "Leading platform and automation products across wholesale lending, covenant monitoring, workflow orchestration, and credit-risk operations.",
  ],
  [
    "Jan 2021 - Nov 2022",
    "Business Analyst/ Programmer Analyst",
    "Cognizant Technology Solutions",
    "Built the systems lens that still shapes my product work today: validation rigor, root-cause thinking, automation, and disciplined execution.",
  ],
  [
    "2017 - 2021",
    "B.Tech, Electrical & Electronics Engineering",
    "Vellore Institute of Technology",
    "Graduated with a 9.13 CGPA and a strong analytical foundation.",
  ],
] as const;

const strengths = [
  "Product strategy and roadmap framing",
  "Process re-engineering and operating model redesign",
  "PRDs, user stories, and backlog shaping",
  "Workflow products and BPMN-based systems",
  "AI-assisted automation and intelligent document flows",
  "Cross-functional delivery with engineering, ops, and risk teams",
  "Metrics design, adoption tracking, and impact measurement",
  "Agile execution across Scrum, SAFe, and Kanban",
];

const domainTags = [
  "Product Manager",
  "Platform Product",
  "Enterprise SaaS",
  "AI-enabled Operations",
  "Fintech",
  "Workflow Automation",
  "B2B Products",
  "0-1 to Scale",
];

const toolkitRows = [
  ["Product Vision", "Roadmaps", "Stakeholder Alignment", "OKRs and KPIs", "Service Design", "Problem Discovery", "User Stories", "Release Planning"],
  ["Camunda BPMN", "Workflow Automation", "SQL", "API Integrations", "JIRA", "Confluence", "UAT", "Operational Analytics"],
  ["Scrum", "SAFe", "Kanban", "Process Mapping", "Platform Thinking", "Risk and Controls", "Low-Code Platforms", "Enterprise Transformation"],
] as const;

const contacts = [
  { label: "Email", value: "dilawaryadav635@gmail.com", href: "mailto:dilawaryadav635@gmail.com", icon: <MailIcon className="h-5 w-5" /> },
  { label: "Phone", value: "+91 73585 38945", href: "tel:+917358538945", icon: <PhoneIcon className="h-5 w-5" /> },
  { label: "LinkedIn", value: "linkedin.com/in/dilawar-singh-yadav", href: "https://linkedin.com/in/dilawar-singh-yadav", icon: <LinkedInIcon className="h-5 w-5" /> },
  { label: "WhatsApp", value: "wa.me/917358538945", href: "https://wa.me/917358538945", icon: <ChatIcon className="h-5 w-5" /> },
] as const;

export default function Home() {
  return (
    <>
      <a href="#contact" className="soft-pill fixed right-3 top-3 z-50 hidden items-center gap-2 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur xl:inline-flex">
        Contact
        <ArrowIcon className="h-3 w-3" />
      </a>

      <main className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-3 pb-8 pt-24 sm:px-4 sm:pb-12 sm:pt-20">
        <section className="section-fade grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="bento-card p-7 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,103,216,0.16),_transparent_36%)]" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[22px] border border-white/80 shadow-lg shadow-black/5">
                    <Image src="/profile.jpg" alt="Dilawar Singh Yadav" fill className="object-cover" priority sizes="80px" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">Product Portfolio</p>
                    <h1 className="mt-1 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Dilawar Singh Yadav</h1>
                    <p className="mt-1 text-sm text-muted sm:text-base">Product Manager building high-impact systems for complex businesses</p>
                  </div>
                </div>

                <div className="space-y-4 text-[15px] leading-7 text-foreground/78 sm:text-base">
                  <p>I build products that turn fragmented enterprise operations into scalable, measurable systems. My work sits at the intersection of product strategy, workflow design, operating-model transformation, and deep execution.</p>
                  <p>Across lending, credit-risk, and workflow platforms, I have led discovery, process redesign, PRD definition, platform rollout, and adoption for products that reduced manual work, improved governance, and made complex teams move faster.</p>
                  <p>I am especially strong in roles where the real challenge is not just shipping features, but untangling operational complexity and designing a product solution that actually changes how the business works.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-3">
                  <a href="/dilawar-singh-yadav-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
                    Open Resume
                    <ArrowIcon className="h-3 w-3" />
                  </a>
                  <a href="/dilawar-singh-yadav-detailed-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/85 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-black/20 hover:bg-white">
                    Detailed Resume
                    <ArrowIcon className="h-3 w-3" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {socials.map((item) => (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-3 py-2 text-xs font-medium text-muted transition hover:border-accent/20 hover:text-accent">
                      {item.icon}
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bento-card p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Current</p>
                  <h2 className="mt-2 text-xl font-semibold text-foreground">JPMorgan Chase &amp; Co.</h2>
                  <p className="mt-1 text-sm text-muted">Product Manager / Associate Product Owner</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">Active</span>
              </div>
              <p className="text-sm leading-6 text-foreground/74">Driving products across covenant monitoring, lending operations, workflow platforms, and AI-assisted enterprise process redesign.</p>
            </div>

            <div className="bento-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Domain Reach</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {domainTags.map((item) => (
                  <span key={item} className="rounded-full border border-black/8 bg-surface px-3 py-2 text-xs font-medium text-foreground/75">{item}</span>
                ))}
              </div>
            </div>

            <div className="bento-card p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">At a Glance</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {stats.map(([value, label], index) => (
                  <div key={label} className={`rounded-[20px] bg-gradient-to-br p-4 ${["from-blue-50 to-transparent text-blue-700", "from-emerald-50 to-transparent text-emerald-700", "from-amber-50 to-transparent text-amber-700", "from-violet-50 to-transparent text-violet-700"][index]}`}>
                    <p className="text-3xl font-semibold tracking-tight">{value}</p>
                    <p className="mt-2 text-xs leading-5 text-foreground/65">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {spotlightSections.map((section) => (
          <section key={section.title} className="section-fade mt-4">
            <SpotlightSection section={section} />
          </section>
        ))}

        <section className="section-fade mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          {storyCards.map((card) => (
            <article key={card.title} className="bento-card flex flex-col p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">{card.meta}</p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{card.title}</h3>
              <p className="mt-1 text-sm text-muted">{card.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-foreground/74">{card.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.chips.map((chip) => (
                  <span key={chip} className="rounded-full border border-black/8 bg-surface px-3 py-2 text-xs font-medium text-foreground/72">{chip}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="section-fade mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bento-card p-6 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Career Arc</p>
            <div className="mt-6 space-y-5">
              {timeline.map(([period, title, company, detail]) => (
                <div key={period} className="border-l border-black/10 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/72">{company}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/72">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bento-card p-6 sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">What Teams Rely On Me For</p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">Product thinking with systems depth</h2>
              </div>
              <div className="rounded-full bg-accent/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Broadly applicable</div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="rounded-[18px] border border-black/7 bg-surface/80 px-4 py-3 text-sm font-medium text-foreground/78">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-fade mt-4">
          <div className="bento-card overflow-hidden p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Toolkit</p>
            <div className="mt-4 space-y-3 overflow-hidden">
              {toolkitRows.map((row, i) => (
                <div key={row.join("-")} className={`tag-track ${i === 1 ? "reverse" : ""}`} style={{ animationDuration: `${24 + i * 3}s` }}>
                  {[...row, ...row].map((item, index) => (
                    <span key={`${item}-${index}`} className="rounded-full border border-black/8 bg-surface px-4 py-2 text-xs font-medium whitespace-nowrap text-foreground/74">{item}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-fade mt-4">
          <div className="bento-card overflow-hidden bg-[radial-gradient(circle_at_32%_58%,_rgba(223,234,255,0.85),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(249,250,252,0.98)_100%)] p-7 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Get in touch</p>
                <h2 className="mt-4 text-4xl font-semibold leading-none text-foreground sm:text-5xl">Let&apos;s talk.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/68 sm:text-base">
                  I&apos;m open to product roles with strategic scope, real ownership, and room to build at scale. I do my best work where product needs strong systems thinking, cross-functional leadership, and measurable business impact.
                </p>
                <p className="mt-2 max-w-xl text-sm leading-7 text-foreground/68 sm:text-base">
                  Happy to talk about product, enterprise transformation, workflow platforms, or AI-enabled operations.
                </p>
                <p className="mt-4 text-base text-foreground/72">Bengaluru, India · Open to relocate</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/dilawar-singh-yadav-detailed-resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black">
                    View Detailed Resume
                    <ArrowIcon className="h-3 w-3" />
                  </a>
                  <a href="https://linkedin.com/in/dilawar-singh-yadav" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:border-black/20 hover:bg-slate-50">
                    LinkedIn
                    <ArrowIcon className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-3 lg:pl-8">
                {contacts.map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center justify-between gap-4 rounded-[24px] bg-[#f1f1f4] p-4 transition hover:bg-[#ebedf2]">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-black/6 bg-white text-foreground shadow-sm">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="truncate text-sm text-foreground/52">{item.value}</p>
                      </div>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-black/6 bg-white text-foreground/70 transition group-hover:text-accent">
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SpotlightSection({
  section,
}: {
  section: (typeof spotlightSections)[number];
}) {
  return (
    <div className="bento-card bg-[linear-gradient(135deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.98)_60%,_rgba(226,238,255,0.9)_100%)] p-7 sm:p-8 lg:p-10">
      <div className="mb-6 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">{section.eyebrow}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
        <div>
          <h2 className="font-serif text-4xl font-semibold leading-none text-foreground sm:text-5xl">{section.title}</h2>
          {section.subtitle && <p className="mt-2 text-sm font-medium text-muted">{section.subtitle}</p>}
          <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/78">{section.description}</p>

          <div className="mt-8 space-y-6">
            {section.beats.map((beat) => (
              <Beat key={beat.title} n={beat.n} tone={beat.tone} title={beat.title} body={beat.body} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {section.metrics.map(([value, label]) => (
            <div key={label} className="rounded-[22px] bg-surface p-5 text-center">
              <p className="text-3xl font-semibold tracking-tight text-foreground">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{label}</p>
            </div>
          ))}

          <div className="rounded-[22px] border border-accent/12 bg-white/85 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Systems touched</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {section.systems.map((item) => (
                <span key={item} className="rounded-full bg-accent/7 px-3 py-2 text-xs font-medium text-accent">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Beat({ n, tone, title, body }: { n: string; tone: "blue" | "amber" | "emerald"; title: string; body: string }) {
  const tones = { blue: "bg-blue-100 text-blue-700", amber: "bg-amber-100 text-amber-700", emerald: "bg-emerald-100 text-emerald-700" } as const;
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${tones[tone]}`}>{n}</div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">{title}</p>
      </div>
      <p className="mt-3 text-sm leading-7 text-foreground/74 sm:pl-10">{body}</p>
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true"><path d="M2 10L10 2M10 2H4M10 2v6" /></svg>;
}

function MailIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5" /><path d="m3.5 6 8.5 7 8.5-7" /></svg>;
}

function PhoneIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.9a19.5 19.5 0 0 1-6.1-6.1A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8 9.91A16 16 0 0 0 14.09 16l1.47-1.24a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z" /></svg>;
}

function LinkedInIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.61 0 4.27 2.37 4.27 5.45v6.29ZM6.88 8.56a1.68 1.68 0 1 1 0-3.36 1.68 1.68 0 0 1 0 3.36Zm1.78 11.89H5.1V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>;
}

function ChatIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8H7l-4 2 1.5-4.2A8 8 0 1 1 20 11.5Z" /><path d="M8.5 10.5h7M8.5 14h4" /></svg>;
}
