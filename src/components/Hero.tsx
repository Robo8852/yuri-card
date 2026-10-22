/* Real job photo (01, hillside pergola). The pb-16 equivalent here is the image's own
   height: AvatarRing's -mt-16 overlaps the bottom of this band, and the hero-fade scrim
   fades the photo into the card behind the ring. No text sits in the band, so nothing
   hides behind the ring. */
export function Hero() {
  return (
    <div className="hero-fade relative">
      <img
        className="block aspect-[2.2/1] w-full object-cover"
        src="/hero.webp"
        alt="Redwood pergola on a hillside, built by George"
        fetchPriority="high"
      />
    </div>
  )
}
