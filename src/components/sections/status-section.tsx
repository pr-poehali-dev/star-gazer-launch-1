const statuses = [
  { label: "Создано", color: "bg-slate-400", textColor: "text-slate-400" },
  { label: "На первичной проверке", color: "bg-blue-400", textColor: "text-blue-400" },
  { label: "Нужны уточнения", color: "bg-amber-400", textColor: "text-amber-400" },
  { label: "Дозапрос документов", color: "bg-orange-400", textColor: "text-orange-400" },
  { label: "Предварительно одобрено", color: "bg-lime-400", textColor: "text-lime-400" },
  { label: "На согласовании условий", color: "bg-yellow-400", textColor: "text-yellow-400" },
  { label: "В работе", color: "bg-emerald-400", textColor: "text-emerald-400" },
  { label: "Завершено", color: "bg-green-500", textColor: "text-green-400" },
]

export function StatusSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Прозрачные статусы на каждом этапе
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Вы всегда знаете, где находится ваша заявка и что нужно сделать дальше.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {statuses.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center gap-3 text-center">
                <div className={`relative w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold text-sm z-10`}>
                  {i + 1}
                </div>
                <span className={`text-xs font-medium ${s.textColor} leading-tight`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statuses.slice(0, 4).map((s) => (
            <div key={s.label} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl p-3">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.color}`} />
              <span className="text-sm text-foreground/70">{s.label}</span>
            </div>
          ))}
          {statuses.slice(4).map((s) => (
            <div key={s.label} className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-xl p-3">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.color}`} />
              <span className="text-sm text-foreground/70">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
