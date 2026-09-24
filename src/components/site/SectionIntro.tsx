export function SectionIntro({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return <div className="max-w-4xl"><p className={`text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-signal" : "text-primary"}`}>{eyebrow}</p><h2 className={`heading-section mt-4 ${dark ? "text-light" : "text-foreground"}`}>{title}</h2>{text && <p className={`body-copy mt-5 max-w-2xl ${dark ? "text-light/65" : "text-muted-foreground"}`}>{text}</p>}</div>;
}
