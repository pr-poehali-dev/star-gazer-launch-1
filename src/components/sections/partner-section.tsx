import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"

const cabinetItems = [
  { icon: "Link", label: "Реферальная ссылка", value: "partner.link/ref-***** " },
  { icon: "Users", label: "Клиентов", value: "24" },
  { icon: "FileCheck", label: "Активных заявок", value: "7" },
  { icon: "Activity", label: "На рассмотрении", value: "3" },
  { icon: "Banknote", label: "К выплате", value: "48 400 ₽" },
  { icon: "BookOpen", label: "Материалы", value: "Доступны" },
  { icon: "HeadphonesIcon", label: "Поддержка", value: "Онлайн" },
  { icon: "CheckCircle", label: "Завершено сделок", value: "12" },
]

export function PartnerSection() {
  return (
    <section id="partner" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/25 text-purple-300 text-sm">
              <Icon name="Users" size={14} />
              Для партнёров
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Партнёрский кабинет — ваш мини-CRM
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Всё для работы в одном месте: ведите клиентов, отслеживайте заявки, получайте выплаты и пользуйтесь готовыми материалами.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton variant="primary" className="flex items-center gap-2">
                <Icon name="UserCheck" size={16} />
                Стать партнёром
              </MagneticButton>
              <MagneticButton variant="secondary" className="flex items-center gap-2">
                <Icon name="FileText" size={16} />
                Получить условия
              </MagneticButton>
            </div>
          </div>

          <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-semibold">Партнёрский кабинет</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">Активен</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cabinetItems.map((item) => (
                <div key={item.label} className="bg-white/5 rounded-xl p-3 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={item.icon as any} size={14} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-foreground/40 text-xs">{item.label}</div>
                    <div className="text-foreground text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
