import Image from "next/image";
import {
  Menu,
  Code,
  PenTool,
  Database
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased mesh-bg">
      {/* Top Navigation */}
      <nav className="w-full bg-black/80 backdrop-blur-md border-b border-white/5 py-4 fixed top-0 z-50">
        <div className="flex justify-between items-center px-4">
          <a
            className="font-mono text-[11px] font-bold tracking-tighter text-white"
            href="#"
          >
            SOLUTIONS_SPEC
          </a>
          <button className="text-white/60 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <main className="px-4 pb-20 pt-20">
        {/* Hero Section */}
        <section className="pt-8 pb-12">
          <h1 className="text-[36px] leading-[1.1] font-bold tracking-tight mb-5 text-white">
            Engineered <span className="text-[#a078ff]">Digital</span><br />
            Excellence.
          </h1>
          <p className="text-[14px] text-white/70 leading-relaxed mb-8 pr-4">
            We architect high-performance digital experiences for ambitious brands. Precision,
            speed, and uncompromising design.
          </p>
          <div className="flex flex-col gap-3 mb-12">
            <a
              className="w-full py-3.5 bg-[#8B5CF6] text-white rounded-lg text-[12px] font-bold text-center tracking-wider hover:brightness-110 transition-all uppercase"
              href="#"
            >
              Start Project
            </a>
            <a
              className="w-full py-3.5 bg-transparent border border-white/10 text-white rounded-lg text-[12px] font-bold text-center tracking-wider hover:bg-white/5 transition-all uppercase"
              href="#"
            >
              View Portfolio
            </a>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex items-center justify-center min-h-[160px] border-primary/20 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="bg-[#121212] flex items-center rounded-md px-4 py-3 w-full max-w-[220px] border border-white/5 shadow-2xl">
              <div className="flex gap-1.5 mr-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/90"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/90"></div>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="mb-8">
            <h3 className="text-[#a078ff] text-[10px] uppercase font-bold tracking-[0.2em] mb-3 font-mono">
              Services
            </h3>
            <h2 className="text-[28px] font-bold tracking-tight text-white leading-tight">
              Technical Arsenal
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {/* Service 1 */}
            <div className="border border-white/5 bg-[#050505] p-6 rounded-2xl">
              <Code className="text-white w-6 h-6 mb-5" />
              <h3 className="text-base font-semibold mb-2 text-white tracking-tight">
                Web Engineering
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Next.js, React, and modern CSS frameworks to build lightning-fast web applications.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="border border-white/5 bg-[#050505] p-6 rounded-2xl">
              <PenTool className="text-[#a078ff] w-6 h-6 mb-5" />
              <h3 className="text-base font-semibold mb-2 text-white tracking-tight">
                UI/UX Design
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Systematic design approaches ensuring scalable and accessible user interfaces.
              </p>
            </div>

            {/* Service 3 */}
            <div className="border border-white/5 bg-[#050505] p-6 rounded-2xl">
              <Database className="text-white w-6 h-6 mb-5" />
              <h3 className="text-base font-semibold mb-2 text-white tracking-tight">
                Backend Architecture
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Robust APIs and database structures optimized for high throughput and security.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-12 border-t border-white/5">
          <div className="mb-8">
            <h3 className="text-[#a078ff] text-[10px] uppercase font-bold tracking-[0.2em] mb-3 font-mono">
              Portfolio
            </h3>
            <h2 className="text-[28px] font-bold tracking-tight text-white leading-tight">
              Selected Work
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {/* Project 1 */}
            <div className="border border-white/5 bg-[#050505] rounded-2xl overflow-hidden">
              <div className="relative h-[220px] w-full bg-[#111]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDthRNOQVjwSt5C5-TWy1tkO8CuXIhWX4-h0YDU4d4Vu2DccmTqbAUhBN0l7xX0ZbNmRcVlZnHmDzaBw3bXUg1BU3VfjbSxxg2tFmAesDu63m3kY4kFHVtzsz7Wwr2YMLQ9buwVQxbrvTSSGTZ0EgETfYrpBvr-ohCSRwuXJJsKTFiITNuWsaft-7gxfSD1_Y1rUhMOZV8NAECrl-aS9ktpJa7RPSJbPRhP3IY8fSINupu1WHrapMd082N9r3HIrObBd34K2QwGBV8"
                  alt="Laptop showing Fintech Dashboard"
                  fill
                  className="object-cover opacity-80 mix-blend-lighten"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded border border-white/10 font-mono text-[9px] uppercase text-white/80 bg-white/5 tracking-wider">
                    React
                  </span>
                  <span className="px-2.5 py-1 rounded border border-white/10 font-mono text-[9px] uppercase text-white/80 bg-white/5 tracking-wider">
                    Tailwind
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  Fintech Dashboard
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  A high-performance data visualization dashboard for a leading fintech startup.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-white/5 bg-[#050505] rounded-2xl overflow-hidden">
              <div className="relative h-[220px] w-full bg-[#111]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdppy4idBHZ4lNY2NYARtxWlSzBksZ8lGIaQDETBZQDvgSoYd5sDnpJkcfdwx9U37_n0y-FbrrXVkjoHT_pyZuM54DOWm4-e4HPel4cos8JTgXbpN_cLql_dwJLJYUHkKf15RuaNkFS9Z3fRgeJtLfsB-2KB97pQzHWTiX_QdJeVOcp3CD96rCvU4StNeipL0Iz-1YQD4fXlTCSbXlkQw_YFSvkClRgLKSZlykj8zRxGiddtwzGpR17rPXSOlywwEXYuyNP0DhsyY"
                  alt="Mobile UI showing E-Commerce Analytics"
                  fill
                  className="object-cover opacity-80 mix-blend-lighten"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded border border-white/10 font-mono text-[9px] uppercase text-white/80 bg-white/5 tracking-wider">
                    Next.js
                  </span>
                  <span className="px-2.5 py-1 rounded border border-white/10 font-mono text-[9px] uppercase text-white/80 bg-white/5 tracking-wider">
                    PostgreSQL
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  E-Commerce Platform
                </h3>
                <p className="text-[13px] text-white/50 leading-relaxed">
                  Scalable e-commerce solution handling thousands of concurrent transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 border-t border-white/5">
          <div className="mb-10">
            <h3 className="text-[#a078ff] text-[10px] uppercase font-bold tracking-[0.2em] mb-3 font-mono">
              Process
            </h3>
            <h2 className="text-[28px] font-bold tracking-tight text-white leading-tight">
              Execution Protocol
            </h2>
          </div>

          <div className="flex flex-col gap-10 relative pl-7 border-l-[1px] border-white/10 ml-2">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[32px] top-1.5 w-[7px] h-[7px] rounded-full bg-[#a078ff] ring-[6px] ring-[#0a0a0a]"></div>
              <h4 className="text-base font-semibold mb-1.5 text-white tracking-tight">
                01. Discovery
              </h4>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Analyzing requirements and defining the architectural scope.
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[32px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/10 ring-[6px] ring-[#0a0a0a]"></div>
              <h4 className="text-base font-semibold mb-1.5 text-white tracking-tight">
                02. Blueprint
              </h4>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Wireframing and systematic design system creation.
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[32px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/10 ring-[6px] ring-[#0a0a0a]"></div>
              <h4 className="text-base font-semibold mb-1.5 text-white tracking-tight">
                03. Build
              </h4>
              <p className="text-[13px] text-white/50 leading-relaxed">
                Iterative development with rigorous performance testing.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 border-t border-white/5">
          <h2 className="text-[28px] font-bold tracking-tight text-white mb-3">
            Initialize Project
          </h2>
          <p className="text-[14px] text-white/50 mb-10 leading-relaxed">
            Ready to build something extraordinary? Let's discuss your technical requirements.
          </p>
          
          <form className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Name
              </label>
              <input
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px]"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Email
              </label>
              <input
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px]"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-white uppercase tracking-wider mb-2 font-mono">
                Project Scope
              </label>
              <textarea
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:border-[#a078ff] focus:ring-1 focus:ring-[#a078ff]/30 focus:outline-none transition-all text-[14px] resize-none"
                rows={4}
                placeholder="Describe your technical needs..."
              ></textarea>
            </div>
            <div className="pt-2">
                <button
                className="w-full py-3.5 bg-[#8B5CF6] text-white rounded-lg text-[12px] font-bold tracking-wider hover:brightness-110 transition-colors uppercase"
                type="button"
                >
                Submit Request
                </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-black py-10 px-4 flex flex-col items-center gap-6">
        <div className="text-[10px] font-mono tracking-widest text-white/40 text-center uppercase leading-relaxed font-bold">
          © 2024 DIGITAL SOLUTIONS. ENGINEERED FOR PERFORMANCE.
        </div>
        <div className="flex gap-6 mt-2">
          <a
            className="text-[11px] font-semibold tracking-wider text-white/50 hover:text-white transition-colors capitalize"
            href="#"
          >
            Github
          </a>
          <a
            className="text-[11px] font-semibold tracking-wider text-white/50 hover:text-white transition-colors capitalize"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-[11px] font-semibold tracking-wider text-white/50 hover:text-white transition-colors capitalize"
            href="#"
          >
            Read.cv
          </a>
          <a
            className="text-[11px] font-semibold tracking-wider text-white/50 hover:text-white transition-colors capitalize"
            href="#"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
