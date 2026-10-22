import { cn } from "@/lib/utils"
import { SectionHead } from "@/components/SectionHead"

/* Real job photos only (Paulina-Trockman-NN-polished.webp). Captions name the type of
   work; a location appears only where the handoff confirms it (03/07 Chicago area,
   10/14 Saint Catherine's Monastery). Grid uses /work/thumb, lightbox the full file. */
export type Photo = { n: string; caption: string }

export const photos: Photo[] = [
  { n: "04", caption: "Fence & arched gate" },
  { n: "02", caption: "Gate" },
  { n: "08", caption: "Gate" },
  { n: "14", caption: "Chapel · Saint Catherine’s Monastery, Sonora" },
  { n: "09", caption: "Pergola" },
  { n: "15", caption: "Arbor & gate" },
  { n: "07", caption: "Deck · Chicago area" },
  { n: "05", caption: "Fence" },
  { n: "06", caption: "Deck" },
  { n: "10", caption: "Bell shelter · Saint Catherine’s Monastery, Sonora" },
  { n: "12", caption: "Deck" },
  { n: "11", caption: "Arbor & gate" },
]

export function Gallery({ onOpen }: { onOpen: (p: Photo) => void }) {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Real jobs" title="My work" />
      <div className="grid grid-cols-2 gap-3">
        {photos.map((p, i) => {
          const full = `/work/${p.n}.webp`
          const wide = i % 3 === 0 // one wide, then a pair: 12 photos tile evenly
          return (
            /* The href stays as a no-JS fallback; JS intercepts into the lightbox. */
            <a
              key={p.n}
              href={full}
              onClick={(e) => {
                e.preventDefault()
                onOpen(p)
              }}
              className={cn(
                "group block overflow-hidden rounded-lg border border-border bg-card-elevated transition-[transform,box-shadow] duration-200 ease-card active:scale-[.97]",
                wide && "col-span-full"
              )}
            >
              <img
                src={`/work/thumb/${p.n}.webp`}
                alt={p.caption}
                loading="lazy"
                decoding="async"
                className={cn(
                  "block w-full object-cover transition-transform duration-200 ease-card group-hover:scale-[1.04]",
                  wide ? "aspect-[16/10]" : "aspect-square"
                )}
              />
              <div className="px-2.5 py-2 text-[0.8rem] leading-snug text-muted-foreground">{p.caption}</div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
