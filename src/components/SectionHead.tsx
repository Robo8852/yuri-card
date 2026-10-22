export function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-[18px] text-center">
      <div className="text-[0.72rem] font-semibold tracking-[0.2em] text-primary uppercase">{kicker}</div>
      <h2 className="mt-1 text-[1.4rem] font-bold tracking-[-0.015em]">{title}</h2>
      <div className="rule-gradient mx-auto mt-3 h-[3px] w-11 rounded-[2px]" />
    </div>
  )
}
