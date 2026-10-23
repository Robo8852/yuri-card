import { Camera } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PHONE_DISPLAY, PHOTO_MESSAGE, PHONE_E164, smsHref, whatsappHref } from "@/lib/site"

/* Primary CTA from the approved copy. SMS href is rebuilt per-platform on click
   (iOS `&body=` vs Android `?body=`); the static href is the no-JS fallback. */
export function PrimaryCtas({ onShare }: { onShare: () => void }) {
  return (
    <section className="px-gutter pt-[22px] pb-2">
      <div className="rounded-card border border-border bg-card-elevated p-4">
        <Button asChild variant="brand" size="brand">
          <a
            href={`sms:${PHONE_E164}?body=${encodeURIComponent(PHOTO_MESSAGE)}`}
            onClick={(e) => {
              e.preventDefault()
              location.href = smsHref(PHOTO_MESSAGE)
            }}
          >
            <Camera className="mr-2 size-[18px]" strokeWidth={2} />
            Send me a photo of your space
          </a>
        </Button>
        <a
          href={whatsappHref(PHOTO_MESSAGE)}
          target="_blank"
          rel="noopener"
          className="mt-2.5 block text-center text-[0.88rem] text-primary underline-offset-4 hover:underline"
        >
          or send it on WhatsApp
        </a>

        <ol className="mt-4 space-y-2.5 border-t border-border pt-4 text-[0.92rem] text-muted-foreground">
          {[
            <>Text or WhatsApp a photo of the space to <span className="text-foreground">{PHONE_DISPLAY}</span>, with a line about what you want.</>,
            <>I call you back to talk it through.</>,
            <>If it’s a fit, I come out, measure, and give you a price.</>,
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[3px] shrink-0 font-mono text-[0.72rem] font-medium tracking-[0.08em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-center text-[0.88rem] font-medium text-foreground">No forms, no sales visit.</p>
      </div>

      <div className="pt-3">
        <Button type="button" variant="brandSecondary" size="brand" onClick={onShare}>
          Share this card
        </Button>
      </div>
    </section>
  )
}
