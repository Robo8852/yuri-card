import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

/* Hand-rolled toast pill (deliberately not sonner). The message sticks around
   while `visible` flips off so the pill fades out with its text intact. */
export function useToast() {
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  })
  const timerRef = useRef<number | undefined>(undefined)

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true })
    window.clearTimeout(timerRef.current) // a new toast resets the 2200ms timer
    timerRef.current = window.setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }))
    }, 2200)
  }, [])

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  return { toast, showToast }
}

export function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      role="status"
      className={cn(
        "fixed bottom-7 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--primary)_78%,transparent)] px-5 py-2.5 text-[0.8rem] font-semibold text-primary-foreground shadow-card backdrop-blur-[12px] transition-[transform,opacity] duration-200 ease-card",
        visible ? "translate-y-0 opacity-100" : "translate-y-[80px] opacity-0"
      )}
    >
      {message}
    </div>
  )
}
