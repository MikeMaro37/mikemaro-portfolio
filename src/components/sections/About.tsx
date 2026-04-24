export function About() {
    return (
      <section id="about" className="bg-bg-light text-fg-light py-[180px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.035em] leading-[1.05] mb-8">
                Ten years of directing <span className="font-serif-italic">pixels</span> into pictures.
              </h2>
              <p className="text-[17px] leading-[1.55] text-muted-light mb-4 max-w-[52ch]">
                Mike Maro is a Belgrade-based art director and CG supervisor. He has led visual direction on commercial films for fashion, sport, retail and lifestyle brands across Europe.
              </p>
              <p className="text-[17px] leading-[1.55] text-muted-light mb-4 max-w-[52ch]">
                His practice combines traditional CG craft with AI-native production pipelines — a hybrid approach that shortens timelines without softening the work.
              </p>
              <p className="text-[17px] leading-[1.55] text-muted-light max-w-[52ch]">
                Available for campaigns, product films, title sequences and brand identity direction.
              </p>
            </div>
  
            <div className="reveal relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] bg-gradient-to-br from-[#e5e5e7] to-[#b8b8bd]">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.4), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.1), transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }