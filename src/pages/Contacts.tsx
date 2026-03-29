import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const contacts = [
  { icon: Phone, label: "Телефон", value: "+7 (963) 447-66-49", href: "tel:+79634476649" },
  { icon: Mail, label: "Email", value: "finsvod@inbox.ru", href: "mailto:finsvod@inbox.ru" },
  { icon: MessageCircle, label: "Telegram", value: "@finnsvod", href: "https://t.me/finnsvod" },
  { icon: MapPin, label: "Адрес", value: "г. Екатеринбург", href: "#" },
];

const Contacts = () => (
  <main>
    <section className="min-h-[50vh] flex items-center pt-20">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl">
          <h1 className="heading-hero mb-6">
            Свяжитесь <span className="text-primary">с нами</span>
          </h1>
          <p className="text-body-lg">Оставьте заявку — мы ответим в течение часа в рабочее время</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div {...fadeUp} className="mb-12">
              <h2 className="heading-section mb-8">Контакты</h2>
              <div className="space-y-6">
                {contacts.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <c.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{c.label}</div>
                      <div className="font-medium group-hover:text-primary transition-colors">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="card-elevated">
                <h3 className="heading-card mb-3">Быстрая связь</h3>
                <p className="text-muted-foreground mb-6">Напишите нам в мессенджер — ответим за 15 минут</p>
                <div className="flex gap-4">
                  <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-3 px-6">
                    Telegram
                  </a>
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-3 px-6">
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Contacts;
