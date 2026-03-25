import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container-wide section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-black mb-4 text-background">
            ФИНСВОД<span className="text-primary">.</span>
          </h3>
          <p className="text-background/60 max-w-md leading-relaxed">
            Разбираем деньги маркетплейсов. Сводим отчёты, выплаты и комиссии в понятную прибыль.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors text-sm font-medium">
              Telegram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-primary transition-colors text-sm font-medium">
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-background">Услуги</h4>
          <div className="flex flex-col gap-3">
            <Link to="/marketplaces" className="text-background/60 hover:text-primary transition-colors text-sm">Маркетплейсы</Link>
            <Link to="/accounting" className="text-background/60 hover:text-primary transition-colors text-sm">Бухгалтерия</Link>
            <Link to="/pricing" className="text-background/60 hover:text-primary transition-colors text-sm">Цены</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-background">Компания</h4>
          <div className="flex flex-col gap-3">
            <Link to="/cases" className="text-background/60 hover:text-primary transition-colors text-sm">Кейсы</Link>
            <Link to="/about" className="text-background/60 hover:text-primary transition-colors text-sm">О компании</Link>
            <Link to="/contacts" className="text-background/60 hover:text-primary transition-colors text-sm">Контакты</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 mt-16 pt-8 text-background/40 text-sm">
        © 2025 ФИНСВОД. Все права защищены.
      </div>
    </div>
  </footer>
);

export default Footer;
