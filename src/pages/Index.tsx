import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle, TrendingUp, Search, Settings, Shield } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const pains = [
  "Деньги приходят, но реальная прибыль — загадка",
  "Отчёты маркетплейса и банка не сходятся",
  "Бухгалтер считает только по выпискам",
  "Комиссии и логистика теряются в расчётах",
  "Возвраты и удержания не учитываются",
  "Нет понимания, какой товар реально приносит деньги",
];

const solutions = [
  { icon: Search, title: "Сверка отчётов", desc: "Сверяем каждую выплату с отчётами WB, Ozon и Маркета" },
  { icon: TrendingUp, title: "Контроль выплат", desc: "Проверяем, что маркетплейс выплатил всё, что должен" },
  { icon: Settings, title: "Учёт комиссий", desc: "Разбираем все комиссии, штрафы и удержания" },
  { icon: CheckCircle, title: "Закрывающие документы", desc: "Готовим все документы для учёта и налоговой" },
  { icon: Shield, title: "Налоговая безопасность", desc: "Следим за лимитами и вовремя оптимизируем налоги" },
];

const steps = [
  { num: "01", title: "Анализ", desc: "Изучаем ваши отчёты и текущий учёт" },
  { num: "02", title: "Поиск ошибок", desc: "Находим расхождения, потери и риски" },
  { num: "03", title: "Настройка", desc: "Выстраиваем прозрачную систему учёта" },
  { num: "04", title: "Сопровождение", desc: "Ведём учёт и контролируем финансы ежемесячно" },
];

const cases = [
  { title: "Расхождение 200 000 ₽", desc: "Нашли ошибку в выплатах WB. Селлер не получил деньги за 3 месяца — помогли вернуть.", tag: "Wildberries" },
  { title: "Снизили налог на 40%", desc: "Перевели клиента на оптимальную систему налогообложения. Экономия — 180 000 ₽ в год.", tag: "Ozon" },
  { title: "Скрытые расходы на 95 000 ₽", desc: "Выявили неучтённые комиссии за хранение и логистику. Клиент пересмотрел ассортимент.", tag: "Яндекс Маркет" },
];

const Index = () => (
  <main>
    {/* HERO */}
    <section className="min-h-screen flex items-center pt-20">
      <div className="container-wide">
        <div className="max-w-4xl">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Wildberries · Ozon · Яндекс Маркет
            </div>
            <h1 className="heading-hero mb-6">
              Бухгалтерия для продавцов
              <br />
              <span className="text-primary">на маркетплейсах</span>
            </h1>
            <p className="text-body-lg max-w-2xl mb-10">
              Сводим продажи, выплаты, комиссии и документы в понятную прибыль.
              Убираем финансовый хаос — показываем реальные цифры.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacts" className="btn-primary gap-2">
                Бесплатный разбор <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                Рассчитать стоимость
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* PAIN */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <h2 className="heading-section mb-4">Знакомо?</h2>
          <p className="text-body-lg">Большинство селлеров не видят реальной картины по деньгам</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border"
            >
              <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={20} />
              <p className="font-medium">{pain}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* SOLUTION */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <h2 className="heading-section mb-4">Что мы делаем</h2>
          <p className="text-body-lg">Разбираем деньги маркетплейсов до последней копейки</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
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

    {/* SERVICES */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="heading-section mb-4">Наши направления</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="card-elevated relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-bl-xl">
              Основное
            </div>
            <h3 className="heading-card mb-3 mt-4">Маркетплейсы</h3>
            <p className="text-muted-foreground mb-6">Сводим отчёты WB, Ozon и Маркета. Считаем реальную прибыль. Контролируем удержания.</p>
            <Link to="/marketplaces" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-sm">
              Подробнее <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div {...fadeUp} className="card-elevated">
            <h3 className="heading-card mb-3">Бухгалтерия для бизнеса</h3>
            <p className="text-muted-foreground mb-6">Отчётность, налоги, зарплата, документы. Для ИП и ООО на любой системе налогообложения.</p>
            <Link to="/accounting" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all text-sm">
              Подробнее <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* HOW WE WORK */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="heading-section mb-4">Как мы работаем</h2>
          <p className="text-body-lg">4 простых шага до прозрачных финансов</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl font-black text-primary/10 mb-4">{step.num}</div>
              <h3 className="heading-card mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CASES */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <h2 className="heading-section mb-4">Кейсы</h2>
            <p className="text-body-lg">Реальные результаты наших клиентов</p>
          </div>
          <Link to="/cases" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
            Все кейсы <ArrowRight size={16} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-elevated"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
                {c.tag}
              </span>
              <h3 className="heading-card mb-3">{c.title}</h3>
              <p className="text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* EXISTING ACCOUNTANT */}
    <section className="section-padding">
      <div className="container-narrow text-center">
        <motion.div {...fadeUp}>
          <h2 className="heading-section mb-6">У вас уже есть бухгалтер?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-10">
            Отлично. Но знает ли он, как работают отчёты Wildberries? Понимает ли разницу между выплатой и прибылью? 
            Мы не заменяем бухгалтера — мы закрываем то, что он не умеет.
          </p>
          <Link to="/contacts" className="btn-primary gap-2">
            Получить бесплатный аудит <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    <FAQ />
    <CTASection variant="dark" />
  </main>
);

export default Index;
