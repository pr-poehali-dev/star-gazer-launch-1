import Icon from "@/components/ui/icon"

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-foreground/15 flex items-center justify-center">
                <span className="font-bold text-foreground text-lg">Ф</span>
              </div>
              <span className="font-semibold text-foreground text-lg tracking-tight">ФинансСистема</span>
            </div>
            <p className="text-foreground/55 text-sm leading-relaxed max-w-sm">
              Финансирование, инвестиционные сделки и партнёрская программа — в одной системе. Прозрачно, понятно, под контролем.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm transition-colors"
              >
                <Icon name="Phone" size={14} />
                +7 (495) 000-00-00
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm transition-colors"
              >
                <Icon name="Mail" size={14} />
                info@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 text-foreground/70 text-sm transition-all"
              >
                <Icon name="Send" size={13} />
                Telegram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/15 border border-white/10 text-foreground/70 text-sm transition-all"
              >
                <Icon name="MessageCircle" size={13} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Разделы</h4>
            <ul className="space-y-2.5">
              {["Заемщикам", "Инвесторам", "Партнёрам", "Сервис Гарант", "Личный кабинет", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/55 hover:text-foreground text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Документы</h4>
            <ul className="space-y-2.5">
              {["Политика конфиденциальности", "Согласие на обработку данных", "Пользовательское соглашение", "Реквизиты"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/55 hover:text-foreground text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 space-y-3">
          <p className="text-foreground/35 text-xs leading-relaxed max-w-4xl">
            ООО «Название компании» | ИНН 0000000000 | ОГРН 0000000000000 | Юридический адрес: г. Москва, ул. Примерная, д. 1
          </p>
          <p className="text-foreground/30 text-xs leading-relaxed max-w-4xl">
            Информация на сайте не является публичной офертой. Все условия финансирования определяются индивидуально. Услуги предоставляются в соответствии с действующим законодательством РФ.
          </p>
          <p className="text-foreground/25 text-xs">© {new Date().getFullYear()} ФинансСистема. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
