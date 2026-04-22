import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

const ctaItems = [
  {
    icon: "TrendingUp",
    badge: "Заемщик",
    title: "Нужно финансирование",
    desc: "Подайте быструю или полную заявку",
    cta: "Подать заявку",
    color: "border-blue-500/25 bg-blue-500/5",
    badgeColor: "bg-blue-500/15 text-blue-300",
    id: "borrower",
  },
  {
    icon: "BarChart2",
    badge: "Инвестор",
    title: "Хочу инвестировать",
    desc: "Создайте профиль и получайте сделки",
    cta: "Создать профиль",
    color: "border-emerald-500/25 bg-emerald-500/5",
    badgeColor: "bg-emerald-500/15 text-emerald-300",
    id: "investor",
  },
  {
    icon: "Users",
    badge: "Партнёр",
    title: "Хочу быть партнёром",
    desc: "Кабинет, ссылка и прозрачные выплаты",
    cta: "Стать партнёром",
    color: "border-purple-500/25 bg-purple-500/5",
    badgeColor: "bg-purple-500/15 text-purple-300",
    id: "partner",
  },
  {
    icon: "ShieldCheck",
    badge: "Гарант",
    title: "Нужно сопровождение сделки",
    desc: "Документы, расчёты, подписание",
    cta: "Заказать Гарант",
    color: "border-amber-500/25 bg-amber-500/5",
    badgeColor: "bg-amber-500/15 text-amber-300",
    id: "garant",
  },
]

interface FinalCtaSectionProps {
  onScrollTo: (id: string) => void
}

export function FinalCtaSection({ onScrollTo }: FinalCtaSectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Выберите свой путь
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Каждый сценарий — отдельный, понятный вход. Начните прямо сейчас.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ctaItems.map((item) => (
            <div
              key={item.id}
              className={`border ${item.color} rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon name={item.icon as any} size={18} className="text-foreground/80" />
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.badgeColor}`}>{item.badge}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-foreground/55 text-sm">{item.desc}</p>
              </div>
              <button
                onClick={() => onScrollTo(item.id)}
                className="mt-auto w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-foreground text-sm font-medium transition-all duration-200"
              >
                {item.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
