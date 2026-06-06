import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, FileText, Calculator, Users, ClipboardCheck,
  Shield, BadgeCheck, TrendingDown, Scale, Clock, Store,
} from "lucide-react";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

function sc(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };
}

const services = [
  {
    icon: FileText,
    title: "Бухгалтерская отчётность",
    desc: "Сдаём все отчёты вовремя: налоговая (ФНС), Социальный фонд (СФР), Росстат. Работаем со всеми системами: УСН, ОСНО, ПСН, ЕСХН.",
    items: ["Декларации УСН, НДС, налог на прибыль", "Отчёты СФР: ЕФС-1, РСВ", "Бухгалтерский баланс и отчёт о прибылях"],
  },
  {
    icon: Calculator,
    title: "Налоговое планирование",
    desc: "Анализируем вашу структуру и помогаем законно снизить налоговую нагрузку. Подбираем оптимальный налоговый режим.",
    items: ["Выбор системы налогообложения", "Оптимизация расходов и вычетов", "Профилактика налоговых рисков"],
  },
  {
    icon: Users,
    title: "Зарплата и кадры",
    desc: "Полный расчёт ФОТ: зарплата, больничные, отпускные, декретные. Отчётность по НДФЛ и страховым взносам.",
    items: ["Расчёт зарплаты и взносов", "Уведомления по НДФЛ (ЕНС)", "Кадровые документы и трудовые договоры"],
  },
  {
    icon: ClipboardCheck,
    title: "Первичная документация",
    desc: "Ведём всю первичку в порядке: счета, акты, накладные, договоры. Электронный документооборот (ЭДО) при необходимости.",
    items: ["Счета, акты, накладные, УПД", "Договоры и контроль оплат", "Электронный документооборот (ЭДО)"],
  },
];

const taxSystems = [
  { name: "УСН 6%", desc: "Для ИП и ООО с небольшими расходами" },
  { name: "УСН 15%", desc: "Когда расходы составляют более 60%" },
  { name: "ОСНО", desc: "Для крупных компаний с НДС" },
  { name: "ПСН", desc: "Патент для отдельных видов деятельности" },
];

const guarantees = [
  { icon: Shield, text: "Возмещаем штрафы по нашей вине" },
  { icon: Clock, text: "Ни одной просрочки отчётности за 7 лет" },
  { icon: TrendingDown, text: "Законная минимизация налогов" },
  { icon: Scale, text: "Договор с финансовой ответственностью" },
];

const Accounting = () => (
  <main className="relative overflow-hidden">

    {/* HERO */}
    <section className="relative min-h-[70vh] flex items-center pt-20">
      <div className="glow-orb w-[500px] h-[500px] bg-primary/25 top-[-80px] right-[-100px] animate-pulse-glow" />
      <div className="container-wide relative z-10">
        <motion.div {...fadeUp} className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary">Основное направление</span>
          </div>
          <h1 className="heading-hero mb-6">
            Бухгалтерское<br />
            <span className="gradient-text">сопровождение</span><br />
            вашего бизнеса
          </h1>
          <p className="text-body-lg max-w-2xl mb-10">
            Полное ведение бухгалтерии для ИП и ООО. Берём на себя отчётность, налоги, зарплату и документы — вы занимаетесь бизнесом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contacts" className="btn-primary gap-2">
              Бесплатная консультация <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="btn-secondary">
              Посмотреть цены
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            {guarantees.map((g, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <g.icon size={15} className="text-primary shrink-0" />
                {g.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* SERVICES */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Состав услуги</p>
          <h2 className="heading-section mb-4">Что входит в сопровождение</h2>
          <p className="text-body-lg max-w-2xl">Полный комплекс бухгалтерских услуг под ключ</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...sc(i)} className="card-elevated">
              <div className="icon-box mb-5 w-14 h-14">
                <s.icon className="text-primary" size={26} />
              </div>
              <h3 className="heading-card mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BadgeCheck size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* TAX SYSTEMS */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Системы налогообложения</p>
          <h2 className="heading-section mb-4">Работаем с любым режимом</h2>
          <p className="text-body-lg max-w-xl mx-auto">Подберём оптимальную систему налогообложения для вашего бизнеса</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {taxSystems.map((t, i) => (
            <motion.div key={i} {...sc(i)} className="card-elevated !p-6 text-center">
              <div className="text-2xl font-black text-primary mb-3">{t.name}</div>
              <p className="text-sm text-muted-foreground leading-snug">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="section-padding section-alt">
      <div className="container-narrow text-center">
        <motion.div {...fadeUp}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Переход</p>
          <h2 className="heading-section mb-6">Как мы принимаем дела</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-10">
            Уходите от текущего бухгалтера? Мы сами запрашиваем все документы, проводим аудит и берём дела — без стресса для вас.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contacts" className="btn-primary gap-2">
              Начать переход <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* MARKETPLACE UPSELL */}
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div {...fadeUp} className="card-elevated gradient-border text-center">
          <div className="icon-box w-14 h-14 mx-auto mb-5">
            <Store className="text-primary" size={26} />
          </div>
          <h3 className="heading-card mb-3">Продаёте на маркетплейсах?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Обычная бухгалтерия не учитывает комиссии, удержания и логистику WB, Ozon и Маркета.
            У нас есть специализированный продукт именно для продавцов маркетплейсов.
          </p>
          <Link to="/marketplaces" className="btn-secondary gap-2">
            Бухгалтерия для маркетплейсов <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    <CTASection />
  </main>
);

export default Accounting;
