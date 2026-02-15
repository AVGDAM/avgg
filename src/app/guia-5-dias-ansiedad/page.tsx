"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, ChevronDown, RotateCcw, Calendar, Wind, Brain, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const days = [
  {
    day: 1,
    title: "Entender tu Ansiedad",
    icon: Brain,
    color: "from-blue-500 to-blue-600",
    intro: "Hoy vamos a entender qué es la ansiedad, por qué aparece y cómo funciona en tu cuerpo. El conocimiento es el primer paso para manejarla.",
    exercises: [
      {
        name: "Diario de ansiedad",
        duration: "10 min",
        description: "Escribe en un papel o en tu móvil las 3 situaciones del último mes que más ansiedad te han generado. Para cada una, anota: qué pasó, qué sentiste en el cuerpo, qué pensamientos tuviste y qué hiciste.",
        tip: "No juzgues lo que escribes. Solo observa.",
      },
      {
        name: "Escala de ansiedad personal",
        duration: "5 min",
        description: "Crea tu propia escala del 0 al 10. Escribe qué significa para ti cada nivel: 0 = completamente tranquilo/a, 5 = nervioso/a pero funcional, 10 = pánico total. Pon ejemplos reales de tu vida en cada nivel.",
        tip: "Esto te ayudará a comunicar tu ansiedad y a detectarla temprano.",
      },
      {
        name: "Respiración cuadrada (4-4-4-4)",
        duration: "5 min",
        description: "Siéntate cómodamente. Inhala por la nariz 4 segundos → Mantén el aire 4 segundos → Exhala por la boca 4 segundos → Espera 4 segundos. Repite 6 veces.",
        tip: "Hazlo 3 veces hoy: al despertar, después de comer y antes de dormir.",
      },
    ],
    reflection: "¿Qué has aprendido hoy sobre tu ansiedad que no sabías antes?",
  },
  {
    day: 2,
    title: "Controlar la Respiración",
    icon: Wind,
    color: "from-cyan-500 to-cyan-600",
    intro: "La respiración es la herramienta más rápida y accesible para calmar la ansiedad. Hoy vas a dominar dos técnicas poderosas.",
    exercises: [
      {
        name: "Respiración diafragmática",
        duration: "10 min",
        description: "Acuéstate boca arriba. Pon una mano en el pecho y otra en el abdomen. Inhala lentamente por la nariz: solo la mano del abdomen debe subir (el pecho quieto). Exhala lentamente por la boca. Repite durante 10 minutos.",
        tip: "Si al principio te cuesta, no te frustres. El diafragma necesita práctica.",
      },
      {
        name: "Respiración 4-7-8 (relajante)",
        duration: "5 min",
        description: "Inhala por la nariz contando 4 → Mantén el aire contando 7 → Exhala por la boca contando 8 (haciendo un suave sonido 'shhhh'). Repite 4 ciclos. Descansa y haz otros 4.",
        tip: "Esta técnica activa el sistema nervioso parasimpático. Es perfecta antes de dormir.",
      },
      {
        name: "Práctica de emergencia",
        duration: "2 min",
        description: "Simula una situación de ansiedad. Párate, cierra los ojos y haz 5 respiraciones profundas intencionadas: inhala 3 seg, exhala 6 seg (la exhalación siempre más larga). Abre los ojos.",
        tip: "Practica esto varias veces hoy para que se convierta en un reflejo automático.",
      },
    ],
    reflection: "¿Cuál de las dos técnicas de respiración te ha funcionado mejor? ¿Por qué?",
  },
  {
    day: 3,
    title: "Calmar los Pensamientos",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    intro: "La ansiedad se alimenta de pensamientos catastróficos. Hoy aprenderás a identificarlos y cuestionarlos con la técnica cognitiva más efectiva.",
    exercises: [
      {
        name: "Cazador de pensamientos",
        duration: "15 min",
        description: "Durante el día, cuando notes ansiedad, para y escribe: 1) La situación, 2) El pensamiento automático (ej: 'Todo va a salir mal'), 3) La emoción y su intensidad (0-10), 4) Las pruebas A FAVOR del pensamiento, 5) Las pruebas EN CONTRA, 6) Un pensamiento alternativo más realista.",
        tip: "Los pensamientos no son hechos. Cuestiónalos como un detective.",
      },
      {
        name: "Técnica del peor escenario",
        duration: "10 min",
        description: "Piensa en algo que te preocupe ahora. Responde: ¿Qué es lo PEOR que podría pasar? ¿Qué probabilidad real tiene (%)? ¿Lo has superado antes? ¿Qué es lo MEJOR que podría pasar? ¿Qué es lo MÁS PROBABLE que pase?",
        tip: "Nuestro cerebro ansioso sobreestima los peligros. Esto lo equilibra.",
      },
      {
        name: "5 minutos de mindfulness",
        duration: "5 min",
        description: "Siéntate y cierra los ojos. Céntrate en tu respiración. Cuando venga un pensamiento (y vendrá), imagina que lo pones en una nube y lo dejas pasar. No lo sigas ni lo juzgues. Vuelve a la respiración.",
        tip: "No se trata de no pensar, sino de no engancharte a los pensamientos.",
      },
    ],
    reflection: "¿Qué pensamiento ansioso has cuestionado hoy? ¿Ha cambiado tu perspectiva?",
  },
  {
    day: 4,
    title: "Relajar el Cuerpo",
    icon: Heart,
    color: "from-rose-500 to-rose-600",
    intro: "La ansiedad tensa tu cuerpo sin que te des cuenta. Hoy vas a soltar esa tensión acumulada con técnicas corporales.",
    exercises: [
      {
        name: "Relajación muscular progresiva",
        duration: "15 min",
        description: "Recorre tu cuerpo tensando y soltando cada grupo muscular (5 seg tenso, 10 seg relajado): 1) Puños, 2) Brazos, 3) Hombros (súbelos a las orejas), 4) Cara (arruga todo), 5) Abdomen, 6) Piernas, 7) Pies. Al final, escanea tu cuerpo y nota la diferencia.",
        tip: "La tensión deliberada seguida de relajación entrena a tu cuerpo a soltar.",
      },
      {
        name: "Grounding 5-4-3-2-1",
        duration: "5 min",
        description: "Cuando sientas ansiedad, ancla al presente: Nombra 5 cosas que VES, 4 que puedes TOCAR, 3 que ESCUCHAS, 2 que HUELES, 1 que puedes SABOREAR. Hazlo lentamente, deteniéndote en cada sentido.",
        tip: "Esta técnica interrumpe el ciclo de ansiedad anclándote al momento presente.",
      },
      {
        name: "Caminata consciente",
        duration: "15 min",
        description: "Sal a caminar (o camina por casa). Céntrate en cada paso: cómo tus pies tocan el suelo, el movimiento de tus piernas, la temperatura del aire, los sonidos. Cuando tu mente divague, vuelve a las sensaciones físicas.",
        tip: "Combinar movimiento con atención plena es doblemente efectivo contra la ansiedad.",
      },
    ],
    reflection: "¿Dónde acumulas más tensión en tu cuerpo? ¿Has notado alivio al relajarlo?",
  },
  {
    day: 5,
    title: "Plan de Mantenimiento",
    icon: Sparkles,
    color: "from-amber-500 to-orange-600",
    intro: "Último día. Vamos a crear tu kit personal anti-ansiedad y un plan de mantenimiento para seguir mejorando.",
    exercises: [
      {
        name: "Crea tu Kit Anti-Ansiedad",
        duration: "15 min",
        description: "Escribe tu propio plan de emergencia: 1) Mi técnica de respiración favorita es ___, 2) Cuando tengo pensamientos ansiosos, hago ___, 3) Para relajar mi cuerpo, uso ___, 4) Mi persona de apoyo es ___, 5) Una frase que me calma: ___. Pon este plan en un lugar visible o en el fondo de tu móvil.",
        tip: "Tener un plan preparado reduce la ansiedad de antemano.",
      },
      {
        name: "Rutina diaria anti-ansiedad",
        duration: "10 min",
        description: "Diseña tu rutina ideal: MAÑANA: 5 min respiración al despertar + intención del día. TARDE: 5 min pausa consciente + grounding si es necesario. NOCHE: 10 min relajación muscular o respiración 4-7-8 + reflexión de lo bueno del día.",
        tip: "La constancia es más importante que la perfección. 5 minutos diarios son mejor que 30 de vez en cuando.",
      },
      {
        name: "Carta a tu yo ansioso",
        duration: "10 min",
        description: "Escribe una carta para ti mismo/a para cuando estés pasando un mal momento de ansiedad. Incluye: lo que has aprendido esta semana, las técnicas que te funcionan, recordatorios de que has podido antes y que podrás otra vez, palabras de ánimo.",
        tip: "Guarda esta carta en el móvil. Léela cuando la necesites.",
      },
    ],
    reflection: "¿Cómo te sientes comparado/a con el día 1? ¿Qué es lo más valioso que te llevas?",
  },
];

