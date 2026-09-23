export function SectionIntro({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return <div className="max-w-4xl"><p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-signal" : "text-primary"}`}>{eyebrow}</p><h2 className={`mt-4 text-4xl leading-[1.02] sm:text-5xl lg:text-6xl ${dark ? "text-light" : "text-foreground"}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-base leading-7 ${dark ? "text-light/65" : "text-muted-foreground"}`}>{text}</p>}</div>;
}
