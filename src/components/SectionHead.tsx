export function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-[18px] text-center">
      <div className="font-mono text-[0.72rem] font-medium tracking-[0.12em] text-primary uppercase">{kicker}</div>
      <h2 className="mt-2 text-[1.75rem] leading-[1.05] font-extrabold tracking-[-0.035em]">{title}</h2>
    </div>
  )
}
