type WorkItem = {
    eyebrow: string;
    title: string;
    size: "wide" | "narrow" | "half";
    bgClass: string;
    dark?: boolean;
  };
  
  const items: WorkItem[] = [
    {
      eyebrow: "Luxury · 2025",
      title: "Haute Horlogerie —\nan assembly in eleven acts.",
      size: "wide",
      bgClass: "bg-gradient-to-br from-[#1c1c1e] to-black",
      dark: true,
    },
    {
      eyebrow: "Fashion · 2025",
      title: "Atelier Metamorphosis",
      size: "narrow",
      bgClass: "bg-gradient-to-br from-[#2d1b2e] to-[#0f0a14]",
      dark: true,
    },
    {
      eyebrow: "Broadcast · 2026",
      title: "Conference Titles —\na language for innovation.",
      size: "half",
      bgClass: "bg-gradient-to-br from-[#0a2540] to-[#000814]",
      dark: true,
    },
    {
      eyebrow: "Fashion · 2024",
      title: "Cinematic Transformation",
      size: "half",
      bgClass: "bg-gradient-to-br from-[#3a2820] to-[#1a1210]",
      dark: true,
    },
    {
      eyebrow: "Industrial · 2024",
      title: "Process, rendered precisely.",
      size: "narrow",
      bgClass: "bg-gradient-to-br from-[#e5e5e7] to-[#c7c7cc]",
      dark: false,
    },
    {
      eyebrow: "Editorial · 2024",
      title: "Pyaterochka Campaign —\nstill life in motion.",
      size: "wide",
      bgClass: "bg-gradient-to-br from-[#2d1b2e] to-[#0f0a14]",
      dark: true,
    },
  ];
  
  const sizeClasses: Record<WorkItem["size"], string> = {
    wide: "md:col-span-8 aspect-video",
    narrow: "md:col-span-4 aspect-[4/5]",
    half: "md:col-span-6 aspect-[4/3]",
  };
  
  export function Work() {
    return (
      <section id="work" className="bg-bg-light text-fg-light py-[140px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal flex justify-between items-end mb-16 flex-wrap gap-4">
            <h2 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.035em] leading-none">
              Selected Work.
            </h2>
            <div className="text-xs tracking-[0.1em] uppercase text-muted-light font-medium">
              2023 – 2026
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {items.map((item, i) => (
              <article
                key={i}
                className={`reveal relative col-span-1 ${sizeClasses[item.size]} rounded-[20px] overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-1 ${item.bgClass}`}
              >
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-8 ${
                    item.dark
                      ? "bg-gradient-to-t from-black/55 via-transparent to-transparent text-white"
                      : "bg-gradient-to-t from-white/85 via-transparent to-transparent text-fg-light"
                  }`}
                >
                  <div
                    className={`text-[11px] tracking-[0.1em] uppercase font-medium mb-2 ${
                      item.dark ? "opacity-85" : "text-fg-light/65"
                    }`}
                  >
                    {item.eyebrow}
                  </div>
                  <div className="text-[22px] md:text-[28px] font-medium tracking-[-0.02em] leading-[1.05] whitespace-pre-line">
                    {item.title}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }