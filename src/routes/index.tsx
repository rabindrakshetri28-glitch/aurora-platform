import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Construction,
  Cross,
  Headphones,
  LocateFixed,
  LockKeyhole,
  MapPin,
  Menu,
  Navigation,
  PackageCheck,
  Radio,
  RouteIcon,
  ShieldCheck,
  Sparkles,
  TimerReset,
  TrendingUp,
  UserRoundCheck,
  Users,
  Warehouse,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora — Smart Workforce Management" },
      {
        name: "description",
        content:
          "Track workforce location, attendance, field activity, sales visits and payroll from one connected dashboard.",
      },
      { property: "og:title", content: "Nexora — Smart Workforce Management" },
      {
        property: "og:description",
        content: "One connected platform for teams across offices, sites and the field.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const workforce = [
  { name: "Rahul S.", role: "Site supervisor", distance: "0.8 km", status: "Available", tone: "online", initials: "RS" },
  { name: "Amit K.", role: "Field sales", distance: "1.5 km", status: "On field", tone: "field", initials: "AK" },
  { name: "Priya M.", role: "Technician", distance: "2.2 km", status: "Offline", tone: "offline", initials: "PM" },
];

const problems = [
  ["01", "Who's available?", "See who is available, busy, offline or working in the field."],
  ["02", "Where are they?", "View employee locations and field activity from one place."],
  ["03", "Are they in the work area?", "Receive alerts when employees remain outside a designated radius."],
  ["04", "How much work was done?", "Track attendance, visits, hours and performance without spreadsheets."],
];

const features = [
  { icon: Radio, kicker: "Live visibility", title: "Know who's available, busy or offline", copy: "Reach the right employee at the right moment with live status and proximity signals.", accent: "green", stat: "24 available" },
  { icon: LocateFixed, kicker: "Real-time location", title: "Know where your team is", copy: "View locations, routes and field activity in one calm, centralized map.", accent: "blue", stat: "12 on field" },
  { icon: ShieldCheck, kicker: "Work radius alerts", title: "Stay informed when teams leave the work area", copy: "Set a work radius and configure timely alerts for exceptions that need attention.", accent: "amber", stat: "30+ min alert" },
  { icon: TimerReset, kicker: "Automatic tracking", title: "Tracking that resumes automatically", copy: "When an employee returns to the work area, tracking resumes and status updates.", accent: "green", stat: "Tracking on" },
  { icon: TrendingUp, kicker: "Field sales", title: "Turn field activity into actionable data", copy: "Measure visits, clients met, distance covered and sales progress by employee.", accent: "blue", stat: "72% progress" },
  { icon: Clock3, kicker: "Attendance", title: "Know who worked and for how long", copy: "Monitor entry, exit, attendance and total hours across every location.", accent: "violet", stat: "32 present" },
  { icon: BadgeIndianRupee, kicker: "Payroll", title: "Turn attendance into payroll", copy: "Connect verified hours with daily, weekly and monthly salary calculations.", accent: "coral", stat: "₹24,000 monthly" },
];

const industries = [
  { icon: Construction, title: "Construction", copy: "Coordinate workers across active project sites." },
  { icon: BriefcaseBusiness, title: "Field Sales", copy: "Monitor visits, routes and client activity." },
  { icon: Headphones, title: "Service Centers", copy: "Manage technicians and service teams." },
  { icon: Cross, title: "Healthcare", copy: "Coordinate staff across facilities and locations." },
  { icon: PackageCheck, title: "Logistics", copy: "See mobile workforce activity in real time." },
  { icon: Building2, title: "Multi-location", copy: "Bring branches and teams into one view." },
];

const faqs = [
  ["What is workforce management software?", "It helps businesses organize and monitor employee availability, attendance, location, field activity and related workforce operations."],
  ["Can I track field employees?", "Yes. Nexora provides location and field activity visibility based on your configured tracking settings."],
  ["Can I set a work radius?", "Yes. You can define work areas and configure alerts when an employee remains outside for a specified duration."],
  ["Does tracking resume when an employee returns?", "Tracking can automatically resume when an employee returns to the designated work area."],
  ["Can I track sales visits?", "Yes. Field sales teams can monitor visits, routes, client activity and sales-related metrics."],
  ["Can attendance be connected with payroll?", "Yes. Attendance and verified work hours can flow into salary and payout calculations."],
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Nexora home">
      <span className="brand-mark"><Navigation className="size-4" /></span>
      <span className="text-[1.08rem] font-bold tracking-tight text-foreground">nexora</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, align = "center" }: { eyebrow: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{copy}</p>}
    </div>
  );
}

function WorkforceMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`map-surface relative overflow-hidden ${compact ? "h-48" : "h-64"}`} aria-label="Live workforce map">
      <div className="map-road map-road-one" />
      <div className="map-road map-road-two" />
      <div className="map-road map-road-three" />
      <div className="map-radius map-radius-one" />
      <div className="map-pin map-pin-one"><span>RS</span></div>
      <div className="map-pin map-pin-two map-pin-field"><span>AK</span></div>
      <div className="map-pin map-pin-three"><span>PM</span></div>
      <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md border border-border/70 bg-card/90 px-2.5 py-2 text-[11px] font-semibold text-foreground shadow-sm backdrop-blur">
        <span className="size-2 animate-pulse rounded-full bg-success" /> Live workforce map
      </div>
      {!compact && <div className="alert-chip"><span className="alert-dot" />Outside work radius <b>30+ min</b></div>}
      <div className="absolute bottom-3 right-3 rounded-md border border-border/70 bg-card/90 px-2 py-1 text-[10px] font-medium text-muted-foreground shadow-sm">12 active routes</div>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="dashboard-shell relative animate-rise" aria-label="Nexora workforce dashboard preview">
      <div className="dashboard-topbar">
        <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-destructive/60"/><span className="size-2 rounded-full bg-warning/70"/><span className="size-2 rounded-full bg-success/70"/></div>
        <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground"><span className="size-1.5 animate-pulse rounded-full bg-success"/> Updated just now</div>
      </div>
      <div className="flex">
        <aside className="hidden w-14 shrink-0 border-r border-border/70 bg-secondary/60 py-4 sm:block">
          <div className="mx-auto grid size-7 place-items-center rounded-md bg-primary text-primary-foreground"><Navigation className="size-3.5"/></div>
          {[BarChart3, Users, MapPin, Clock3, CircleDollarSign].map((Icon, i) => <div key={i} className={`mx-auto mt-4 grid size-7 place-items-center rounded-md ${i === 0 ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}><Icon className="size-3.5"/></div>)}
        </aside>
        <div className="min-w-0 flex-1 p-3 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div><p className="text-[10px] font-medium text-muted-foreground">Tuesday, 29 Sep</p><h3 className="mt-0.5 text-sm font-bold text-foreground sm:text-base">Workforce overview</h3></div>
            <div className="hidden items-center gap-2 text-[10px] text-muted-foreground sm:flex"><div className="avatar-mini">RK</div> Rabindra K.</div>
          </div>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
            {[['24','Available','success'],['12','On field','primary'],['8','Busy','warning'],['4','Offline','muted']].map(([value,label,tone]) => <div className="metric-card" key={label}><div className={`metric-dot bg-${tone}`}/><b>{value}</b><span>{label}</span></div>)}
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-[1.45fr_1fr]">
            <WorkforceMap compact />
            <div className="rounded-md border border-border/70 bg-card p-3">
              <div className="mb-2 flex items-center justify-between"><p className="text-[11px] font-bold text-foreground">Nearby team</p><span className="text-[9px] font-semibold text-primary">VIEW ALL</span></div>
              {workforce.map((person) => <div className="employee-row" key={person.name}><div className={`avatar avatar-${person.tone}`}>{person.initials}</div><div className="min-w-0 flex-1"><p>{person.name}</p><span>{person.role}</span></div><div className="text-right"><b>{person.distance}</b><span className={`status-${person.tone}`}>{person.status}</span></div></div>)}
              <div className="mt-3 rounded-md bg-warning-soft p-2.5 text-[9px] leading-4 text-warning-foreground"><div className="flex items-center gap-1.5 font-bold"><ShieldCheck className="size-3.5"/> Work radius alert</div><p className="mt-1 opacity-80">Amit is outside Site B · 32 min</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullDashboard() {
  const tabs = ["Overview", "Employees", "Live location", "Attendance", "Field activity", "Sales", "Payroll"];
  return (
    <div className="dashboard-shell dashboard-large">
      <div className="dashboard-topbar px-4"><Brand/><div className="hidden items-center gap-2 sm:flex"><span className="size-2 rounded-full bg-success"/><span className="text-xs text-muted-foreground">All systems active</span><div className="avatar-mini ml-3">RK</div></div></div>
      <div className="grid lg:grid-cols-[190px_1fr]">
        <aside className="hidden border-r border-border/70 bg-secondary/50 p-4 lg:block">
          <p className="mb-3 text-[10px] font-bold uppercase text-muted-foreground">Workspace</p>
          {tabs.map((tab, i) => <div key={tab} className={`mb-1 flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium ${i === 0 ? "bg-card text-primary shadow-sm" : "text-muted-foreground"}`}><span className={`size-1.5 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`}/>{tab}</div>)}
          <div className="mt-8 rounded-md bg-primary p-3 text-primary-foreground"><Sparkles className="size-4"/><p className="mt-2 text-[11px] font-bold">Weekly insight</p><p className="mt-1 text-[9px] leading-4 opacity-70">Team punctuality improved by 8%.</p></div>
        </aside>
        <div className="min-w-0 p-4 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs text-muted-foreground">Good morning, Rabindra</p><h3 className="mt-1 text-xl font-bold text-foreground">Workforce overview</h3></div><div className="rounded-md border border-border bg-card px-3 py-2 text-xs font-medium text-muted-foreground">All locations · Today</div></div>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[['48','Total employees','Users'],['24','Available','●'],['12','On field','●'],['₹1,24,000','Pending payroll','₹']].map(([value,label,icon], i) => <div className="dashboard-stat" key={label}><span className={i === 1 ? "text-success" : i === 2 ? "text-primary" : "text-muted-foreground"}>{icon}</span><b>{value}</b><small>{label}</small></div>)}
          </div>
          <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]"><WorkforceMap /><div className="dashboard-panel"><div className="panel-heading"><span>Attendance</span><b>Today</b></div><div className="attendance-ring"><div><b>80%</b><span>present</span></div></div><div className="mt-4 grid grid-cols-3 gap-1 text-center"><div><b>32</b><span>Present</span></div><div><b>5</b><span>Absent</span></div><div><b>3</b><span>Leave</span></div></div></div></div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2"><div className="dashboard-panel"><div className="panel-heading"><span>Field activity</span><b>Live</b></div><div className="mt-4 grid grid-cols-3 gap-2">{[['18','Visits'],['12','Clients'],['86 km','Distance']].map(([v,l])=><div key={l}><b className="text-base">{v}</b><span>{l}</span></div>)}</div></div><div className="dashboard-panel"><div className="panel-heading"><span>Weekly productivity</span><b>+12%</b></div><div className="bar-chart mt-4">{[34,52,44,68,82,59,74].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div></div></div>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header className="site-nav">
        <div className="page-container flex h-16 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {[['Features','#features'],['Solutions','#solution'],['How it works','#process'],['Industries','#industries'],['Pricing','#pricing'],['FAQ','#faq']].map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex"><a className="nav-link" href="#login">Log in</a><a className="button button-primary button-sm" href="#demo">Book a demo <ArrowRight className="size-4"/></a></div>
          <details className="mobile-menu lg:hidden"><summary aria-label="Open navigation"><Menu className="menu-open size-5"/><X className="menu-close size-5"/></summary><div className="mobile-menu-panel">{[['Features','#features'],['Solutions','#solution'],['How it works','#process'],['Industries','#industries'],['Pricing','#pricing'],['FAQ','#faq']].map(([label, href]) => <a key={label} href={href}>{label}</a>)}<a className="button button-primary mt-2" href="#demo">Book a demo <ArrowRight className="size-4"/></a></div></details>
        </div>
      </header>

      <main>
        <section className="hero-section pt-28 sm:pt-32">
          <div className="page-container grid items-center gap-12 pb-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:pb-28">
            <div className="relative z-10">
              <div className="hero-badge"><span className="size-1.5 rounded-full bg-success"/> Smart workforce management</div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4rem]">Know where your workforce is. <span className="text-primary">Manage everything</span> from one dashboard.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Track availability, location, attendance, field activity, sales visits and payroll from one powerful platform.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="button button-primary" href="#demo">Book a demo <ArrowRight className="size-4"/></a><a className="button button-secondary" href="#features">Explore features <ChevronDown className="size-4"/></a></div>
              <div className="mt-7 flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success"/><span>Built for teams across offices, sites, service centers and the field.</span></div>
            </div>
            <div className="relative"><div className="hero-grid"/><HeroDashboard/><div className="floating-card floating-card-one"><span className="icon-box icon-success"><UserRoundCheck className="size-4"/></span><div><b>Attendance synced</b><span>32 employees</span></div></div><div className="floating-card floating-card-two"><span className="icon-box icon-blue"><Zap className="size-4"/></span><div><b>Live status</b><span>Updated now</span></div></div></div>
          </div>
        </section>

        <section className="trust-strip"><div className="page-container py-7"><p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">One platform for your entire workforce</p><div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">{['Construction','Field sales','Service centers','Healthcare','Logistics','Multi-location'].map((name,i)=><div key={name} className="flex items-center gap-2 text-sm font-semibold text-foreground/75">{[Construction,BriefcaseBusiness,Headphones,Cross,Warehouse,Building2].map((Icon,idx)=>idx===i&&<Icon key={idx} className="size-4 text-muted-foreground"/>)}{name}</div>)}</div></div></section>

        <section className="section-space">
          <div className="page-container"><SectionHeading eyebrow="The challenge" title="A growing workforce shouldn't feel complicated." copy="As teams move across offices, sites and service areas, manual tracking becomes slow, fragmented and unreliable."/>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{problems.map(([number,title,copy])=><article className="problem-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
            <div className="flow-line"><span>Scattered information</span><div><i/><ArrowRight className="size-4"/><i/></div><b>One connected dashboard</b></div>
          </div>
        </section>

        <section id="solution" className="section-space bg-ink text-primary-foreground">
          <div className="page-container grid items-center gap-14 lg:grid-cols-2">
            <div><div className="eyebrow eyebrow-dark">One connected platform</div><h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">One app. Complete workforce visibility.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-ink-muted">Bring employee location, attendance, field activity, sales tracking and payroll together in one calm system.</p><div className="mt-9 grid grid-cols-2 gap-3">{[[MapPin,'Location'],[Users,'Employees'],[Clock3,'Attendance'],[RouteIcon,'Field tracking'],[BarChart3,'Sales'],[CircleDollarSign,'Payroll']].map(([Icon,label])=>{const I=Icon as typeof MapPin; return <div className="solution-pill" key={String(label)}><I className="size-4 text-electric"/>{String(label)}<Check className="ml-auto size-3.5 text-success"/></div>})}</div></div>
            <div className="command-center"><div className="command-orbit orbit-one"/><div className="command-orbit orbit-two"/><div className="command-core"><Navigation className="size-8"/><b>Nexora</b><span>Workforce OS</span></div>{[[MapPin,'Location','node-one'],[Clock3,'Attendance','node-two'],[TrendingUp,'Sales','node-three'],[BadgeIndianRupee,'Payroll','node-four']].map(([Icon,label,cn])=>{const I=Icon as typeof MapPin; return <div className={`command-node ${cn}`} key={String(label)}><I className="size-4"/><span>{String(label)}</span></div>})}</div>
          </div>
        </section>

        <section id="features" className="section-space"><div className="page-container"><SectionHeading eyebrow="Core capabilities" title="Everything you need to manage your workforce" copy="A single operational layer for every team, location and workday."/><div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{features.map((feature,i)=><article className={`feature-card ${i===0||i===6?'lg:col-span-2':''}`} key={feature.title}><div className="flex items-start justify-between gap-4"><span className={`feature-icon feature-${feature.accent}`}><feature.icon className="size-5"/></span><span className={`feature-stat feature-stat-${feature.accent}`}>{feature.stat}</span></div><p className="mt-8 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{feature.kicker}</p><h3 className="mt-2 max-w-md text-xl font-bold tracking-tight text-foreground">{feature.title}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{feature.copy}</p>{i===6&&<div className="mt-7 flex items-center gap-2 text-xs font-semibold text-muted-foreground"><span className="flow-tag">Attendance</span><ArrowRight className="size-3.5"/><span className="flow-tag">Work hours</span><ArrowRight className="size-3.5"/><span className="flow-tag">Salary</span><ArrowRight className="size-3.5"/><span className="flow-tag flow-tag-active">Payout</span></div>}</article>)}</div></div></section>

        <section id="process" className="section-space bg-secondary/60"><div className="page-container"><SectionHeading eyebrow="Simple setup" title="Manage your workforce in four steps"/><div className="process-grid mt-14">{[['Add your team','Add employees and organize your workforce.'],['Define work areas','Set locations and designated radius parameters.'],['Track activity','Monitor attendance, locations, visits and hours.'],['Manage in one view','Use live data to guide activity and payroll.']].map(([title,copy],i)=><article key={title} className="process-step"><div><span>0{i+1}</span>{i<3&&<i/>}</div><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="mt-12 text-center"><a href="#demo" className="button button-primary">Book a demo <ArrowRight className="size-4"/></a></div></div></section>

        <section id="industries" className="section-space"><div className="page-container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading align="left" eyebrow="Built for the real world" title="For teams that work everywhere"/><p className="max-w-md text-base leading-7 text-muted-foreground">Flexible enough for mobile teams, multi-site operators and complex workdays.</p></div><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{industries.map(item=><article className="industry-card" key={item.title}><span><item.icon className="size-5"/></span><div><h3>{item.title}</h3><p>{item.copy}</p></div><ArrowRight className="ml-auto size-4 text-muted-foreground"/></article>)}</div></div></section>

        <section className="section-space dashboard-section"><div className="page-container"><SectionHeading eyebrow="Your command center" title="Your entire workforce. At a glance." copy="From a company-wide view to one employee's workday, the details stay connected."/><div className="mt-14"><FullDashboard/></div></div></section>

        <section className="section-space"><div className="page-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><SectionHeading align="left" eyebrow="Better operations" title="Less manual tracking. More control." copy="Give managers a dependable picture of every workday without chasing updates across calls, chats and spreadsheets."/><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{[[Clock3,'Save time','Reduce manual monitoring and reporting.'],[Activity,'Improve visibility','Understand activity across your workforce.'],[Radio,'Stay connected','Reach employees when you need them.'],[BarChart3,'Make better decisions','Use clear data to guide performance.']].map(([Icon,title,copy])=>{const I=Icon as typeof Clock3; return <article className="benefit-card" key={String(title)}><I className="size-5 text-primary"/><h3>{String(title)}</h3><p>{String(copy)}</p></article>})}</div></div></section>

        <section id="pricing" className="section-space bg-secondary/55"><div className="page-container grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center"><div><div className="eyebrow">Control by design</div><h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Built for businesses that value clarity.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">Your workforce data stays organized, accessible and protected by practical access controls.</p><a href="#demo" className="button button-secondary mt-8">Talk to our team <ArrowRight className="size-4"/></a></div><div className="grid gap-3 sm:grid-cols-2">{[[LockKeyhole,'Secure workforce data'],[ShieldCheck,'Role-based access'],[BarChart3,'Centralized dashboard'],[CheckCircle2,'Reliable activity records']].map(([Icon,label])=>{const I=Icon as typeof LockKeyhole; return <div className="trust-card" key={String(label)}><span><I className="size-5"/></span><b>{String(label)}</b><Check className="ml-auto size-4 text-success"/></div>})}</div></div></section>

        <section id="faq" className="section-space"><div className="page-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><SectionHeading align="left" eyebrow="FAQ" title="Questions, answered."/><p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">Need a closer look? Book a tailored walkthrough with our team.</p></div><div className="faq-list">{faqs.map(([question,answer],i)=><details key={question} open={i===0}><summary><span>{question}</span><ChevronDown className="size-4"/></summary><p>{answer}</p></details>)}</div></div></section>

        <section id="demo" className="pb-24 pt-4 sm:pb-28"><div className="page-container"><div className="final-cta"><div className="cta-grid"/><div className="relative z-10 max-w-3xl"><div className="eyebrow eyebrow-dark">A clearer workday starts here</div><h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl">One app. One dashboard. Complete workforce visibility.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg">Bring your people, locations, attendance, field activity and payroll into one connected platform.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="button button-light" href="mailto:demo@nexora.example">Book a demo <ArrowRight className="size-4"/></a><a className="button button-ghost-light" href="mailto:hello@nexora.example">Talk to our team</a></div><p className="mt-5 text-xs text-ink-muted">Get a personalized walkthrough of the platform.</p></div></div></div></section>
      </main>

      <footer className="border-t border-border bg-background pb-24 pt-14 lg:pb-8"><div className="page-container"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]"><div><Brand/><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Smart workforce management for modern businesses.</p></div>{[['Product',['Features','Dashboard','Workforce tracking','Attendance','Payroll']],['Solutions',['Field sales','Construction','Service centers','Healthcare','Multi-location teams']],['Company',['About','Contact','Privacy','Terms']]].map(([heading,links])=><div key={heading as string}><h3 className="text-xs font-bold uppercase tracking-[0.12em] text-foreground">{heading as string}</h3><div className="mt-4 grid gap-3">{(links as string[]).map(link=><a href="#top" className="text-sm text-muted-foreground transition-colors hover:text-primary" key={link}>{link}</a>)}</div></div>)}</div><div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Nexora. All rights reserved.</p><p>Made for teams on the move.</p></div></div></footer>
      <a href="#demo" className="mobile-cta lg:hidden">Book a demo <ArrowRight className="size-4"/></a>
    </div>
  );
}
