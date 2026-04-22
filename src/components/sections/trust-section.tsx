import Icon from "@/components/ui/icon"

const trustItems = [
  {
    icon: "Eye",
    title: "Прозрачный процесс",
    desc: "Каждый этап фиксируется в системе — статусы, документы, комментарии. Никаких непонятных пауз.",
  },
  {
    icon: "FolderLock",
    title: "Контроль документов",
    desc: "Все документы загружаются в защищённое хранилище. Доступ только у участников сделки.",
  },
  {
    icon: "UserCheck",
    title: "Персональный менеджер",
    desc: "К каждой заявке прикреплён менеджер — он ведёт вас от первого обращения до закрытия.",
  },
  {
    icon: "LayoutDashboard",
    title: "Личный кабинет",
    desc: "Всё в одном интерфейсе: статус, задачи, переписка, документы и следующие шаги.",
  },
]

export function TrustSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Надёжность через прозрачность
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto">
            Доверие строится не на обещаниях, а на понятном процессе, контроле и доступе к информации в реальном времени.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:bg-white/8 transition-colors"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center">
                <Icon name={item.icon as any} size={22} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
