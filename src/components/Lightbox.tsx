import { useEffect, useRef } from "react"

import type { Photo } from "@/components/Gallery"

/* Native <dialog> on purpose (not shadcn Dialog): the ref drives showModal()/close(),
   and we listen for the native `close` event so Esc keeps React state in sync. */
export function Lightbox({ photo, onClose }: { photo: Photo | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (photo && !dialog.open) dialog.showModal()
    else if (!photo && dialog.open) dialog.close()
  }, [photo])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.addEventListener("close", onClose)
    return () => dialog.removeEventListener("close", onClose)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      aria-label="Job photo, full size"
      // click anywhere (including backdrop) closes; Esc is handled natively
      onClick={() => dialogRef.current?.close()}
      className="m-auto max-h-[92dvh] max-w-[min(94vw,900px)] cursor-zoom-out border-none bg-transparent p-0 backdrop:bg-[hsl(0_0%_0%/.85)] backdrop:backdrop-blur-[6px]"
    >
      {photo && (
        <figure>
          <img
            src={`/work/${photo.n}.webp`}
            alt={photo.caption}
            className="mx-auto block max-h-[84dvh] max-w-full rounded-card shadow-card"
          />
          <figcaption className="mt-2 text-center text-[0.85rem] text-white/85">{photo.caption}</figcaption>
        </figure>
      )}
    </dialog>
  )
}
