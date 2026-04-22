import { useState } from "react"
import Icon from "@/components/ui/icon"

const tabs = [
  {
    id: "borrower",
    label: "Заемщик",
    icon: "TrendingUp",
    steps: [
      { step: "01", title: "Выберите тип заявки", desc: "Быстрая — минимум данных, полная — детальная форма." },
      { step: "02", title: "Заполните форму", desc: "Укажите параметры, загрузите нужные документы." },
      { step: "03", title: "Первичная проверка", desc: "Менеджер анализирует заявку, при необходимости запрашивает уточнения." },
      { step: "04", title: "Получите предложение", desc: "Система сформирует предварительное решение с условиями." },
      { step: "05", title: "Подписание и выплата", desc: "Согласование условий, подписание документов, выдача средств." },
    ],
  },
  {
    id: "investor",
    label: "Инвестор",
    icon: "BarChart2",
    steps: [
      { step: "01", title: "Создайте инвест-профиль", desc: "Укажите бюджет, риск-профиль, регионы и требования." },
      { step: "02", title: "Получайте релевантные сделки", desc: "Система автоматически подбирает подходящие предложения." },
      { step: "03", title: "Изучите детали", desc: "Документы, параметры объекта, анализ рисков — в кабинете." },
      { step: "04", title: "Оставьте интерес", desc: "Пометьте сделку как интересную, задайте вопросы менеджеру." },
      { step: "05", title: "Войдите в сделку", desc: "Подпишите документы и контролируйте исполнение онлайн." },
    ],
  },
  {
    id: "partner",
    label: "Партнёр",
    icon: "Users",
    steps: [
      { step: "01", title: "Подайте заявку на партнёрство", desc: "Заполните форму, ознакомьтесь с условиями программы." },
      { step: "02", title: "Получите кабинет и ссылку", desc: "Персональная реферальная ссылка и доступ к кабинету." },
      { step: "03", title: "Привлекайте клиентов", desc: "Делитесь ссылкой, помогайте клиентам с заявками." },
      { step: "04", title: "Отслеживайте статусы", desc: "Видите все этапы по каждому клиенту в реальном времени." },
      { step: "05", title: "Получайте выплаты", desc: "Вознаграждение начисляется автоматически при завершении сделки." },
    ],
  },
]

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("borrower")
  const active = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как это работает
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Простой и понятный процесс для каждой роли — без лишних шагов.
          </p>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-white/5 text-foreground/60 hover:bg-white/10 hover:text-foreground border border-white/10"
              }`}
            >
              <Icon name={tab.icon as any} size={15} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {active.steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < active.steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-10" />
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 h-full hover:bg-white/8 transition-colors">
                <div className="text-2xl font-bold text-foreground/20 font-mono">{s.step}</div>
                <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                <p className="text-foreground/50 text-xs leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
