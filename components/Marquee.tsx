export default function Marquee() {
  const items = ['Diseño Web', 'E-Commerce', 'SEO', 'Branding', 'Marketing Digital', 'Desarrollo a Medida', 'UI/UX', 'Consultoría'];

  return (
    <div className="border-y border-gray-200 py-5 overflow-hidden">
      <div className="marquee flex gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-sm text-gray-400 uppercase tracking-widest flex items-center gap-8">
            {item}
            <span className="text-gray-300">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
