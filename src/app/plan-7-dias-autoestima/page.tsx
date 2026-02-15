"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, ChevronDown, RotateCcw, Eye, Pen, Shield, Heart, Star, Users, Sparkles } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const days = [
  {
    day: 1,
    title: "Conócete: Tu Punto de Partida",
    icon: Eye,
    color: "from-purple-500 to-purple-600",
    intro: "Antes de mejorar tu autoestima, necesitas saber dónde estás. Hoy vas a hacer un inventario honesto de cómo te ves y te tratas.",
    exercises: [
      {
        name: "Inventario de autoconcepto",
        duration: "15 min",
        description: "Escribe 10 adjetivos que te describan. Sé honesto/a. Después, marca cuáles son positivos (+) y cuáles negativos (-). ¿Cuál es el balance? Si hay más negativos, es normal al empezar. Lo vamos a cambiar.",
        tip: "Guarda esta lista. La revisaremos el día 7.",
      },
      {
        name: "El/La crítico/a interior",
        duration: "10 min",
        description: "Piensa en la última vez que te hablaste mal a ti mismo/a. Escribe exactamente qué te dijiste. Ahora, pregúntate: ¿Le dirías eso a un amigo/a? ¿A un niño/a? Probablemente no. Ponle nombre a esa voz crítica (ej: 'El Juez').",
        tip: "Separar la voz crítica de ti te ayuda a no identificarte con ella.",
      },
    ],
    reflection: "¿Qué has descubierto sobre cómo te hablas a ti mismo/a?",
  },
  {
    day: 2,
    title: "Tus Fortalezas Ocultas",
    icon: Star,
    color: "from-amber-500 to-amber-600",
    intro: "La baja autoestima te hace olvidar lo bueno de ti. Hoy vamos a rescatar tus fortalezas del olvido.",
    exercises: [
      {
        name: "Arqueología de logros",
        duration: "15 min",
        description: "Escribe 10 cosas que hayas conseguido en tu vida. No tienen que ser espectaculares: aprender a conducir, superar una ruptura, terminar un proyecto, ayudar a alguien, aprender una receta... TODO cuenta. Al lado de cada logro, escribe la cualidad que necesitaste para conseguirlo.",
        tip: "Si te cuesta llegar a 10, piensa en cada etapa de tu vida: infancia, adolescencia, adulto.",
      },
      {
        name: "Pregunta a 3 personas",
        duration: "10 min",
        description: "Envía este mensaje a 3 personas de confianza: '¿Podrías decirme 3 cualidades que ves en mí? Estoy trabajando en mi desarrollo personal'. Lee las respuestas sin minimizarlas. Escríbelas en papel.",
        tip: "Las personas que te quieren ven cosas que tú no puedes ver. Confía en su mirada.",
      },
    ],
    reflection: "¿Qué fortaleza te ha sorprendido descubrir?",
  },
  {
    day: 3,
    title: "Cambiar el Diálogo Interior",
    icon: Pen,
    color: "from-blue-500 to-blue-600",
    intro: "Cómo te hablas determina cómo te sientes. Hoy aprenderás a sustituir la autocrítica por autocompasión.",
    exercises: [
      {
        name: "Registro de autocrítica → autocompasión",
        duration: "15 min (repartido en el día)",
        description: "Cada vez que te pilles siendo autocrítico/a hoy, escribe: 1) Lo que te dijiste ('Soy un/a inútil'), 2) Lo que le dirías a un amigo/a en esa situación ('Ha sido un error, pero no eres inútil'), 3) Una frase compasiva para ti ('Estoy aprendiendo, cometo errores como todo el mundo').",
        tip: "No se trata de engañarte ni de ser positivo/a a la fuerza. Es ser justo/a contigo.",
      },
      {
        name: "Afirmaciones realistas",
        duration: "10 min",
        description: "Escribe 5 afirmaciones que sean REALES y POSITIVAS sobre ti. No uses exageraciones tipo 'Soy el/la mejor'. Usa frases como: 'Estoy aprendiendo a valorarme', 'Merezco ser tratado/a con respeto', 'Tengo cualidades que aportan a los demás', 'Soy capaz de superar dificultades'. Léelas en voz alta 3 veces.",
        tip: "Pega estas afirmaciones en el espejo del baño o en la pantalla del móvil.",
      },
    ],
    reflection: "¿Te ha costado hablarte con compasión? ¿Cómo te has sentido al hacerlo?",
  },
  {
    day: 4,
    title: "Establecer Límites",
    icon: Shield,
    color: "from-green-500 to-green-600",
    intro: "La autoestima y los límites van de la mano. Si no te proteges, tu autoestima sufre. Hoy practicarás decir no.",
    exercises: [
      {
        name: "Mapa de límites",
        duration: "15 min",
        description: "Piensa en 3 situaciones recientes donde sentiste que sobrepasaron tus límites o aceptaste algo que no querías. Para cada una escribe: qué pasó, cómo te sentiste, qué habrías querido decir, y cómo podrías responder la próxima vez.",
        tip: "Los límites no son egoísmo. Son autocuidado necesario.",
      },
      {
        name: "Practica el NO asertivo",
        duration: "10 min",
        description: "Practica estas frases en voz alta (sí, en voz alta): 'No, gracias', 'Ahora no me viene bien', 'Necesito pensarlo antes de comprometerme', 'Entiendo tu posición, pero no estoy de acuerdo', 'Prefiero no hacerlo'. Repítelas hasta que suenen naturales.",
        tip: "Decir no es un músculo. Cuanto más lo ejercitas, más fuerte se vuelve.",
      },
    ],
    reflection: "¿Qué límite te gustaría poner esta semana? ¿Qué te lo impide?",
  },
  {
    day: 5,
    title: "Cuidar el Cuerpo",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    intro: "La autoestima no es solo mental. Cómo tratas tu cuerpo refleja cómo te valoras. Hoy nos centramos en el autocuidado físico.",
    exercises: [
      {
        name: "Carta a tu cuerpo",
        duration: "15 min",
        description: "Escríbele una carta a tu cuerpo dándole las gracias. Agradece lo que hace por ti cada día: respirar, moverse, sentir, abrazar, caminar. Si tienes partes que no te gustan, intenta verlas desde la función que cumplen, no desde la estética.",
        tip: "Tu cuerpo es tu hogar. Merece ser tratado con respeto, no con desprecio.",
      },
      {
        name: "Plan de autocuidado",
        duration: "10 min",
        description: "Diseña un mini-plan de cuidado para esta semana con una cosa por categoría: FÍSICO (ej: caminar 20 min), EMOCIONAL (ej: hablar con alguien querido), MENTAL (ej: leer 15 min), PLACER (ej: un baño caliente, tu serie favorita). Haz hoy al menos una.",
        tip: "El autocuidado no es un lujo, es una necesidad. No te sientas culpable por cuidarte.",
      },
    ],
    reflection: "¿Cómo te has sentido al tratar tu cuerpo con amabilidad hoy?",
  },
  {
    day: 6,
    title: "Relaciones y Autoestima",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
    intro: "Nuestras relaciones afectan directamente a la autoestima. Hoy evaluarás si tus relaciones te construyen o te destruyen.",
    exercises: [
      {
        name: "Auditoría de relaciones",
        duration: "15 min",
        description: "Haz una lista de las 5-10 personas con las que más tiempo pasas. Para cada una, marca: ¿Me siento BIEN después de estar con esta persona? (+) ¿Me siento PEOR después de estar con esta persona? (-) ¿Es NEUTRAL? (=). Si hay muchos (-), reflexiona sobre cómo reducir ese contacto o establecer límites.",
        tip: "Eres la media de las 5 personas con las que más tiempo pasas. Elige con quién.",
      },
      {
        name: "Practicar la asertividad",
        duration: "10 min",
        description: "Piensa en algo que necesites comunicar a alguien pero no te atreves. Escríbelo usando esta estructura: 'Cuando [situación], me siento [emoción], porque [razón]. Me gustaría que [petición concreta].' Ejemplo: 'Cuando llegas tarde sin avisar, me siento poco valorada, porque siento que mi tiempo no importa. Me gustaría que me avisaras si vas a retrasarte.'",
        tip: "La asertividad protege tu autoestima y mejora tus relaciones.",
      },
    ],
    reflection: "¿Hay alguna relación que esté afectando a tu autoestima? ¿Qué puedes hacer al respecto?",
  },
  {
    day: 7,
    title: "Tu Nueva Historia",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
    intro: "Último día. Es hora de mirar atrás, celebrar tu esfuerzo y crear una nueva narrativa sobre ti mismo/a.",
    exercises: [
      {
        name: "Revisa tu inventario del día 1",
        duration: "10 min",
        description: "Vuelve a la lista de 10 adjetivos del día 1. ¿Cambiarías alguno? ¿Añadirías nuevos positivos? Escribe una nueva lista de 10 adjetivos que incorpore lo aprendido esta semana. Compara ambas listas.",
        tip: "El cambio puede ser sutil. Si un solo adjetivo ha mejorado, ya es un avance real.",
      },
      {
        name: "Carta de compromiso contigo",
        duration: "15 min",
        description: "Escribe una carta de compromiso: 'Yo, [nombre], me comprometo a: tratarme con compasión cuando me equivoque, reconocer mis logros sin minimizarlos, poner límites cuando lo necesite, cuidar mi cuerpo y mi mente, rodearme de personas que me sumen.' Fírmala y ponle fecha. Guárdala.",
        tip: "Léela cada mes. La autoestima es un músculo que se entrena, no un destino.",
      },
      {
        name: "Celebra tu esfuerzo",
        duration: "5 min",
        description: "Has dedicado 7 días a ti. Eso es enorme. Haz algo hoy para celebrarlo: tu comida favorita, un paseo bonito, llamar a alguien especial. Date las gracias por haber empezado.",
        tip: "Celebrar los logros, por pequeños que sean, refuerza la autoestima.",
      },
    ],
    reflection: "¿Qué es lo más importante que te llevas de esta semana?",
  },
];

