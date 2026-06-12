import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "default" | "dark";
}

const CTASection = ({
  title = "Готовы навести порядок в бухгалтерии?",
  subtitle = "Оставьте заявку — разберём вашу ситуацию и предложим решение. Бесплатная консультация без обязательств.",
  buttonText = "Получить консультацию",
  buttonHref = "/contacts",
  variant = "default",
}: CTASectionProps) => (
  <section
    className={`section-padding relative overflow-hidden ${
      variant === "dark" ? "" : "section-alt"
    }`}
  >
    {variant === "dark" && (
      <>
        <div
          className="glow-orb w-[500px] h-[500px] bg-primary/25 top-[-100px] left-[-100px]"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="glow-orb w-[400px] h-[400px] bg-[hsl(var(--gold)/0.15)] bottom-[-80px] right-[-80px]"
        />
      </>
    )}
    <div className="container-narrow text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="heading-section mb-6">{title}</h2>
        <p className="text-body-lg max-w-2xl mx-auto mb-10">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={buttonHref} className="btn-primary gap-2">
            {buttonText} <ArrowRight size={18} />
          </Link>
          <a
            href="https://t.me/urteam_k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary gap-2"
          >
            <MessageCircle size={18} />
            Написать в Telegram
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
