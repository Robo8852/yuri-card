import { SectionHead } from "@/components/SectionHead"

/* Approved copy, "How I work" (clients/yuri/HANDOFF.md). First person, no "we". */
export function AboutCompany() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <SectionHead kicker="About" title="How I work" />
      <div className="space-y-3 text-[0.98rem] text-foreground/85">
        <p>
          I build in redwood because it holds up and ages well. I measure and build on site, so the
          structure fits the ground it sits on, not a catalog drawing.
        </p>
        <p>
          And I do the work myself. <strong className="font-semibold text-foreground">The person who quotes your job is the person who builds it.</strong>
        </p>
      </div>
    </section>
  )
}
