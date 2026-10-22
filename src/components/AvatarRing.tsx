/* Plain div + img on purpose — do NOT swap in shadcn Avatar.
   Portrait (photo 13, George cutting deck boards), pre-cropped square around his face
   to public/imperial-decking.webp, so object-cover keeps the face centred in the circle. */
export function AvatarRing() {
  return (
    <div className="avatar-ring relative z-3 mx-auto -mt-16 h-36 w-36 rounded-full p-1 shadow-card">
      <img
        className="block h-full w-full rounded-full border-[3px] border-card object-cover"
        src="/imperial-decking.webp"
        alt="George at work on a redwood deck"
      />
    </div>
  )
}
