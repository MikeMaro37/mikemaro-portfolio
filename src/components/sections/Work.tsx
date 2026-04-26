"use client";

import { useState } from "react";

type WorkItem = {
  id: string;
  vimeoId: string;
  eyebrow: string;
  title: string;
  tagline: string;
};

const items: WorkItem[] = [
  {
    id: "yandex",
    vimeoId: "1186632330",
    eyebrow: "Tech · 2024",
    title: "Yandex",
    tagline: "Brand identity in motion.",
  },
  {
    id: "flowwow",
    vimeoId: "1186633203",
    eyebrow: "E-commerce · 2023",
    title: "Flowwow",
    tagline: "Florals, frame by frame.",
  },
  {
    id: "vk-tech",
    vimeoId: "1186632996",
    eyebrow: "Tech · 2024",
    title: "VK Tech",
    tagline: "The architecture of code.",
  },
  {
    id: "reading-mom",
    vimeoId: "1186633470",
    eyebrow: "Social · 2024",
    title: "Reading Mom",
    tagline: "A national reading initiative.",
  },
  {
    id: "greenvich",
    vimeoId: "1186633791",
    eyebrow: "Retail · 2025",
    title: "Greenvich",
    tagline: "Atmosphere as identity.",
  },
  {
    id: "fonbet",
    vimeoId: "1186634307",
    eyebrow: "Sports · 2024",
    title: "FonBet",
    tagline: "Energy of the game.",
  },
];

export function Work() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="work" className="bg-bg-light text-fg-light py-[140px] px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="reveal flex justify-between items-end mb-16 flex-wrap gap-4">
          <h2 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.035em] leading-none">
            Selected Work.
          </h2>
          <div className="text-xs tracking-[0.1em] uppercase text-muted-light font-medium">
            2023 – 2025
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => {
            const isActive = activeId === item.id;

            const previewSrc = `https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&loop=1&muted=1&autopause=0&badge=0&title=0&byline=0&portrait=0`;
            const playerSrc = `https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&autopause=0&badge=0&title=0&byline=0&portrait=0`;

            return (
              <article
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`reveal group relative aspect-video rounded-[20px] overflow-hidden bg-black ring-1 ring-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] ${
                  isActive ? "scale-[1.02]" : "hover:scale-[1.015]"
                }`}
              >
                <iframe
                  key={isActive ? "active" : "preview"}
                  src={isActive ? playerSrc : previewSrc}
                  allow="autoplay; fullscreen; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                    isActive ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  title={item.title}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                />

                <div
                  className={`absolute bottom-0 left-0 right-0 p-7 z-10 text-white pointer-events-none transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <div className="text-[11px] tracking-[0.1em] uppercase font-medium opacity-85 mb-2">
                    {item.eyebrow}
                  </div>
                  <div className="text-[24px] md:text-[28px] font-medium tracking-[-0.02em] leading-[1.05] mb-1">
                    {item.title}
                  </div>
                  <div className="text-[14px] text-white/70 font-normal leading-[1.4]">
                    {item.tagline}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}