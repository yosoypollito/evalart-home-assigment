export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-10 py-10">
      {children}
    </section>
  )
}