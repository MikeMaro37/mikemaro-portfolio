export function FeaturedCase() {
  return (
    <section className="bg-black text-white py-[100px] px-6 min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="reveal">
          <div className="text-xs tracking-[0.15em] uppercase text-muted-dark font-medium mb-5">
            Campaign &nbsp;·&nbsp; Avito Fashion &nbsp;·&nbsp; 2025
          </div>
          <h3 className="text-[clamp(40px,7vw,96px)] font-semibold tracking-[-0.045em] leading-none mb-6">
            AVITO FASHION.
          </h3>
          <p className="text-[clamp(18px,1.8vw,22px)] text-muted-dark max-w-[640px] leading-[1.45] mb-14 font-normal">
            A celebrity-led fashion campaign for one of the largest marketplaces in Europe. Single-camera production fused with CG and tight post for a two-week turnaround.
          </p>
        </div>

        <div className="reveal relative w-full aspect-video rounded-[24px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-hairline-dark bg-black">
          <iframe
            src="https://player.vimeo.com/video/1186628246?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 w-full h-full"
            title="Avito Fashion"
          />
        </div>

        <div className="reveal mt-16 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-12 gap-y-10 pt-10 border-t border-hairline-dark">
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Role</div>
            <div className="text-[15px] font-normal leading-[1.4]">
              <strong className="font-medium">Art Director</strong><br />
              CG Supervisor<br />
              Production Supervisor
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Production</div>
            <div className="text-[15px] font-normal leading-[1.4]">Concept, on-set supervision, look dev, post. 2-week turnaround.</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Team</div>
            <div className="text-[15px] font-normal leading-[1.4]">14 specialists:<br />Director, Producer, DP, Gaffer, AC, PA, look dev, 3D generalist + extended crew</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] tracking-[0.1em] uppercase text-muted-dark font-medium mb-2.5">Tools</div>
            <div className="text-[15px] font-normal leading-[1.4]">Blender · Nuke · After Effects · DaVinci Resolve · Audition · Figma</div>
          </div>
        </div>
      </div>
    </section>
  );
}