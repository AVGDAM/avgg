export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 border-l-4 border-beige dark:border-blue-gray rounded-r-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-2">
        <span className="text-2xl">💡</span>
        Puntos Clave
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-beige dark:bg-blue-gray text-white text-sm font-bold flex items-center justify-center mt-0.5">
              {index + 1}
            </span>
            <span className="text-navy dark:text-slate-200 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
