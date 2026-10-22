import { useCallback, useState } from 'react'

import { AboutCompany } from '@/components/AboutCompany'
import { AvatarRing } from '@/components/AvatarRing'
import { ClosingCta } from '@/components/ClosingCta'
import { Footer } from '@/components/Footer'
import { Gallery, type Photo } from '@/components/Gallery'
import { Hero } from '@/components/Hero'
import { Identity } from '@/components/Identity'
import { Lightbox } from '@/components/Lightbox'
import { PrimaryCtas } from '@/components/PrimaryCtas'
import { QuickActions } from '@/components/QuickActions'
import { ServiceArea } from '@/components/ServiceArea'
import { Services } from '@/components/Services'
import { Toast, useToast } from '@/components/Toast'
import { SITE_URL } from '@/lib/site'

/* Share — three tiers: native sheet, async clipboard, execCommand fallback. */
async function shareCard(showToast: (message: string) => void) {
  const url = SITE_URL
  const data = {
    title: 'Yuri — Redwood fences, gates, decks & pergolas',
    text: 'Yuri builds redwood fences, gates, decks and pergolas. Based in Sonora, CA.',
    url,
  }
  if (navigator.share) {
    try {
      await navigator.share(data)
      return
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return // user dismissed the sheet
    }
  }
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url)
      showToast('Link copied!')
      return
    } catch {
      // insecure context or permission denied — fall through
    }
  }
  let copied = false
  try {
    const ta = document.createElement('textarea')
    ta.value = url
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    copied = document.execCommand('copy')
    ta.remove()
  } catch {
    copied = false
  }
  showToast(copied ? 'Link copied!' : url)
}

function App() {
  const { toast, showToast } = useToast()
  const [photo, setPhoto] = useState<Photo | null>(null)

  const handleShare = useCallback(() => {
    shareCard(showToast).catch(() => {}) // swallow rejections — never unhandled
  }, [showToast])

  const handleSaveContact = useCallback(() => {
    showToast('Contact ready — open the download')
  }, [showToast])

  const closeLightbox = useCallback(() => setPhoto(null), [])

  return (
    <>
      <div className="relative mx-auto min-h-dvh max-w-[480px] bg-card shadow-phone">
        <Hero />
        <AvatarRing />
        <Identity />
        <QuickActions onSaveContact={handleSaveContact} />
        <PrimaryCtas onShare={handleShare} />
        <AboutCompany />
        <Services />
        <ServiceArea />
        <Gallery onOpen={setPhoto} />
        <ClosingCta />
        <Footer />
      </div>
      <Lightbox photo={photo} onClose={closeLightbox} />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}

export default App
