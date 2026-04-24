export function FeaturedCase() {
    return (
      <section className="bg-black text-white py-[100px] px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="reveal">
            <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-5">
              Concept &nbsp;·&nbsp; Nike &nbsp;·&nbsp; 2025
            </div>
            <h3 className="text-[clamp(40px,7vw,96px)] font-semibold tracking-[-0.045em] leading-none mb-6">
              TIME SPLIT.
            </h3>
            <p className="text-[clamp(18px,1.8vw,22px)] text-muted-dark max-w-[640px] leading-[1.45] mb-14 font-normal">
              A thirty-second campaign concept for the flagship running silhouette. Hyperreal CG fused with AI-generated motion to dramatize the split-second between intent and movement.
            </p>
          </div>
  
          <div className="reveal relative w-full aspect-video rounded-[24px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            style={{
              background:
                "radial-gradient(ellipse at 20% 80%, rgba(255,59,48,0.4), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(0,122,255,0.25), transparent 55%), linear-gradient(135deg, #1c1c1e 0%, #000 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)" }}
            />
            <span className="absolute top-7 left-8 text-xs tracking-[0.15em] uppercase text-white/90 font-medium z-10">
              Featured Case
            </span>
            <div className="absolute bottom-9 left-8 right-8 z-10">
              <div className="font-serif-italic text-[clamp(36px,6vw,80px)] leading-none text-white/95 tracking-[-0.02em]">
                time split.
              </div>
            </div>
          </div>
  
          <div className="reveal mt-16 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-12 gap-y-10 pt-10 border-t border-hairline-dark">
            <div className="flex flex-col">
              <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Role</div>
              <div className="text-[15px] font-normal leading-[1.4]">
                <strong className="font-medium">Art Director</strong><br />CG Supervisor
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Production</div>
              <div className="text-[15px] font-normal leading-[1.4]">Concept, pre-viz, look dev, final grade. 6-week turnaround.</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Team</div>
              <div className="text-[15px] font-normal leading-[1.4]">4 specialists:<br />CG, comp, sound, grade</div>
            </div>
            <div className="flex flex-col">
              <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Tools</div>
              <div className="text-[15px] font-normal leading-[1.4]">Houdini · Nuke · Seedance 2.0 · Kling 3.0 · DaVinci Resolve</div>
            </div>
          </div>
        </div>
      </section>
    );
  }