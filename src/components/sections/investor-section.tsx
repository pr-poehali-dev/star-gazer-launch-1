import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"

const profileFields = [
  { label: "Подход к риску", value: "Умеренный" },
  { label: "Бюджет", value: "от 10 млн ₽" },
  { label: "Размер сделки", value: "5–50 млн ₽" },
  { label: "Регионы", value: "Москва, СПб, Юг" },
  { label: "Срок вложений", value: "12–36 месяцев" },
  { label: "Требования", value: "Залоговое обеспечение" },
]

const benefits = [
  {
    icon: "Target",
    title: "Только релевантные сделки",
    desc: "Никакого шума — только предложения, соответствующие вашим критериям.",
  },
  {
    icon: "Sliders",
    title: "Гибкая настройка критериев",
    desc: "Обновляйте профиль в любой момент, меняйте параметры и приоритеты.",
  },
  {
    icon: "MessageSquare",
    title: "Понятная коммуникация",
    desc: "Все переговоры, документы и комментарии — в одном месте.",
  },
]

export function InvestorSection() {
  return (
    <section id="investor" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-sm">
              <Icon name="BarChart2" size={14} />
              Для инвесторов
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Инвест-профиль, который работает на вас
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Настройте параметры один раз — и получайте только те сделки, которые соответствуют вашей стратегии.
            </p>
            <MagneticButton variant="primary" className="flex items-center gap-2">
              <Icon name="UserPlus" size={16} />
              Сформировать инвест-профиль
            </MagneticButton>
          </div>

          <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-semibold">Ваш инвест-профиль</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Активен</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {profileFields.map((f) => (
                <div key={f.label} className="bg-white/5 rounded-xl p-3 space-y-1">
                  <div className="text-foreground/40 text-xs">{f.label}</div>
                  <div className="text-foreground text-sm font-medium">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <Icon name={b.icon as any} size={20} className="text-emerald-400" />
              </div>
              <h3 className="font-semibold text-foreground">{b.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
