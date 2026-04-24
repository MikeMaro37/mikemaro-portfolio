const socials = [
    { label: "Vimeo", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "500px", href: "#" },
  ];
  
  export function Footer() {
    return (
      <footer className="bg-black py-10 px-6 border-t border-hairline-dark text-muted-dark text-xs">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
          <div>© 2026 Mike Maro. Belgrade.</div>
          <div className="flex gap-6">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="opacity-80 hover:opacity-100 transition-opacity">{s.label}</a>
            ))}
          </div>
        </div>
      </footer>
    );
  }