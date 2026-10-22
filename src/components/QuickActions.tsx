import { MessageCircle, MessageSquare, Phone, UserPlus } from "lucide-react"

import { cn } from "@/lib/utils"
import { PHONE_E164, WHATSAPP_URL } from "@/lib/site"

const tileBase =
  "flex flex-col items-center gap-[7px] rounded-lg border no-underline transition-[transform,border-color,background,box-shadow] duration-200 ease-card px-1 pt-3.5 pb-[11px] hover:-translate-y-0.5 active:scale-[.97]"

type Action = {
  label: string
  href: string
  Icon: typeof Phone
  primary?: boolean
  external?: boolean
  download?: string
  onClick?: () => void
}

export function QuickActions({ onSaveContact }: { onSaveContact: () => void }) {
  const actions: Action[] = [
    { label: "Call", href: `tel:${PHONE_E164}`, Icon: Phone, primary: true },
    { label: "Text", href: `sms:${PHONE_E164}`, Icon: MessageSquare },
    { label: "WhatsApp", href: WHATSAPP_URL, Icon: MessageCircle, external: true },
    /* Static .vcf served next to the page (iOS Safari cannot download Blob vCards —
       NEVER convert this to a Blob). No preventDefault: href + download do the work. */
    { label: "Save contact", href: "/Imperial-Decking.vcf", Icon: UserPlus, download: "Imperial-Decking.vcf", onClick: onSaveContact },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 px-gutter pt-5 pb-1.5">
      {actions.map(({ label, href, Icon, primary, external, download, onClick }) => (
        <a
          key={label}
          href={href}
          download={download}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener" : undefined}
          className={cn(
            tileBase,
            primary
              ? "brand-gradient border-transparent text-primary-foreground shadow-brand focus-visible:shadow-[var(--shadow-brand),0_0_0_3px_var(--ring)]"
              : "border-border bg-card-elevated text-foreground hover:border-ring"
          )}
        >
          <Icon
            className={cn("size-[22px]", primary ? "text-primary-foreground" : "text-primary")}
            strokeWidth={2}
          />
          <span
            className={cn(
              "text-center text-[0.7rem] leading-tight font-semibold",
              primary ? "text-primary-foreground" : "text-foreground/85"
            )}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  )
}
