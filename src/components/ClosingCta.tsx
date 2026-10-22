import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/site"

export function ClosingCta() {
  return (
    <section className="px-gutter pt-[34px] pb-1.5">
      <Button asChild variant="brand" size="brand">
        <a href={`tel:${PHONE_E164}`}>
          <Phone className="mr-2 size-[18px]" strokeWidth={2} />
          Call George · {PHONE_DISPLAY}
        </a>
      </Button>
    </section>
  )
}
