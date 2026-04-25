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
        Commercials<br />
        <span className="font-serif-italic tracking-[-0.02em]">for modern brands.</span>
      </h1>

      <p className="relative text-[clamp(18px,2vw,22px)] text-muted-dark font-normal max-w-[640px] leading-[1.4] mb-12">
        Crafting visual language for the world&apos;s most demanding names in fashion, sport and lifestyle. Directed from concept to final frame.
      </p>

      <div className="relative w-[min(92vw,1080px)] aspect-video rounded-[20px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-hairline-dark bg-black">
        <iframe
          src="https://player.vimeo.com/video/1186466644?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 w-full h-full"
          title="Showreel 2026 Mike Maro"
        />
      </div>
    </section>
  );
}