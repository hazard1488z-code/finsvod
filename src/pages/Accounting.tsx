import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Calculator, Users, ClipboardCheck } from "lucide-react";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: FileText, title: "Отчётность", desc: "Сдаём все отчёты вовремя: налоговая, ПФР, ФСС. Любая система налогообложения." },
  { icon: Calculator, title: "Налоги", desc: "Считаем и оптимизируем налоги. Помогаем выбрать лучшую систему." },
  { icon: Users, title: "Зарплата", desc: "Расчёт зарплаты, взносов, больничных и отпускных." },
  { icon: ClipboardCheck, title: "Документы", desc: "Ведение первичной документации, договоры, акты." },
];

const Accounting = () => (
  <main>
    <section className="min-h-[60vh] flex items-center pt-20">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-4xl">
          <h1 className="heading-hero mb-6">
            Бухгалтерия
            <br />
            <span className="text-primary">для бизнеса</span>
          </h1>
          <p className="text-body-lg max-w-2xl mb-10">
            Классическая бухгалтерия для ИП и ООО. Отчётность, налоги, зарплата, документы — всё под контролем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contacts" className="btn-primary gap-2">
              Рассчитать стоимость <ArrowRight size={18} />
            </Link>
            <Link to="/marketplaces" className="btn-secondary">
              Бухгалтерия для маркетплейсов →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="heading-section mb-4">Что входит в обслуживание</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="heading-card mb-3">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow text-center">
        <motion.div {...fadeUp}>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            Продаёте на маркетплейсах? Вам нужна специализированная бухгалтерия, которая учитывает комиссии, удержания и выплаты площадок.
          </p>
          <Link to="/marketplaces" className="btn-primary gap-2">
            Бухгалтерия для маркетплейсов <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </main>
);

export default Accounting;