export default function Guia5DiasAnsiedadPage() {
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
              5 Días para Reducir tu Ansiedad
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto mb-6">
              Plan estructurado con ejercicios prácticos basados en Terapia Cognitivo-Conductual. Dedica 30 minutos al día y notarás la diferencia.
            </p>
            
            {/* Progress */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted dark:text-slate-400">Progreso general</span>
                <span className="font-bold text-navy dark:text-slate-200">{completedCount}/{totalExercises} ejercicios</span>
              </div>
              <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
              {progress === 100 && (
                <p className="text-green-600 dark:text-green-400 font-semibold mt-2">🎉 ¡Has completado todos los ejercicios!</p>
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
                                  aria-label={done ? "Marcar como no completado" : "Marcar como completado"}
                                >
                                  <CheckCircle className="h-5 w-5" />
                                </button>
                              </div>
                              <p className="text-muted dark:text-slate-300 text-sm leading-relaxed mb-3">{ex.description}</p>
                              <div className="bg-blue-50 dark:bg-slate-700/50 rounded-lg p-3">
                                <p className="text-sm text-blue-800 dark:text-blue-300">
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
              <h3 className="text-2xl font-bold mb-3">🎉 ¡Enhorabuena! Has completado la guía</h3>
              <p className="text-white/90 dark:text-slate-300 mb-6">
                Has dado un gran paso. Si quieres seguir profundizando con apoyo profesional, estoy aquí para ayudarte.
              </p>
              <CTAButtons />
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <button onClick={handleReset} className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-slate-200 transition">
              <RotateCcw className="h-4 w-4" /> Reiniciar guía
            </button>
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Aviso importante:</strong> Esta guía es orientativa y educativa. No sustituye el tratamiento profesional. Si tu ansiedad es intensa o persistente, consulta con un psicólogo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
