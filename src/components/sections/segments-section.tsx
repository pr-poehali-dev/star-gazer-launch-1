import Icon from "@/components/ui/icon"

interface SegmentsSectionProps {
  onScrollTo: (id: string) => void
}

const segments = [
  {
    id: "borrower",
    icon: "TrendingUp",
    badge: "Заемщик",
    color: "from-blue-500/10 to-blue-600/5",
    borderColor: "border-blue-500/20",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    title: "Нужно финансирование?",
    description:
      "Подайте быструю заявку за 5 минут или заполните полную форму для точного подбора условий. Статус заявки всегда у вас в кабинете.",
    cta: "Подать заявку",
    features: ["Быстрая или полная форма", "Статус в реальном времени", "Документы онлайн"],
  },
  {
    id: "investor",
    icon: "BarChart2",
    badge: "Инвестор",
    color: "from-emerald-500/10 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    title: "Хотите инвестировать?",
    description:
      "Создайте инвест-профиль: укажите бюджет, риск-профиль, регионы, сроки. Система подберёт только релевантные сделки по вашим критериям.",
    cta: "Создать профиль",
    features: ["Только релевантные сделки", "Гибкие критерии", "Удобная коммуникация"],
  },
  {
    id: "partner",
    icon: "Users",
    badge: "Партнёр",
    color: "from-purple-500/10 to-purple-600/5",
    borderColor: "border-purple-500/20",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    title: "Хотите зарабатывать?",
    description:
      "Получите кабинет с реферальной ссылкой, CRM по клиентам, статусами, выплатами и материалами. Всё для работы в одном месте.",
    cta: "Стать партнёром",
    features: ["Реферальная ссылка", "Прозрачные выплаты", "Кабинет-CRM"],
  },
  {
    id: "garant",
    icon: "ShieldCheck",
    badge: "Гарант",
    color: "from-amber-500/10 to-amber-600/5",
    borderColor: "border-amber-500/20",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    title: "Нужно сопровождение?",
    description:
      "«Гарант» — полный контроль сделки: документы, регистрация, безопасные расчёты, подписание, этапы. Профессиональное сопровождение от начала до конца.",
    cta: "Заказать Гарант",
    features: ["Безопасные расчёты", "Регистрация сделки", "Контроль этапов"],
  },
]

export function SegmentsSection({ onScrollTo }: SegmentsSectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Выберите свой сценарий
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Система охватывает четыре роли. Каждая — со своим входом, процессом и результатом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg) => (
            <div
              key={seg.id}
              className={`bg-gradient-to-b ${seg.color} border ${seg.borderColor} rounded-2xl p-6 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon name={seg.icon as any} size={20} className="text-foreground/80" />
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${seg.badgeColor}`}>
                  {seg.badge}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{seg.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{seg.description}</p>
              </div>

              <ul className="space-y-1.5">
                {seg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                    <Icon name="Check" size={13} className="text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onScrollTo(seg.id)}
                className="mt-auto w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-foreground text-sm font-medium transition-all duration-200"
              >
                {seg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
