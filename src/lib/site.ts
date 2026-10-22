// Canonical public URL of the card. Used by the Share button so shared links never
// leak per-deployment Vercel URLs. Update when a custom domain is attached.
export const SITE_URL = "https://imperialdecking.vercel.app"

// Confirmed number (from Yuri's WhatsApp contact). Whether this is the number he wants
// published is still a TODO, see NOTES.md.
export const PHONE_E164 = "+14159965183"
export const PHONE_DISPLAY = "(415) 996-5183"
export const WHATSAPP_URL = "https://wa.me/14159965183"

export const PHOTO_MESSAGE = "Hi Yuri, here's a photo of my space:"

// iOS wants `sms:number&body=`, Android/RFC 5724 want `sms:number?body=`.
// iPadOS reports itself as MacIntel, hence the maxTouchPoints check.
export function smsHref(body: string) {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  return `sms:${PHONE_E164}${isIOS ? "&" : "?"}body=${encodeURIComponent(body)}`
}

export function whatsappHref(text: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
