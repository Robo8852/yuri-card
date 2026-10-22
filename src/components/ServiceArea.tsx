import { MapPin } from "lucide-react"

import { SectionHead } from "@/components/SectionHead"

const areas = [
  "Sonora & Tuolumne County",
  "Calaveras County",
  "Bay Area",
  "As far as Chicago, for the right project",
]

export function ServiceArea() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="Service area" title="Where I work" />
      <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card-elevated">
        {areas.map((a) => (
          <li key={a} className="flex items-center gap-3 px-4 py-3 text-[0.95rem] text-foreground">
            <MapPin className="size-4 shrink-0 text-primary" strokeWidth={2} />
            {a}
          </li>
        ))}
      </ul>
    </section>
  )
}
