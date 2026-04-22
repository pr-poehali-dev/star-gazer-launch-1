import Icon from "@/components/ui/icon"

const cards = [
  {
    icon: "Activity",
    title: "Статус заявки",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    content: (
      <div className="flex items-center gap-2 mt-3">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-sm text-foreground/70">На согласовании условий</span>
      </div>
    ),
  },
  {
    icon: "GitBranch",
    title: "Таймлайн",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    content: (
      <div className="space-y-2 mt-3">
        {["Создано", "Проверка", "Одобрено"].map((s, i) => (
          <div key={s} className="flex items-center gap-2 text-xs text-foreground/60">
            <div className={`w-1.5 h-1.5 rounded-full ${i < 2 ? "bg-emerald-400" : "bg-white/20"}`} />
            {s}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "FolderOpen",
    title: "Документы",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    content: (
      <div className="space-y-1.5 mt-3">
        {["Паспорт.pdf", "Договор.docx"].map((d) => (
          <div key={d} className="flex items-center gap-2 text-xs text-foreground/60">
            <Icon name="FileText" size={11} className="text-purple-400" />
            {d}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: "MessageCircle",
    title: "Комментарии",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    content: (
      <div className="mt-3 bg-white/5 rounded-lg p-2.5 text-xs text-foreground/60 leading-relaxed">
        «Нужна справка о доходах за последние 6 месяцев»
      </div>
    ),
  },
  {
    icon: "Bell",
    title: "Уведомления",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    content: (
      <div className="mt-3 flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">3</span>
        <span className="text-xs text-foreground/60">новых события</span>
      </div>
    ),
  },
  {
    icon: "ArrowRightCircle",
    title: "Следующий шаг",
    color: "text-primary",
    bg: "bg-primary/10",
    content: (
      <div className="mt-3 text-xs text-foreground/70 leading-relaxed">
        Загрузите справку о доходах, чтобы перейти к финальному согласованию.
      </div>
    ),
  },
]

export function CabinetSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Личный кабинет
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Все данные, документы и коммуникация — в одном месте. Никаких писем и звонков «а что там с заявкой».
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center`}>
                  <Icon name={card.icon as any} size={16} className={card.color} />
                </div>
                <span className="font-medium text-foreground text-sm">{card.title}</span>
              </div>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
