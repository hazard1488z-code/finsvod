import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, XCircle, CheckCircle, BarChart3, FileCheck, ShieldCheck, Eye } from "lucide-react";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const problems = [
  "Не знает, как устроены отчёты маркетплейсов",
  "Считает прибыль по банковским выпискам",
  "Не видит комиссии, логистику и удержания",
  "Не сверяет выплаты с реальными данными",
  "Не понимает разницу между выручкой и выплатой",
];

const services = [
  { icon: BarChart3, title: "Сводим отчёты", desc: "WB, Ozon, Яндекс Маркет — собираем все данные в единую картину" },
  { icon: Eye, title: "Считаем реальную прибыль", desc: "Показываем, сколько вы зарабатываете после всех удержаний" },
  { icon: FileCheck, title: "Проверяем удержания", desc: "Комиссии, штрафы, логистика, хранение — всё под контролем" },
  { icon: ShieldCheck, title: "Контролируем документы", desc: "Закрывающие документы, счета-фактуры, акты сверки" },
];

const results = [
  { value: "100%", label: "Прозрачная прибыль по каждому товару" },
  { value: "0", label: "Ошибок в отчётах и выплатах" },
  { value: "0", label: "Рисков при налоговой проверке" },
];

const Marketplaces = () => (
  <main>
    <section className="min-h-[70vh] flex items-center pt-20">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
            Wildberries · Ozon · Яндекс Маркет
          </div>
          <h1 className="heading-hero mb-6">
            Разбираем деньги
            <br />
            <span className="text-primary">маркетплейсов</span>
          </h1>
          <p className="text-body-lg max-w-2xl mb-10">
            Сводим продажи, выплаты, комиссии и документы — показываем реальную прибыль. Не по банку, а по факту.
          </p>
          <Link to="/contacts" className="btn-primary gap-2">
            Бесплатный разбор отчёта <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* WHY REGULAR ACCOUNTANT FAILS */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <h2 className="heading-section mb-4">Почему обычный бухгалтер не справляется</h2>
          <p className="text-body-lg">Маркетплейсы — это не просто торговля. Это сложная система выплат, удержаний и комиссий</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border"
            >
              <XCircle className="text-destructive shrink-0 mt-0.5" size={20} />
              <p className="font-medium">{p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT WE DO */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <h2 className="heading-section mb-4">Что мы делаем</h2>
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

    {/* RESULTS */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="heading-section mb-4">Результат</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8"
            >
              <div className="text-5xl md:text-6xl font-black text-primary mb-4">{r.value}</div>
              <p className="text-muted-foreground font-medium">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </main>
);

export default Marketplaces;
