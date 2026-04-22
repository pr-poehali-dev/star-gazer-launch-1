import Icon from "@/components/ui/icon"
import { MagneticButton } from "@/components/magnetic-button"

export function BorrowerSection() {
  return (
    <section id="borrower" className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-300 text-sm">
              <Icon name="TrendingUp" size={14} />
              Для заемщиков
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
              Два формата входа — выберите удобный
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Можно начать с простой заявки и дополнить её позже, или сразу пройти полный путь — система адаптируется под вас.
            </p>
            <MagneticButton variant="primary" className="flex items-center gap-2">
              <Icon name="Send" size={16} />
              Подать заявку
            </MagneticButton>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Быстрая заявка</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Минимум полей — имя, контакт, сумма и цель. Менеджер свяжется и уточнит детали.
                </p>
              </div>
              <ul className="space-y-2">
                {["5 минут на заполнение", "Без лишних документов", "Быстрый первичный ответ"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                    <Icon name="Check" size={12} className="text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-primary/25 rounded-2xl p-6 space-y-4 hover:bg-white/8 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Icon name="ClipboardList" size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-1">Полная заявка</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  Развёрнутая форма с документами, параметрами объекта и условиями. Ускоряет рассмотрение.
                </p>
              </div>
              <ul className="space-y-2">
                {["Детальный анализ сразу", "Загрузка документов", "Точный подбор условий"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/60">
                    <Icon name="Check" size={12} className="text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
