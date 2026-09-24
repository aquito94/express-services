import { ArrowRight } from "lucide-react";

export function FlowLine({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <div className="flex snap-x gap-2 overflow-x-auto pb-3" aria-label={items.join(" a ")}>
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-2">
          <span className={`rounded-md border px-3 py-2 text-[15px] font-medium ${dark ? "border-light/20 bg-light/5 text-light" : "border-border bg-card text-foreground"}`}>{item}</span>
          {index < items.length - 1 && <ArrowRight className="size-4 shrink-0 text-signal" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
