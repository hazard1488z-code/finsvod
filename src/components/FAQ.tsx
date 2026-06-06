import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    q: "Для кого подходит бухгалтерское сопровождение?",
    a: "Для ИП и ООО на любой системе налогообложения: УСН 6%, УСН 15%, ОСНО, ПСН. Работаем с малым и средним бизнесом — от самозанятых и небольших ИП до компаний с десятками сотрудников.",
  },
  {
    q: "Что будет, если вы допустите ошибку?",
    a: "Мы несём финансовую ответственность за ошибки по нашей вине — это закреплено в договоре. Штрафы и пени, возникшие из-за наших ошибок, мы возмещаем за свой счёт.",
  },
  {
    q: "Как происходит переход к вам от другого бухгалтера?",
    a: "Мы сами связываемся с предыдущим бухгалтером, запрашиваем все необходимые документы и базы, проводим аудит текущего состояния учёта. Вам не нужно ни о чём беспокоиться — переход происходит плавно.",
  },
  {
    q: "Нужно ли приезжать в офис?",
    a: "Нет. 100% наших клиентов работают с нами удалённо. Все документы — в электронном виде, коммуникации — через мессенджеры и email. Мы работаем с бизнесами по всей России.",
  },
  {
    q: "Как быстро вы подключаетесь?",
    a: "Первичная консультация и анализ — в течение 1 рабочего дня. Полное подключение к обслуживанию — за 3–7 дней в зависимости от объёма бизнеса.",
  },
  {
    q: "Работаете ли вы с маркетплейсами?",
    a: "Да, это одно из наших ключевых направлений. Мы специализируемся на бухгалтерии для продавцов Wildberries, Ozon и Яндекс Маркета — разбираем отчёты, контролируем выплаты, учитываем комиссии.",
  },
  {
    q: "Что будет, если придёт налоговая проверка?",
    a: "Мы ведём учёт так, чтобы у налоговой не возникало вопросов. Все документы в порядке, все отчёты сданы вовремя. Если проверка всё же придёт — сопровождаем вас на всех этапах.",
  },
];

const FAQ = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
        <h2 className="heading-section mb-4">Частые вопросы</h2>
        <p className="text-body-lg">Отвечаем на главное</p>
      </motion.div>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
        {faqData.map((item, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-border rounded-2xl px-6 overflow-hidden data-[state=open]:border-primary/40 transition-all duration-300"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5 hover:text-primary transition-colors">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
