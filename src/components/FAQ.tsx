import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    q: "У меня уже есть бухгалтер. Зачем мне вы?",
    a: "Большинство бухгалтеров не работают с отчётами маркетплейсов. Они видят только банковские выписки, но не понимают, сколько ушло на комиссии, логистику и удержания. Мы разбираем всё до копейки.",
  },
  {
    q: "Какие маркетплейсы вы поддерживаете?",
    a: "Wildberries, Ozon, Яндекс Маркет. Работаем со всеми системами отчётности этих площадок.",
  },
  {
    q: "Что значит «бесплатный разбор»?",
    a: "Вы присылаете нам отчёт маркетплейса, мы анализируем его и показываем: сколько вы реально зарабатываете, где теряете деньги, какие есть риски. Бесплатно, без обязательств.",
  },
  {
    q: "Как быстро вы подключаетесь?",
    a: "Разбор отчёта — за 1 рабочий день. Полное подключение к обслуживанию — за 3–5 дней.",
  },
  {
    q: "Можно ли работать удалённо?",
    a: "Да, 100% наших клиентов работают с нами удалённо. Все документы — в электронном виде, все коммуникации — через мессенджеры.",
  },
  {
    q: "Что будет, если придёт проверка?",
    a: "Мы ведём учёт так, чтобы у налоговой не было вопросов. Все документы в порядке, все отчёты сданы вовремя. Если проверка всё же придёт — мы сопровождаем вас.",
  },
];

const FAQ = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="heading-section mb-4">Частые вопросы</h2>
        <p className="text-body-lg">Отвечаем на главное</p>
      </motion.div>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqData.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border py-2">
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
