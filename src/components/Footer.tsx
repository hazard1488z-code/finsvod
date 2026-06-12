import { Link } from "react-router-dom";
import { MessageCircle, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container-wide py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-1 mb-4">
            <span className="text-2xl font-black tracking-tight text-foreground">ФИНСВОД</span>
            <span className="text-primary text-3xl font-black leading-none">.</span>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
            Профессиональное бухгалтерское сопровождение бизнеса. Работаем с ИП и ООО на любой системе налогообложения — удалённо по всей России.
          </p>
          <div className="flex gap-3">
            <a
              href="https://t.me/urteam_k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 text-sm font-medium"
            >
              <MessageCircle size={16} />
              Telegram
            </a>
            <a
              href="https://wa.me/79634476649"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200 text-sm font-medium"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-5 text-foreground">Услуги</h4>
          <div className="flex flex-col gap-3">
            <Link to="/accounting" className="text-muted-foreground hover:text-primary transition-colors text-sm">Бухгалтерское сопровождение</Link>
            <Link to="/marketplaces" className="text-muted-foreground hover:text-primary transition-colors text-sm">Маркетплейсы</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">Цены и тарифы</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-5 text-foreground">Компания</h4>
          <div className="flex flex-col gap-3">
            <Link to="/cases" className="text-muted-foreground hover:text-primary transition-colors text-sm">Кейсы</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">О компании</Link>
            <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors text-sm">Контакты</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground/60 text-sm">
        <span>© 2025 ФИНСВОД. Все права защищены.</span>
        <span>Бухгалтерское сопровождение по всей России</span>
      </div>
    </div>
  </footer>
);

export default Footer;
