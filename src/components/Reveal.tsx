import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const Reveal = ({ children, delay = 0, y = 40, className }: RevealProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
