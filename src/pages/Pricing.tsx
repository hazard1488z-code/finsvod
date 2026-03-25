import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import CTASection from "@/components/CTASection";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const plans = [
  {
    name: "Старт",
    price: "от 9 000 ₽",
    desc: "Для начинающих селлеров с небольшим оборотом",
    features: ["1 маркетплейс", "До 500 заказов/мес", "Сверка отчётов", "Расчёт налогов", "Ежемесячная отчётность"],
    accent: false,
  },
  {
    name: "Бизнес",
    price: "16 000 – 25 000 ₽",
    desc: "Для растущих продавцов на нескольких площадках",
    features: ["До 3 маркетплейсов", "До 5 000 заказов/мес", "Полная сверка выплат", "Оптимизация налогов", "Закрывающие документы", "Персональный менеджер"],
    accent: true,
  },
  {
    name: "Сложный / НДС",
    price: "от 30 000 ₽",
    desc: "Для крупных селлеров и компаний на НДС",
    features: ["Все маркетплейсы", "Без ограничений", "НДС, импорт, ВЭД", "Управленческий учёт", "Зарплата и кадры", "Приоритетная поддержка"],
    accent: false,
  },
];

const Pricing = () => {
  const [marketplace, setMarketplace] = useState("1");
  const [orders, setOrders] = useState("500");
  const [nds, setNds] = useState(false);

  const calcPrice = () => {
    const mp = parseInt(marketplace);
    const ord = parseInt(orders);
    let base = 9000;
    if (mp > 1) base += (mp - 1) * 4000;
    if (ord > 500) base += Math.floor(ord / 1000) * 3000;
    if (nds) base += 15000;
    return base.toLocaleString("ru-RU");
  };

  return (
    <main>
      <section className="min-h-[50vh] flex items-center pt-20">
        <div className="container-wide">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h1 className="heading-hero mb-6">
              Прозрачные <span className="text-primary">цены</span>
            </h1>
            <p className="text-body-lg">Стоимость зависит от количества маркетплейсов, объёма заказов и системы налогообложения</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 md:p-10 border ${
                  plan.accent
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl scale-[1.02]"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-black mb-3">{plan.price}</div>
                <p className={`text-sm mb-8 ${plan.accent ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={plan.accent ? "text-primary-foreground" : "text-primary"} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacts"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all ${
                    plan.accent
                      ? "bg-background text-foreground hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  Оставить заявку
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="heading-section mb-4">Калькулятор стоимости</h2>
            <p className="text-body-lg">Рассчитайте примерную стоимость обслуживания</p>
          </motion.div>
          <motion.div {...fadeUp} className="card-elevated max-w-xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Количество маркетплейсов</label>
                <select
                  value={marketplace}
                  onChange={(e) => setMarketplace(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="1">1 маркетплейс</option>
                  <option value="2">2 маркетплейса</option>
                  <option value="3">3 маркетплейса</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Заказов в месяц</label>
                <select
                  value={orders}
                  onChange={(e) => setOrders(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="500">До 500</option>
                  <option value="1000">500 – 1 000</option>
                  <option value="3000">1 000 – 3 000</option>
                  <option value="5000">3 000 – 5 000</option>
                  <option value="10000">Более 5 000</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="nds"
                  checked={nds}
                  onChange={(e) => setNds(e.target.checked)}
                  className="w-5 h-5 rounded border-border accent-primary"
                />
                <label htmlFor="nds" className="text-sm font-medium cursor-pointer">Работаете с НДС</label>
              </div>
              <div className="border-t border-border pt-6">
                <div className="flex items-end justify-between mb-6">
                  <span className="text-muted-foreground">Примерная стоимость:</span>
                  <span className="text-3xl font-black text-primary">от {calcPrice()} ₽</span>
                </div>
                <Link to="/contacts" className="btn-primary w-full text-center gap-2">
                  Рассчитать точную стоимость <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection variant="dark" />
    </main>
  );
};

export default Pricing;
