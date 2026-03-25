import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { value: "5+", label: "Лет опыта в e-commerce" },
  { value: "200+", label: "Селлеров на обслуживании" },
  { value: "₽50M+", label: "Оборот клиентов в месяц" },
];

const values = [
  { title: "Прозрачность", desc: "Мы показываем реальные цифры, даже если они неприятные. Только так можно принимать правильные решения." },
  { title: "Специализация", desc: "Мы не универсальная бухгалтерия. Мы глубоко понимаем маркетплейсы и их систему расчётов." },
  { title: "Ответственность", desc: "Мы отвечаем за каждую цифру в отчёте. За каждый рубль налога. За каждый документ." },
];

const About = () => (
  <main>
    <section className="min-h-[50vh] flex items-center pt-20">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-4xl">
          <h1 className="heading-hero mb-6">
            О компании <span className="text-primary">ФИНСВОД</span>
          </h1>
          <p className="text-body-lg max-w-2xl">
            Мы — команда финансистов и бухгалтеров, которая специализируется на маркетплейсах. 
            Разбираем деньги WB, Ozon и Яндекс Маркет.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8"
            >
              <div className="text-5xl font-black text-primary mb-3">{s.value}</div>
              <p className="text-muted-foreground font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="mb-16">
          <h2 className="heading-section mb-4">Наши ценности</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated"
            >
              <h3 className="heading-card mb-3">{v.title}</h3>
              <p className="text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection variant="dark" />
  </main>
);

export default About;
