import { Check } from "lucide-react"

import { SectionHead } from "@/components/SectionHead"

/* Only what the job photos prove (clients/yuri/HANDOFF.md, Positioning). */
const services = [
  "Fences",
  "Gates",
  "Decks",
  "Pergolas & patio covers",
  "Arbors & trellises",
  "Orthodox chapels, bell shelters & shrines",
]

export function Services() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="What I build" title="Services" />
      <ul className="grid grid-cols-2 gap-2.5">
        {services.map((s, i) => (
          <li
            key={s}
            className={
              "flex items-start gap-2.5 rounded-lg border border-border bg-card-elevated px-3 py-3 text-[0.92rem] leading-snug text-foreground" +
              (i >= 4 ? " col-span-full" : "")
            }
          >
            <Check className="mt-[2px] size-4 shrink-0 text-primary" strokeWidth={2.5} />
            {s}
          </li>
        ))}
      </ul>
    </section>
  )
}
