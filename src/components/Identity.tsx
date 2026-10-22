import { MapPin } from "lucide-react"

/* Business name confirmed: Imperial Decking. Full personal name still unconfirmed (NOTES.md). */
export function Identity() {
  return (
    <div className="relative z-2 px-gutter pt-4 pb-1.5 text-center">
      <h1 className="text-[1.9rem] leading-tight font-bold tracking-[-0.02em]">Imperial Decking</h1>
      <div className="mt-1 text-[1.02rem] font-medium text-primary">
        Yuri · Redwood fences, gates, decks &amp; pergolas
      </div>
      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1 text-[0.75rem] font-medium tracking-[0.08em] text-muted-foreground uppercase">
        <MapPin className="size-3.5 text-primary" strokeWidth={2} />
        Sonora, California
      </div>
    </div>
  )
}
