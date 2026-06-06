import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, AlertTriangle, CheckCircle, TrendingUp, Shield, Star,
  Users, Clock, Award, FileText, Calculator, Building2, Store,
  BadgeCheck, PhoneCall,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true },
};

function staggerChild(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };
}

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { to: 300, suffix: "+", label: "клиентов обслуживается" },
  { to: 7, suffix: "+", label: "лет на рынке" },
  { to: 0, suffix: "", label: "штрафов по нашей вине" },
  { to: 100, suffix: "%", label: "удалённая работа" },
];

const pains = [
  "Непонятно, сколько бизнес реально зарабатывает",
  "Боитесь налоговых проверок и неожиданных штрафов",
  "Бухгалтер опаздывает со сдачей отчётности",
  "Непонятно, какая система налогообложения выгоднее",
  "Расчёт зарплаты и взносов занимает часы каждый месяц",
  "Документы в беспорядке или теряются перед проверкой",
];

const businessServices = [
  { icon: FileText, title: "Бухгалтерская отчётность", desc: "Сдаём все отчёты вовремя: налоговая, СФР, Росстат. Ни одной просрочки." },
  { icon: Calculator, title: "Налоговое планирование", desc: "Подбираем оптимальный режим и легально снижаем налоговую нагрузку." },
  { icon: Users, title: "Зарплата и кадры", desc: "Расчёт зарплаты, больничных, отпускных, страховых взносов и НДФЛ." },
  { icon: Building2, title: "Первичная документация", desc: "Полный порядок в первичке: договоры, акты, счета, накладные." },
];

const steps = [
  { num: "01", title: "Анализ", desc: "Изучаем текущий учёт и структуру бизнеса — бесплатно" },
  { num: "02", title: "Переход", desc: "Аккуратно принимаем дела и настраиваем прозрачный учёт" },
  { num: "03", title: "Ведение", desc: "Закрываем каждый месяц: отчёты, налоги, документы" },
  { num: "04", title: "Контроль", desc: "Уведомляем о рисках, помогаем с финансовыми решениями" },
];

const whyUs = [
  { icon: Shield, title: "Несём ответственность", desc: "Возмещаем штрафы и пени, возникшие по нашей вине. Это закреплено договором." },
  { icon: Clock, title: "Всегда вовремя", desc: "Ни одного опоздания с отчётностью за 7 лет работы." },
  { icon: Award, title: "Специализация на МСБ", desc: "Работаем только с малым и средним бизнесом — знаем все нюансы ИП и ООО." },
  { icon: Store, title: "Маркетплейсы в комплекте", desc: "Умеем то, что не умеет обычный бухгалтер — разбираем отчёты WB, Ozon и Маркета." },
];

const cases = [
  { title: "Экономия 320 000 ₽/год", desc: "Перевели ИП с ОСНО на УСН 6%. Убрали лишние расходы — чистая налоговая экономия.", tag: "Налоговая оптимизация" },
  { title: "Расхождение 200 000 ₽", desc: "Нашли ошибку в выплатах WB. Помогли вернуть деньги за 3 месяца.", tag: "Маркетплейсы" },
  { title: "0 штрафов за 3 года", desc: "Ведём бухгалтерию производственного ООО. Всё вовремя, все документы в порядке.", tag: "Сопровождение ООО" },
];

