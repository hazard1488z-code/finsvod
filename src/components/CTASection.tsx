import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "dark";
}

const CTASection = ({
  title = "Получите разбор за 1 день",
  subtitle = "Отправьте отчёт маркетплейса — мы покажем реальную картину по прибыли, комиссиям и налогам",
  buttonText = "Бесплатный разбор",
  buttonHref = "/contacts",
  variant = "default",
}: CTASectionProps) => (
  <section className={`section-padding ${variant === "dark" ? "bg-foreground" : "section-alt"}`}>
    <div className="container-narrow text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`heading-section mb-6 ${variant === "dark" ? "text-background" : ""}`}>
          {title}
        </h2>
        <p className={`text-body-lg max-w-2xl mx-auto mb-10 ${variant === "dark" ? "text-background/60" : ""}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={buttonHref} className="btn-primary gap-2">
            {buttonText} <ArrowRight size={18} />
          </Link>
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className={`btn-secondary ${variant === "dark" ? "border-background/20 text-background hover:bg-background/10" : ""}`}>
            Написать в Telegram
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
