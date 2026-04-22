import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"

const services = [
  {
    icon: "ShieldCheck",
    title: "Провести сделку",
    desc: "Полное сопровождение сделки под ключ — от анализа до закрытия.",
  },
  {
    icon: "FileSignature",
    title: "Регистрация сделки",
    desc: "Подготовка и подача документов в Росреестр, МФЦ и другие органы.",
  },
  {
    icon: "Search",
    title: "Подготовка и проверка документов",
    desc: "Юридическая экспертиза, проверка чистоты и комплектности пакета.",
  },
  {
    icon: "Landmark",
    title: "Безопасные расчёты",
    desc: "Аккредитив, эскроу или безопасная ячейка — ваши средства защищены.",
  },
  {
    icon: "PenLine",
    title: "Подписание документов",
    desc: "Организация и контроль подписания сторонами в удобном формате.",
  },
]

export function GarantSection() {
  return (
    <section id="garant" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-300 text-sm">
              <Icon name="ShieldCheck" size={14} />
              Сервис Гарант
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Профессиональное сопровождение сделки
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              «Гарант» — это отдельный сервис, который берёт на себя все юридические, документальные и расчётные вопросы. Вы контролируете каждый этап через личный кабинет.
            </p>
            <MagneticButton variant="primary" className="flex items-center gap-2">
              <Icon name="ShieldCheck" size={16} />
              Заказать сопровождение
            </MagneticButton>
          </div>

          <div className="space-y-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/8 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                  <Icon name={s.icon as any} size={17} className="text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-foreground/30 text-xs font-mono">0{i + 1}</span>
                    <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                  </div>
                  <p className="text-foreground/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
