export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Shopify Winback
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Recover abandoned Shopify checkouts with smart email sequences
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          CartReclaim connects to your Shopify store, detects abandoned checkouts, and automatically fires personalized email sequences — with A/B testing and timing optimization built in.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start recovering revenue — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">No credit card required to connect. Cancel anytime.</p>
      </section>

      {/* Social proof strip */}
      <section className="border-y border-[#21262d] py-6">
        <div className="max-w-3xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-white">18%</p>
            <p className="text-xs text-[#8b949e] mt-1">avg recovery rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">3-email</p>
            <p className="text-xs text-[#8b949e] mt-1">optimized sequence</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5 min</p>
            <p className="text-xs text-[#8b949e] mt-1">setup time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">A/B</p>
            <p className="text-xs text-[#8b949e] mt-1">template testing</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited abandoned checkout detection",
              "3-step automated email sequence",
              "A/B test subject lines & templates",
              "SendGrid integration included",
              "Recovery analytics dashboard",
              "Timing & frequency controls",
              "Up to 5 Shopify stores"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does CartReclaim connect to my Shopify store?</h3>
            <p className="text-sm text-[#8b949e]">After signing up you install our Shopify app in one click. It registers a webhook for <code className="text-[#58a6ff]">checkouts/create</code> and <code className="text-[#58a6ff]">checkouts/update</code> events. No code changes needed.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which email provider do you use?</h3>
            <p className="text-sm text-[#8b949e]">CartReclaim sends through SendGrid by default. You can bring your own SendGrid API key to use your verified sender domain and keep full deliverability control.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What if a customer completes their order after abandoning?</h3>
            <p className="text-sm text-[#8b949e]">We listen for the <code className="text-[#58a6ff]">orders/create</code> webhook. The moment an order is placed the email sequence is automatically cancelled — no awkward follow-ups to paying customers.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} CartReclaim. All rights reserved.
      </footer>
    </main>
  );
}