const Index = () => (
  <main className="relative overflow-hidden">

    {/* ─── HERO ─── */}
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary/30 top-[-100px] right-[-150px] animate-pulse-glow" style={{ animationDelay: "0s" }} />
      <div className="glow-orb w-[400px] h-[400px] bg-[hsl(var(--gold)/0.2)] bottom-[0px] left-[-80px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
      <div className="glow-orb w-[300px] h-[300px] bg-primary/20 top-[40%] left-[40%] animate-float-slow" style={{ animationDelay: "1s" }} />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary">Бухгалтерское сопровождение бизнеса</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="heading-hero mb-6"
            >
              Бухгалтерия,<br />
              которой можно<br />
              <span className="gradient-text">доверять бизнес</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-lg max-w-2xl mb-10"
            >
              Берём на себя весь учёт: отчётность, налоги, зарплата и документы.
              Работаем с ИП и ООО на любой системе налогообложения — удалённо, без стресса.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Link to="/contacts" className="btn-primary gap-2">
                Бесплатная консультация <ArrowRight size={18} />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                Рассчитать стоимость
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              {["Берём дела с любого состояния", "Работаем удалённо по всей России", "Договор и полная ответственность"].map((t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-primary shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ─── STATS ─── */}
    <section className="section-alt py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} {...staggerChild(i)} className="stat-card">
              <div className="text-4xl md:text-5xl font-black mb-2 gradient-text">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground text-center leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── SERVICES ─── */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Наши услуги</p>
          <h2 className="heading-section mb-4">Два направления работы</h2>
          <p className="text-body-lg max-w-2xl">
            Комплексное бухгалтерское сопровождение бизнеса — и специализированный учёт для маркетплейсов.
          </p>
        </motion.div>

        {/* Two main service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* PRIMARY: Business accounting */}
          <motion.div {...staggerChild(0)} className="service-card-primary">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-bold text-primary">
              Основное направление
            </div>
            <div className="icon-box mb-6 w-14 h-14">
              <Building2 className="text-primary" size={26} />
            </div>
            <h3 className="heading-card mb-3">Бухгалтерское сопровождение бизнеса</h3>
            <p className="text-muted-foreground mb-4">
              Полное ведение бухгалтерии для ИП и ООО. Отчётность, налоги, зарплата, документы — всё под нашим контролем. Работаем со всеми системами: УСН, ОСНО, ПСН.
            </p>
            <ul className="space-y-2 mb-8">
              {["Отчётность в ФНС, СФР, Росстат", "Налоговое планирование и оптимизация", "Зарплата, взносы, НДФЛ", "Первичная документация"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck size={15} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/accounting" className="btn-primary gap-2 text-sm py-3 px-6">
              Подробнее об услуге <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* SECONDARY: Marketplaces */}
          <motion.div {...staggerChild(1)} className="card-elevated flex flex-col">
            <div className="icon-box mb-6 w-14 h-14">
              <Store className="text-primary" size={26} />
            </div>
            <h3 className="heading-card mb-3">Бухгалтерия для маркетплейсов</h3>
            <p className="text-muted-foreground mb-4">
              Специализированный учёт для продавцов на Wildberries, Ozon и Яндекс Маркете. Сводим выплаты, комиссии, удержания и возвраты в реальную прибыль.
            </p>
            <ul className="space-y-2 mb-8">
              {["Сверка отчётов WB, Ozon, Маркет", "Контроль выплат и удержаний", "Расчёт реальной прибыли по товарам", "Закрывающие документы"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck size={15} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/marketplaces" className="btn-secondary gap-2 text-sm py-3 px-6 mt-auto">
              Подробнее <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Business services grid */}
        <motion.div {...fadeUp} className="mb-8">
          <h3 className="text-xl font-bold text-muted-foreground">Что входит в бухгалтерское сопровождение</h3>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {businessServices.map((s, i) => (
            <motion.div key={i} {...staggerChild(i)} className="card-elevated !p-6">
              <div className="icon-box mb-4">
                <s.icon className="text-primary" size={22} />
              </div>
              <h4 className="font-bold mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── PAIN ─── */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Проблемы</p>
          <h2 className="heading-section mb-4">Знакомые ситуации?</h2>
          <p className="text-body-lg">
            Большинство предпринимателей сталкиваются с этим каждый квартал
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              {...staggerChild(i)}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-300"
            >
              <AlertTriangle className="text-destructive/70 shrink-0 mt-0.5" size={20} />
              <p className="font-medium leading-snug">{pain}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-10 text-center">
          <p className="text-muted-foreground mb-6">Мы решаем все эти задачи с первого месяца сотрудничества</p>
          <Link to="/contacts" className="btn-primary gap-2">
            Обсудить вашу ситуацию <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ─── HOW WE WORK ─── */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Процесс</p>
          <h2 className="heading-section mb-4">Как мы работаем</h2>
          <p className="text-body-lg">4 шага до полного порядка в бухгалтерии</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[13%] right-[13%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              {...staggerChild(i)}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border mb-6 mx-auto">
                <span className="text-xl font-black text-primary">{step.num}</span>
              </div>
              <h3 className="heading-card mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── WHY US ─── */}
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-primary/15 top-[-100px] right-[-150px] animate-float-slow" />
      <div className="container-wide relative z-10">
        <motion.div {...fadeUp} className="mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Преимущества</p>
          <h2 className="heading-section mb-4">Почему выбирают ФИНСВОД</h2>
          <p className="text-body-lg max-w-xl">
            Мы не просто ведём цифры — мы берём ответственность за ваш бизнес
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUs.map((item, i) => (
            <motion.div key={i} {...staggerChild(i)} className="card-elevated flex gap-5 !p-7">
              <div className="icon-box shrink-0">
                <item.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── CASES ─── */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div {...fadeUp} className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Результаты</p>
            <h2 className="heading-section mb-3">Кейсы клиентов</h2>
            <p className="text-body-lg">Реальные результаты за последние 12 месяцев</p>
          </div>
          <Link to="/cases" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm">
            Все кейсы <ArrowRight size={16} />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div key={i} {...staggerChild(i)} className="card-elevated relative overflow-hidden">
              <div className="shimmer-line absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <span className="inline-block px-3 py-1 rounded-full bg-accent border border-primary/20 text-xs font-medium text-primary mb-5">
                {c.tag}
              </span>
              <h3 className="heading-card mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── ACCOUNTANT OBJECTION ─── */}
    <section className="section-padding section-alt">
      <div className="container-narrow">
        <motion.div {...fadeUp} className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-sm font-medium mb-8">
            <Star size={14} className="text-gold" />
            <span className="text-gold">Частый вопрос</span>
          </div>
          <h2 className="heading-section mb-6">У вас уже есть бухгалтер?</h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-4">
            Замечательно. Но знает ли он тонкости оптимизации налогов для вашей отрасли?
            Контролирует ли он все дедлайны по отчётности? Возмещает ли штрафы, если ошибётся?
          </p>
          <p className="text-body-lg max-w-2xl mx-auto mb-10">
            Мы не просто «закрываем» документы — мы берём ответственность за результат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="btn-primary gap-2">
              Бесплатный аудит за 1 день <ArrowRight size={18} />
            </Link>
            <a
              href="https://t.me/finsvod"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary gap-2"
            >
              <PhoneCall size={18} />
              Написать в Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <FAQ />
    <CTASection
      title="Готовы навести порядок в бухгалтерии?"
      subtitle="Оставьте заявку — разберём вашу ситуацию и предложим оптимальное решение. Бесплатно, без обязательств."
      buttonText="Получить консультацию"
    />
  </main>
);

export default Index;
