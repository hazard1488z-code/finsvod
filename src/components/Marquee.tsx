import { ReactNode } from "react";

interface MarqueeProps {
  items: string[];
  icon?: ReactNode;
}

const Marquee = ({ items, icon }: MarqueeProps) => {
  const row = (
    <div className="flex shrink-0 items-center gap-16 px-8">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-16">
          <span className="font-serif text-5xl md:text-7xl whitespace-nowrap">{t}</span>
          <span className="text-primary opacity-60">{icon ?? "✦"}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-border py-8 bg-card/50">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
};

export default Marquee;
