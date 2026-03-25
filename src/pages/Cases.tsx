import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cases = [
  {
    tag: "Wildberries",
    title: "Нашли расхождение на 200 000 ₽",
    problem: "Селлер с оборотом 3 млн ₽/мес не сверял выплаты WB. Бухгалтер считал только по банку.",
    solution: "Сверили отчёты за 6 месяцев, нашли недоплату по логистике и двойные удержания.",
    result: "Вернули 200 000 ₽. Настроили ежемесячную сверку.",
  },
  {
    tag: "Ozon",
    title: "Снизили налоговую нагрузку на 40%",
    problem: "ООО на ОСНО платило НДС со всего оборота. Бухгалтер не учитывал комиссии как расходы.",
    solution: "Перестроили учёт, правильно оформили все комиссии и логистику как расходы.",
    result: "Экономия 180 000 ₽ в год на налогах. Нулевой риск при проверке.",
  },
  {
    tag: "Яндекс Маркет",
    title: "Выявили скрытые расходы на 95 000 ₽",
    problem: "Селлер думал, что маржинальность товаров — 35%. На самом деле — 12%.",
    solution: "Разобрали все удержания: хранение, обработка возвратов, штрафы за SLA.",
    result: "Клиент убрал убыточные товары и увеличил прибыль на 25%.",
  },
  {
    tag: "Wildberries + Ozon",
    title: "Навели порядок в мультиплощадочном учёте",
    problem: "Селлер работал на 2 площадках, но учёт вёлся «в одну кучу». Непонятно, где прибыль.",
    solution: "Разделили учёт по площадкам, настроили аналитику по каждому каналу.",
    result: "Прозрачная прибыль по каждой площадке. Оптимизация ассортимента.",
  },
];

const Cases = () => (
  <main>
    <section className="min-h-[50vh] flex items-center pt-20">
      <div className="container-wide">
        <motion.div {...fadeUp} className="max-w-3xl">
          <h1 className="heading-hero mb-6">
            Реальные <span className="text-primary">кейсы</span>
          </h1>
          <p className="text-body-lg">Как мы помогаем селлерам видеть реальные цифры и зарабатывать больше</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide space-y-8">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-elevated"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="lg:w-1/3">
                <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
                  {c.tag}
                </span>
                <h3 className="heading-card">{c.title}</h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Проблема</div>
                  <p className="text-sm">{c.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Решение</div>
                  <p className="text-sm">{c.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Результат</div>
                  <p className="text-sm font-medium">{c.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <CTASection title="Хотите такой же результат?" subtitle="Пришлите отчёт — покажем, где вы теряете деньги" />
  </main>
);

export default Cases;
