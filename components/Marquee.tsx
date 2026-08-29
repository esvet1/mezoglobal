type MarqueeProps = {
  items: string[];
  speed?: 'fast' | 'slow';
  accent?: boolean;
};

export default function Marquee({ items, speed = 'fast', accent = false }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-wrap ${accent ? 'stats' : ''}`}>
      <div className={`marquee-track marquee-${speed}`}>
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
