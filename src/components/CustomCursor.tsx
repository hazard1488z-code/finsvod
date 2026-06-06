import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hovering ? 2.5 : 1, opacity: hovering ? 0.4 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-3 h-3 rounded-full bg-primary"
        />
      </motion.div>
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="pointer-events-none fixed top-0 left-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 0.6 : 0.3 }}
          transition={{ duration: 0.4 }}
          className="w-10 h-10 rounded-full border border-primary"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
