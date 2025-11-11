import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, BarChart3, Shield, CreditCard, Zap, Users } from 'lucide-react'

function App() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Navigation */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 shadow-lg shadow-fuchsia-500/30" />
            <span className="text-lg font-semibold tracking-tight">ViralVault</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <button onClick={() => handleScrollTo('features')} className="hover:text-gray-600 transition-colors">Features</button>
            <button onClick={() => handleScrollTo('social-proof')} className="hover:text-gray-600 transition-colors">Results</button>
            <button onClick={() => handleScrollTo('pricing')} className="hover:text-gray-600 transition-colors">Pricing</button>
            <a href="/test" className="hover:text-gray-600 transition-colors">Backend Test</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">Log in</button>
            <button onClick={() => handleScrollTo('cta')} className="inline-flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors">Get Started</button>
          </div>
        </div>
      </header>

      {/* Hero Section with Spline Cover */}
      <section className="relative pt-24 md:pt-28">
        <div className="relative h-[70vh] md:h-[78vh] overflow-hidden">
          {/* Spline Canvas */}
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>

          {/* Soft gradient overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

          {/* Foreground content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur text-xs font-medium border border-black/5 shadow-sm mb-4">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                <span>New: Growth tools for modern e‑commerce</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
                Turn visitors into customers with a conversion‑first landing page
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600">
                Ship a high‑converting storefront in minutes. Proven templates, real‑time insights, and plug‑and‑play sections built for scaling brands.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button onClick={() => handleScrollTo('cta')} className="inline-flex justify-center items-center px-5 py-3 rounded-xl text-white bg-gray-900 hover:bg-gray-800 font-semibold shadow-lg shadow-gray-900/10">
                  Start Free Trial
                </button>
                <button onClick={() => handleScrollTo('features')} className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/90 hover:bg-white border border-black/10 font-semibold">
                  See How It Works
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-500">No credit card required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-wider text-gray-500 mb-6">Trusted by fast‑growing brands</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
            {['Nova', 'Helios', 'Quantum', 'Arcade', 'Lyra', 'Pulse'].map((brand) => (
              <div key={brand} className="h-10 rounded-md bg-gradient-to-br from-gray-100 to-gray-50 border border-black/5 flex items-center justify-center text-sm font-semibold text-gray-700">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to grow</h2>
            <p className="mt-3 text-gray-600">Launch, test, and optimize with conversion‑focused sections that plug right into your stack.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Feature icon={<Rocket className="h-5 w-5" />} title="Blazing‑fast pages" desc="Lightweight sections and best‑practice layouts load instantly on any device." />
            <Feature icon={<BarChart3 className="h-5 w-5" />} title="Built‑in analytics" desc="Understand funnels, track cohorts, and see what actually converts." />
            <Feature icon={<Shield className="h-5 w-5" />} title="Proven patterns" desc="Playbooks and presets tested across thousands of campaigns." />
            <Feature icon={<CreditCard className="h-5 w-5" />} title="Checkout ready" desc="Optimized product blocks and seamless payment integrations." />
            <Feature icon={<Users className="h-5 w-5" />} title="Audience capture" desc="Pop‑ups, lead magnets, and flows that turn attention into retention." />
            <Feature icon={<Zap className="h-5 w-5" />} title="One‑click sections" desc="Drag, drop, and publish. No engineering lift required." />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <StatCard value="3.2x" label="Average ROAS uplift" note="Across 1,200+ stores in 2024" />
            <StatCard value="+28%" label="Checkout conversion" note="After installing optimized PDPs" />
            <StatCard value="-37%" label="Acquisition costs" note="With high‑intent landing flows" />
          </div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Quote 
              quote="We rebuilt our landing in an afternoon and doubled conversions by Monday. It felt like cheating."
              author="Ava Chen"
              role="CMO, Nova Supply"
            />
            <Quote 
              quote="From idea to revenue in days, not weeks. The presets are insanely good."
              author="Marcus Reid"
              role="Founder, Arcade Labs"
            />
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-gray-600">Start free. Upgrade when you’re ready to scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Plan name="Starter" price="$0" tagline="Everything to launch" points={[
              'Core landing sections',
              'Basic analytics',
              'Community templates',
            ]} />
            <Plan name="Growth" price="$49" highlight tagline="For scaling brands" points={[
              'All Starter features',
              'A/B testing & cohorts',
              'Email & checkout flows',
            ]} />
            <Plan name="Pro" price="$149" tagline="For performance teams" points={[
              'All Growth features',
              'Advanced personalization',
              'Priority support',
            ]} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-violet-50 via-sky-50 to-fuchsia-50 p-8 md:p-12">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_50%)]" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Launch a conversion‑ready landing today</h3>
                <p className="mt-3 text-gray-600">Join thousands of founders, marketers, and creators building high‑performing stores.</p>
              </div>
              <div className="flex md:justify-end">
                <button className="inline-flex justify-center items-center px-6 py-3 rounded-xl text-white bg-gray-900 hover:bg-gray-800 font-semibold shadow-lg shadow-gray-900/10 w-full md:w-auto">Start Free</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500" />
            <span className="text-sm font-semibold">ViralVault</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} ViralVault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function StatCard({ value, label, note }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-8 shadow-sm">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{value}</div>
      <div className="mt-2 text-gray-700 font-medium">{label}</div>
      <div className="mt-1 text-xs text-gray-500">{note}</div>
    </div>
  )
}

function Quote({ quote, author, role }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 md:p-8 shadow-sm">
      <p className="text-lg md:text-xl leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold">{author}</div>
      <div className="text-sm text-gray-500">{role}</div>
    </div>
  )
}

function Plan({ name, price, tagline, points, highlight }) {
  return (
    <div className={`relative p-6 md:p-8 rounded-2xl border ${highlight ? 'border-gray-900 shadow-xl shadow-gray-900/10' : 'border-black/5 shadow-sm'} bg-white`}>
      {highlight && (
        <div className="absolute -top-3 left-6 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">Most Popular</div>
      )}
      <div className="flex items-baseline gap-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="text-xs text-gray-500">{tagline}</span>
      </div>
      <div className="mt-3 text-4xl font-extrabold tracking-tight">{price}<span className="text-base text-gray-500 font-medium">/mo</span></div>
      <ul className="mt-4 space-y-2 text-sm">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" /> {p}</li>
        ))}
      </ul>
      <button className={`mt-6 w-full inline-flex justify-center items-center px-5 py-3 rounded-xl font-semibold ${highlight ? 'text-white bg-gray-900 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`}>Choose {name}</button>
    </div>
  )
}

export default App