export default function Plan7DiasAutoestimaPage() {
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [reflections, setReflections] = useState<Record<number, string>>({});

  const toggleExercise = (dayIndex: number, exIndex: number) => {
    const key = `${dayIndex}-${exIndex}`;
    setCompletedExercises((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDay = (idx: number) => {
    setExpandedDay(expandedDay === idx ? null : idx);
  };

  const totalExercises = days.reduce((sum, d) => sum + d.exercises.length, 0);
  const completedCount = Object.values(completedExercises).filter(Boolean).length;
  const progress = Math.round((completedCount / totalExercises) * 100);

  const handleReset = () => {
    setCompletedExercises({});
    setReflections({});
    setExpandedDay(0);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link href="/guias-interactivas" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver a Guías Interactivas
          </Link>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Plan de 7 Días para Mejorar tu Autoestima
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto mb-6">
              Un programa semanal con ejercicios de reflexión y desafíos diarios para fortalecer tu autoconcepto y tu relación contigo mismo/a.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted dark:text-slate-400">Progreso general</span>
                <span className="font-bold text-navy dark:text-slate-200">{completedCount}/{totalExercises} ejercicios</span>
              </div>
              <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              {progress === 100 && (
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">🎉 ¡Has completado el plan de 7 días!</p>
              )}
            </div>
          </header>

          <div className="space-y-4">
            {days.map((day, dayIdx) => {
              const DayIcon = day.icon;
              const dayExCompleted = day.exercises.filter((_, exIdx) => completedExercises[`${dayIdx}-${exIdx}`]).length;
              const dayComplete = dayExCompleted === day.exercises.length;

              return (
                <div key={day.day} className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                  <button
                    onClick={() => toggleDay(dayIdx)}
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-gray-50 dark:hover:bg-slate-700/50 transition"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${day.color} flex items-center justify-center text-white shadow-lg`}>
                      {dayComplete ? <CheckCircle className="h-6 w-6" /> : <DayIcon className="h-6 w-6" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-beige dark:text-blue-gray uppercase">Día {day.day}</span>
                        {dayComplete && <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">Completado</span>}
                      </div>
                      <h2 className="text-xl font-bold text-navy dark:text-slate-100">{day.title}</h2>
                      <p className="text-sm text-muted dark:text-slate-400">{dayExCompleted}/{day.exercises.length} ejercicios</p>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted dark:text-slate-400 transition-transform ${expandedDay === dayIdx ? "rotate-180" : ""}`} />
                  </button>

                  {expandedDay === dayIdx && (
                    <div className="px-6 pb-6 border-t border-gray-200 dark:border-slate-700">
                      <p className="text-muted dark:text-slate-300 my-4 leading-relaxed">{day.intro}</p>

                      <div className="space-y-4">
                        {day.exercises.map((ex, exIdx) => {
                          const key = `${dayIdx}-${exIdx}`;
                          const done = completedExercises[key];
                          return (
                            <div key={key} className={`rounded-lg border-2 p-5 transition ${done ? "border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/10" : "border-gray-200 dark:border-slate-700"}`}>
                              <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                  <h3 className="font-bold text-navy dark:text-slate-100">{ex.name}</h3>
                                  <span className="text-xs text-muted dark:text-slate-400 flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> {ex.duration}
                                  </span>
                                </div>
                                <button
                                  onClick={() => toggleExercise(dayIdx, exIdx)}
                                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${
                                    done ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-slate-600"
                                  }`}
                                >
                                  <CheckCircle className="h-5 w-5" />
                                </button>
                              </div>
                              <p className="text-muted dark:text-slate-300 text-sm leading-relaxed mb-3">{ex.description}</p>
                              <div className="bg-purple-50 dark:bg-slate-700/50 rounded-lg p-3">
                                <p className="text-sm text-purple-800 dark:text-purple-300">
                                  <strong>💡 Tip:</strong> {ex.tip}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 bg-beige/10 dark:bg-blue-gray/10 rounded-lg p-4">
                        <h4 className="font-semibold text-navy dark:text-slate-100 mb-2">📝 Reflexión del día</h4>
                        <p className="text-sm text-muted dark:text-slate-400 mb-3">{day.reflection}</p>
                        <textarea
                          value={reflections[dayIdx] || ""}
                          onChange={(e) => setReflections({ ...reflections, [dayIdx]: e.target.value })}
                          placeholder="Escribe aquí tu reflexión..."
                          className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-navy dark:text-slate-200 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {progress === 100 && (
            <div className="mt-8 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">🎉 ¡Has completado el plan!</h3>
              <p className="text-white/90 dark:text-slate-300 mb-6">
                Has invertido una semana en ti. Si quieres seguir trabajando tu autoestima con acompañamiento profesional, estoy aquí.
              </p>
              <CTAButtons />
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button onClick={handleReset} className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-slate-200 transition">
              <RotateCcw className="h-4 w-4" /> Reiniciar plan
            </button>
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Aviso importante:</strong> Este plan es orientativo y educativo. Si tu autoestima te causa sufrimiento significativo, consulta con un profesional de salud mental.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
