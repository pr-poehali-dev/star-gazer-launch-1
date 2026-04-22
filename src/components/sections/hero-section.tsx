import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

interface HeroSectionProps {
  onScrollTo: (id: string) => void
}

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-foreground/80 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Система работает в реальном времени
          </div>

          <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
            Финансирование, инвестиционные сделки и партнёрская программа —<br />
            <span className="text-foreground/70">в одной системе</span>
          </h1>

          <p className="text-foreground/70 text-lg md:text-xl leading-relaxed max-w-xl">
            Подайте заявку на финансирование, создайте профиль инвестора, подключитесь к партнёрской программе или запустите сопровождение сделки через сервис «Гарант».
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <MagneticButton
              variant="primary"
              className="flex items-center justify-center gap-2 text-base py-3 px-6"
              onClick={() => onScrollTo("borrower")}
            >
              <Icon name="TrendingUp" size={18} />
              Мне нужно финансирование
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              className="flex items-center justify-center gap-2 text-base py-3 px-6"
              onClick={() => onScrollTo("investor")}
            >
              <Icon name="BarChart2" size={18} />
              Я инвестор
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              className="flex items-center justify-center gap-2 text-base py-3 px-6"
              onClick={() => onScrollTo("partner")}
            >
              <Icon name="Users" size={18} />
              Я партнёр
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              className="flex items-center justify-center gap-2 text-base py-3 px-6"
              onClick={() => onScrollTo("garant")}
            >
              <Icon name="ShieldCheck" size={18} />
              Нужен Гарант
            </MagneticButton>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-2">
            {[
              { icon: "Zap", text: "Быстрый вход без длинной анкеты" },
              { icon: "FileText", text: "Понятные статусы, документы и этапы" },
              { icon: "LayoutDashboard", text: "Личный кабинет для контроля" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-foreground/70 text-sm">
                <Icon name={item.icon as any} size={16} className="text-primary shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 space-y-4">
            <div className="flex gap-2 border-b border-white/10 pb-3">
              {["Заемщик", "Инвестор", "Партнёр"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-sm px-3 py-1 rounded-md ${i === 0 ? "bg-primary text-white" : "text-foreground/60"}`}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <div className="text-foreground/50 text-xs uppercase tracking-wider">Заявка #2847</div>
              <div className="flex items-center justify-between">
                <span className="text-foreground font-medium">На согласовании условий</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  В процессе
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Создано", done: true },
                  { label: "Первичная проверка", done: true },
                  { label: "Дозапрос документов", done: true },
                  { label: "Предварительно одобрено", done: true },
                  { label: "На согласовании условий", active: true },
                  { label: "В работе", done: false },
                  { label: "Завершено", done: false },
                ].map((step) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        step.done ? "bg-emerald-400" : step.active ? "bg-amber-400 animate-pulse" : "bg-white/20"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        step.active ? "text-foreground font-medium" : step.done ? "text-foreground/60" : "text-foreground/30"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 space-y-2">
              <div className="text-foreground/50 text-xs uppercase tracking-wider">Документы</div>
              {["Паспорт.pdf", "Выписка из ЕГРН.pdf", "Договор_проект.docx"].map((doc) => (
                <div key={doc} className="flex items-center gap-2 text-sm text-foreground/70">
                  <Icon name="FileText" size={13} className="text-primary" />
                  {doc}
                </div>
              ))}
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-start gap-2">
              <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground/80">Следующий шаг: подписать предложение</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
