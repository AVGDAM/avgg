'use client';

export default function HowWeWork() {
  const steps = [
    { num: '01', title: 'Descubrimiento', text: 'Analizamos tu negocio, competencia y objetivos. Definimos juntos el alcance del proyecto.' },
    { num: '02', title: 'Estrategia', text: 'Diseñamos la estructura, wireframes y definimos la tecnología. Presupuesto cerrado sin sorpresas.' },
    { num: '03', title: 'Diseño & Desarrollo', text: 'Maquetamos y desarrollamos tu web. Revisiones semanales para que veas el progreso.' },
    { num: '04', title: 'Lanzamiento', text: 'Publicamos, configuramos analítica y te formamos. Soporte técnico incluido.' },
  ];

  return (
    <section id="proceso" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-wider">Proceso</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Cómo trabajamos</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 group hover:border-gray-300 transition-colors">
              <div className="text-5xl font-bold text-gray-200 mb-6">{s.num}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
