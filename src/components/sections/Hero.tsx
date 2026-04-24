export function Hero() {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-[120px] pb-20 text-center overflow-hidden bg-black">
        {/* Ambient light gradients */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.04), transparent 60%)",
          }}
        />
  
        <p className="relative text-xs tracking-[0.1em] uppercase text-muted-dark mb-6 font-medium">
          Art Director &nbsp;·&nbsp; CG Supervisor
        </p>
  
        <h1 className="relative hero-gradient-text text-[clamp(56px,11vw,160px)] font-semibold tracking-[-0.055em] leading-[0.95] mb-6">
          Cinema for<br />
          <span className="font-serif-italic tracking-[-0.02em]">modern brands.</span>
        </h1>
  
        <p className="relative text-[clamp(18px,2vw,22px)] text-muted-dark font-normal max-w-[640px] leading-[1.4] mb-12">
          Crafting visual language for the world&apos;s most demanding names in fashion, sport and lifestyle. Directed from concept to final frame.
        </p>
  
        <div className="relative w-[min(92vw,1080px)] aspect-video rounded-[20px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-hairline-dark bg-gradient-to-br from-[#1a1a1d] via-[#0a0a0b] to-black">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(0,113,227,0.2), transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(255,59,48,0.12), transparent 50%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
  
          <span className="absolute bottom-7 left-8 text-xs tracking-[0.1em] uppercase text-white/70 font-medium z-10">
            Showreel &nbsp;·&nbsp; 2024 – 2026
          </span>
  
          <button
            aria-label="Play showreel"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-white/90 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:bg-white hover:scale-105 transition-transform duration-300 z-10"
          >
            <svg width="20" height="22" viewBox="0 0 20 22" className="fill-black ml-1">
              <path d="M0 0 L20 11 L0 22 Z" />
            </svg>
          </button>
        </div>
      </section>
    );
  }