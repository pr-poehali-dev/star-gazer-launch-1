import { useState } from "react"
import Icon from "@/components/ui/icon"

const faqs = [
  {
    q: "Нужно ли регистрироваться, чтобы подать заявку?",
    a: "Быструю заявку можно оставить без регистрации. Для доступа к личному кабинету, документам и статусам потребуется создать аккаунт — это занимает менее 2 минут.",
  },
  {
    q: "Чем быстрая заявка отличается от полной?",
    a: "Быстрая заявка — это минимальный набор данных (контакт, сумма, цель). Её рассматривают для первичного анализа. Полная заявка включает документы и параметры объекта — рассматривается быстрее и точнее.",
  },
  {
    q: "Как работает инвест-профиль?",
    a: "Вы указываете параметры: бюджет, риск-профиль, регионы, сроки, требования. Система автоматически подбирает сделки, соответствующие вашим критериям, и уведомляет о новых.",
  },
  {
    q: "Что входит в партнёрскую программу?",
    a: "Партнёр получает реферальную ссылку, личный кабинет с CRM по клиентам, статусы заявок, прозрачные выплаты, маркетинговые материалы и доступ к поддержке.",
  },
  {
    q: "Что такое сервис «Гарант» и зачем он нужен?",
    a: "«Гарант» — профессиональное сопровождение сделки: подготовка и проверка документов, регистрация, безопасные расчёты (аккредитив/эскроу), подписание и контроль этапов. Для тех, кто хочет уверенности на каждом шаге.",
  },
  {
    q: "Как я узнаю о статусе моей заявки?",
    a: "Все изменения статуса отображаются в личном кабинете и приходят в виде уведомлений. Вы видите текущий этап, что нужно сделать дальше и комментарии менеджера.",
  },
  {
    q: "Мои данные и документы защищены?",
    a: "Документы хранятся в защищённом хранилище с разграниченным доступом. К вашим данным имеют доступ только вы и назначенный менеджер.",
  },
  {
    q: "Как связаться с менеджером?",
    a: "Через личный кабинет — в разделе «Комментарии» или «Поддержка». Также доступны Telegram и WhatsApp, контакты указаны в футере.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Частые вопросы
          </h2>
          <p className="text-foreground/60 text-lg">Ответы на самое важное</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/7 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-foreground text-sm leading-snug">{faq.q}</span>
                <Icon
                  name="ChevronDown"
                  size={16}
                  className={`text-foreground/40 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-foreground/65 text-sm leading-relaxed border-t border-white/8 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
