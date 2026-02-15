"use client";

import Link from "next/link";
import { ArrowLeft, ChevronDown, Clock, CheckCircle, AlertTriangle, Zap, Cloud, Flame, Brain } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

interface Technique {
  name: string;
  duration: string;
  description: string;
  steps: string[];
  when: string;
}

interface Category {
  id: string;
  name: string;
  emoji: string;
  icon: typeof Brain;
  color: string;
  bgColor: string;
  description: string;
  techniques: Technique[];
}

const categories: Category[] = [
  {
    id: "ansiedad",
    name: "Ansiedad y Nervios",
    emoji: "😰",
    icon: Zap,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/10",
    description: "Cuando sientes que la ansiedad te atrapa: corazón acelerado, pensamientos catastrofistas, sensación de peligro.",
    techniques: [
      {
        name: "Respiración de emergencia 3-6",
        duration: "2 min",
        description: "La forma más rápida de activar tu sistema de calma.",
        steps: [
          "Detén lo que estés haciendo",
          "Inhala por la nariz contando 3",
          "Exhala por la boca contando 6 (siempre el doble)",
          "Repite 8-10 veces",
          "La exhalación larga activa el nervio vago y calma tu sistema nervioso"
        ],
        when: "Ante un pico de ansiedad, antes de un examen, en una reunión estresante",
      },
      {
        name: "Grounding 5-4-3-2-1",
        duration: "3 min",
        description: "Ancla tu mente al presente cuando los pensamientos se disparan.",
        steps: [
          "Nombra 5 cosas que PUEDES VER (describe los colores, formas)",
          "Toca 4 cosas diferentes (nota la textura, temperatura)",
          "Identifica 3 sonidos (cercanos y lejanos)",
          "Detecta 2 olores (acerca la nariz a objetos)",
          "Saborea 1 cosa (un sorbo de agua, un caramelo)"
        ],
        when: "Cuando la ansiedad te desconecta de la realidad, inicio de pánico",
      },
      {
        name: "Cuestionamiento rápido",
        duration: "5 min",
        description: "Desactiva el pensamiento catastrofista con preguntas poderosas.",
        steps: [
          "Escribe el pensamiento ansioso (ej: 'Todo va a salir mal')",
          "Pregúntate: ¿Qué probabilidad real tiene esto? (pon un %)",
          "¿Cuál es la evidencia a favor? ¿Y en contra?",
          "¿Lo he superado antes? ¿Qué hice?",
          "¿Qué le diría a un amigo con este pensamiento?",
          "Escribe una versión más realista del pensamiento"
        ],
        when: "Cuando te atrapan pensamientos negativos repetitivos",
      },
      {
        name: "Hielo en las manos",
        duration: "1 min",
        description: "Técnica de distracción sensorial intensa para cortar la espiral ansiosa.",
        steps: [
          "Coge un cubito de hielo (o mete las manos en agua muy fría)",
          "Sujétalo en la mano cerrada",
          "Concentra toda tu atención en la sensación del frío",
          "El estímulo sensorial intenso interrumpe el ciclo de ansiedad",
          "Cuando se derrita, nota cómo tu ansiedad ha bajado"
        ],
        when: "En momentos de pánico o ansiedad muy intensa",
      },
    ],
  },
  {
    id: "tristeza",
    name: "Tristeza y Desánimo",
    emoji: "😢",
    icon: Cloud,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
    description: "Cuando te sientes triste, desmotivado/a o con ganas de aislarte. La clave: activación suave y compasión.",
    techniques: [
      {
        name: "Activación conductual mini",
        duration: "10 min",
        description: "Cuando no tienes ganas de nada, empieza por algo mínimo.",
        steps: [
          "No esperes a tener ganas. La motivación viene DESPUÉS de la acción",
          "Elige la actividad más pequeña posible: levantarte de la cama, ducharte, salir a la puerta",
          "Hazla sin juzgar si te apetece o no",
          "Después, elige otra actividad un poquito más grande",
          "Felicítate por cada paso. En la depresión, hacer ALGO es un logro enorme"
        ],
        when: "Días en los que no tienes energía ni motivación para nada",
      },
      {
        name: "Carta de autocompasión",
        duration: "10 min",
        description: "Trátate como tratarías a alguien que quieres.",
        steps: [
          "Escribe lo que sientes ahora mismo, sin filtros",
          "Ahora imagina que un amigo/a te ha escrito esto",
          "Respóndele con cariño, comprensión y validación",
          "'Es normal sentirte así. No estás solo/a. Esto pasará.'",
          "Lee la respuesta en voz alta. Esas palabras son para ti"
        ],
        when: "Cuando la autocrítica acompaña a la tristeza",
      },
      {
        name: "Lista de placer",
        duration: "5 min",
        description: "Reconecta con actividades que antes te daban placer.",
        steps: [
          "Escribe 10 actividades que antes disfrutabas (cualquier cosa)",
          "Elige la más accesible ahora mismo",
          "Dedícale aunque sea 5 minutos",
          "No juzgues si disfrutas o no. El objetivo es HACER, no sentir",
          "La repetición irá trayendo de vuelta el placer poco a poco"
        ],
        when: "Cuando sientes que nada te motiva o interesa",
      },
      {
        name: "Contacto social mínimo",
        duration: "2 min",
        description: "La tristeza nos aísla. Rompe el aislamiento con algo pequeño.",
        steps: [
          "Elige a alguien de confianza",
          "Envía un mensaje simple: un emoji, un 'hola', una pregunta sencilla",
          "No necesitas explicar cómo te sientes (a menos que quieras)",
          "El objetivo es romper el aislamiento, no tener una conversación profunda",
          "Si te responden, permite que eso te llegue"
        ],
        when: "Cuando llevas tiempo sin hablar con nadie y te sientes solo/a",
      },
    ],
  },
  {
    id: "ira",
    name: "Ira y Frustración",
    emoji: "😠",
    icon: Flame,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50 dark:bg-red-900/10",
    description: "Cuando la ira te invade: tensión, ganas de gritar, impulsividad. La clave: bajar la activación ANTES de actuar.",
    techniques: [
      {
        name: "Regla del STOP",
        duration: "1 min",
        description: "Evita reaccionar en caliente. La ira dura 90 segundos si no la alimentas.",
        steps: [
          "S - STOP: Para lo que estés haciendo. No respondas, no actúes",
          "T - TOMA aire: 3 respiraciones profundas y lentas",
          "O - OBSERVA: ¿Qué siento? ¿Dónde lo siento en el cuerpo? ¿Qué pensamiento me enfada?",
          "P - PROCEDE: Ahora, con más calma, decide qué quieres hacer",
          "Si la ira sigue alta, aléjate 20 minutos antes de responder"
        ],
        when: "En discusiones, cuando alguien te provoca, ante una injusticia",
      },
      {
        name: "Descarga física",
        duration: "5 min",
        description: "La ira genera energía en el cuerpo. Necesitas liberarla de forma segura.",
        steps: [
          "Sal a caminar rápido (ideal: al aire libre)",
          "Si no puedes salir: haz 20 sentadillas o flexiones",
          "O aprieta una almohada contra tu cara y grita (sí, funciona)",
          "O rompe papeles en trocitos pequeños con las manos",
          "El ejercicio físico intenso metaboliza las hormonas del estrés"
        ],
        when: "Cuando la ira te genera mucha tensión corporal",
      },
      {
        name: "Reformulación",
        duration: "5 min",
        description: "Cambia la interpretación que alimenta tu ira.",
        steps: [
          "Escribe exactamente qué te ha enfadado",
          "¿Hay otra explicación posible? (¿Y si no fue intencional?)",
          "¿Qué necesidad mía no se está cubriendo? (respeto, justicia, escucha)",
          "¿Cómo puedo expresar esa necesidad sin atacar?",
          "Formula un mensaje asertivo: 'Cuando..., me siento..., necesito...'"
        ],
        when: "Cuando el enfado viene de una interpretación que puede no ser correcta",
      },
    ],
  },
  {
    id: "estres",
    name: "Estrés y Agobio",
    emoji: "🤯",
    icon: Brain,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/10",
    description: "Cuando todo te supera: mil cosas que hacer, sensación de no llegar, agotamiento. La clave: organizar y soltar.",
    techniques: [
      {
        name: "Brain dump (vaciado mental)",
        duration: "5 min",
        description: "Saca TODO lo que hay en tu cabeza a un papel.",
        steps: [
          "Coge un papel y un boli",
          "Escribe TODO lo que te preocupa, sin orden ni filtro",
          "Tareas, miedos, pendientes, compromisos, todo",
          "No pares hasta que no salga nada más",
          "Ahora marca: ¿Qué es URGENTE? ¿Qué puede ESPERAR? ¿Qué puedo DELEGAR? ¿Qué puedo ELIMINAR?",
          "Elige solo las 3 cosas más urgentes para hoy"
        ],
        when: "Cuando sientes que tu cabeza va a explotar de tanto que llevas encima",
      },
      {
        name: "Técnica Pomodoro adaptada",
        duration: "25 min",
        description: "Divide el agobio en bloques manejables.",
        steps: [
          "Elige UNA sola tarea (la más urgente)",
          "Pon un temporizador de 25 minutos",
          "Trabaja SOLO en esa tarea (nada de móvil, email, etc.)",
          "Cuando suene: 5 minutos de descanso real (levántate, estira)",
          "Repite. Después de 4 bloques: descanso de 15-20 minutos",
          "La clave: hacer UNA cosa a la vez reduce la sensación de agobio"
        ],
        when: "Cuando tienes una lista interminable y no sabes por dónde empezar",
      },
      {
        name: "Micro-descanso consciente",
        duration: "2 min",
        description: "Un reset rápido para bajar el estrés entre tareas.",
        steps: [
          "Levántate de donde estés",
          "Estira los brazos hacia arriba 5 segundos. Suelta",
          "Gira el cuello suavemente a un lado y al otro",
          "Haz 5 respiraciones profundas con los ojos cerrados",
          "Bebe un vaso de agua lentamente",
          "Vuelve a tu tarea con energía renovada"
        ],
        when: "Entre reuniones, entre tareas, cada hora",
      },
      {
        name: "Identificar lo no negociable",
        duration: "5 min",
        description: "A veces el estrés viene de no poner límites. Identifica qué puedes soltar.",
        steps: [
          "Escribe todas tus responsabilidades de esta semana",
          "Clasifica: ¿Cuáles son REALMENTE mías? ¿Cuáles he asumido por no decir no?",
          "¿Hay alguna que pueda: aplazarse, delegarse, simplificarse o eliminarse?",
          "Identifica UN compromiso que puedas soltar esta semana",
          "Comunícalo de forma asertiva: 'No voy a poder encargarme de esto esta semana'"
        ],
        when: "Cuando sientes que todo depende de ti y no puedes más",
      },
    ],
  },
];

export default function TecnicasAfrontamientoPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("ansiedad");
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null);
  const [completedTechniques, setCompletedTechniques] = useState<Set<string>>(new Set());

  const toggleComplete = (name: string) => {
    setCompletedTechniques((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link href="/recursos-autoayuda" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver a Recursos de Autoayuda
          </Link>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Técnicas de Afrontamiento
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Estrategias prácticas organizadas por emoción. Encuentra la herramienta adecuada para cada momento y aplícala al instante.
            </p>
          </header>

          {/* Quick selector */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setExpandedCategory(expandedCategory === cat.id ? null : cat.id); setExpandedTechnique(null); }}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-2 ${
                  expandedCategory === cat.id
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-navy dark:text-slate-200 hover:border-beige dark:hover:border-blue-gray"
                }`}
              >
                <span className="text-xl">{cat.emoji}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div className="space-y-4">
            {categories.map((cat) => {
              if (expandedCategory !== cat.id) return null;
              const CatIcon = cat.icon;
              return (
                <div key={cat.id} className="border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-white`}>
                        <CatIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-navy dark:text-slate-100">{cat.emoji} {cat.name}</h2>
                      </div>
                    </div>
                    <p className="text-muted dark:text-slate-300 mb-6">{cat.description}</p>

                    <div className="space-y-3">
                      {cat.techniques.map((tech) => {
                        const isExpanded = expandedTechnique === `${cat.id}-${tech.name}`;
                        const isDone = completedTechniques.has(tech.name);
                        return (
                          <div key={tech.name} className={`rounded-xl border-2 overflow-hidden transition ${isDone ? "border-green-300 dark:border-green-700" : "border-gray-200 dark:border-slate-700"}`}>
                            <button
                              onClick={() => setExpandedTechnique(isExpanded ? null : `${cat.id}-${tech.name}`)}
                              className="w-full p-4 text-left flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition"
                            >
                              <button
                                onClick={(e) => { e.stopPropagation(); toggleComplete(tech.name); }}
                                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition ${isDone ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400"}`}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <div className="flex-1">
                                <h3 className="font-bold text-navy dark:text-slate-100">{tech.name}</h3>
                                <p className="text-xs text-muted dark:text-slate-400 flex items-center gap-2">
                                  <Clock className="h-3 w-3" /> {tech.duration}
                                  <span className="text-muted dark:text-slate-500">·</span>
                                  {tech.when}
                                </p>
                              </div>
                              <ChevronDown className={`h-5 w-5 text-muted transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                            </button>

                            {isExpanded && (
                              <div className="px-4 pb-5 border-t border-gray-200 dark:border-slate-700">
                                <p className="text-muted dark:text-slate-300 text-sm my-3">{tech.description}</p>
                                <div className={`${cat.bgColor} rounded-lg p-4`}>
                                  <h4 className="font-semibold text-sm text-navy dark:text-slate-100 mb-3">Pasos:</h4>
                                  <ol className="space-y-2">
                                    {tech.steps.map((step, idx) => (
                                      <li key={idx} className="flex items-start gap-3 text-sm text-muted dark:text-slate-300">
                                        <span className={`shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${cat.color} text-white text-xs flex items-center justify-center font-bold`}>
                                          {idx + 1}
                                        </span>
                                        <span>{step}</span>
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                                <div className="mt-3 flex items-start gap-2 text-sm">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                                  <p className="text-muted dark:text-slate-400"><strong>Mejor momento:</strong> {tech.when}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Las técnicas no son suficientes?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              Si estas estrategias te ayudan pero necesitas un plan más personalizado, un psicólogo puede diseñar un tratamiento a tu medida.
            </p>
            <CTAButtons />
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Nota:</strong> Estas técnicas son herramientas de autoayuda. Si tus emociones son muy intensas o persistentes, consulta con un profesional de salud mental. Si tienes pensamientos de hacerte daño, llama al 024.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
