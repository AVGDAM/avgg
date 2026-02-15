"use client";

import Link from "next/link";
import { ArrowLeft, Play, Pause, CheckCircle, RotateCcw, Clock, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import CTAButtons from "@/components/CTAButtons";

const muscleGroups = [
  {
    id: "manos",
    name: "Manos y Puños",
    bodyPart: "🤛",
    tensionInstruction: "Cierra los puños con fuerza, como si apretaras una pelota de goma. Siente la tensión en los dedos, las palmas y los antebrazos.",
    relaxInstruction: "Abre las manos lentamente. Deja que los dedos se separen. Siente cómo fluye la sangre y el calor vuelve a las manos.",
    tip: "Nota la diferencia entre tensión y relajación. Esa diferencia es la clave.",
  },
  {
    id: "brazos",
    name: "Brazos y Bíceps",
    bodyPart: "💪",
    tensionInstruction: "Flexiona ambos brazos, llevando los puños hacia los hombros. Aprieta los bíceps con fuerza, como si hicieras pesas.",
    relaxInstruction: "Baja los brazos suavemente a los lados. Déjalos caer como peso muerto. Siente los brazos pesados y relajados.",
    tip: "Deja que la gravedad haga el trabajo. No coloques los brazos, déjalos caer.",
  },
  {
    id: "hombros",
    name: "Hombros y Cuello",
    bodyPart: "🫁",
    tensionInstruction: "Sube los hombros hacia las orejas todo lo que puedas. Mantén. Siente la tensión en los trapecios y el cuello.",
    relaxInstruction: "Deja caer los hombros de golpe. Gira suavemente la cabeza a un lado y al otro. Siente cómo se libera la tensión del cuello.",
    tip: "Los hombros y el cuello acumulan la mayor parte del estrés. Presta especial atención a esta zona.",
  },
  {
    id: "cara",
    name: "Cara y Mandíbula",
    bodyPart: "😣",
    tensionInstruction: "Arruga toda la cara: cierra los ojos con fuerza, arruga la nariz, aprieta la mandíbula y frunce los labios. Toda la cara tensa.",
    relaxInstruction: "Relaja todo de golpe. Deja la boca ligeramente abierta. La lengua suelta. Los ojos cerrados suavemente. La frente lisa.",
    tip: "Apretamos la mandíbula sin darnos cuenta, especialmente durmiendo. Revísala a lo largo del día.",
  },
  {
    id: "pecho",
    name: "Pecho y Espalda",
    bodyPart: "🫀",
    tensionInstruction: "Toma una respiración profunda y mantén el aire. Al mismo tiempo, intenta juntar los omóplatos detrás, sacando pecho.",
    relaxInstruction: "Exhala lentamente y deja que el pecho y la espalda se relajen. Siente cómo la espalda se apoya completamente en la superficie.",
    tip: "Esta zona está conectada con la ansiedad. Al relajar el pecho, envías una señal de calma a tu cerebro.",
  },
  {
    id: "abdomen",
    name: "Abdomen",
    bodyPart: "🟡",
    tensionInstruction: "Contrae el abdomen como si alguien fuera a darte un golpe suave en la barriga. Mantén los músculos apretados.",
    relaxInstruction: "Suelta el abdomen completamente. Deja que la barriga se expanda naturalmente con cada respiración. Sin juzgar, sin controlar.",
    tip: "Respira con el abdomen: al inhalar, la barriga sube. Al exhalar, baja. Esto activa la relajación profunda.",
  },
  {
    id: "piernas",
    name: "Piernas y Muslos",
    bodyPart: "🦵",
    tensionInstruction: "Estira las piernas y levántalas ligeramente del suelo. Aprieta los muslos y los cuádriceps con fuerza.",
    relaxInstruction: "Deja caer las piernas. Siente el peso de los muslos contra la superficie. Las piernas pesadas, relajadas, sin hacer nada.",
    tip: "Si estás sentado/a, puedes presionar los pies contra el suelo en lugar de levantar las piernas.",
  },
  {
    id: "pies",
    name: "Pies y Dedos",
    bodyPart: "🦶",
    tensionInstruction: "Curva los dedos de los pies hacia abajo, como intentando agarrar el suelo. Siente la tensión en la planta del pie y los dedos.",
    relaxInstruction: "Suelta los dedos. Extiéndelos. Siente la planta del pie relajada. Los tobillos sueltos. Los pies pesados y calientes.",
    tip: "Terminar por los pies completa el recorrido corporal. Ahora siente tu cuerpo entero relajado.",
  },
];

const TENSION_TIME = 7;
const RELAX_TIME = 15;
const TRANSITION_TIME = 3;

type Phase = "intro" | "tension" | "release" | "relax" | "transition" | "complete";

export default function RelajacionProgresivaPage() {
  const [isGuided, setIsGuided] = useState(false);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [phase, setPhase] = useState<Phase>("intro");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completedGroups, setCompletedGroups] = useState<Set<number>>(new Set());
  const [manualMode, setManualMode] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startGuided = () => {
    setIsGuided(true);
    setManualMode(false);
    setCurrentGroup(0);
    setPhase("tension");
    setTimeLeft(TENSION_TIME);
    setIsRunning(true);
    setCompletedGroups(new Set());
  };

  const advancePhase = useCallback(() => {
    if (phase === "tension") {
      setPhase("relax");
      setTimeLeft(RELAX_TIME);
    } else if (phase === "relax") {
      setCompletedGroups((prev) => new Set([...prev, currentGroup]));
      if (currentGroup < muscleGroups.length - 1) {
        setPhase("transition");
        setTimeLeft(TRANSITION_TIME);
      } else {
        setPhase("complete");
        setIsRunning(false);
      }
    } else if (phase === "transition") {
      setCurrentGroup((prev) => prev + 1);
      setPhase("tension");
      setTimeLeft(TENSION_TIME);
    }
  }, [phase, currentGroup]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          advancePhase();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, advancePhase]);

  const handleReset = () => {
    setIsGuided(false);
    setIsRunning(false);
    setCurrentGroup(0);
    setPhase("intro");
    setTimeLeft(0);
    setCompletedGroups(new Set());
    setManualMode(true);
  };

  const toggleManualComplete = (idx: number) => {
    setCompletedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const getPhaseInfo = () => {
    const group = muscleGroups[currentGroup];
    switch (phase) {
      case "tension":
        return { label: "TENSA", instruction: group.tensionInstruction, color: "from-red-500 to-orange-500", bg: "bg-red-50 dark:bg-red-900/10" };
      case "relax":
        return { label: "RELAJA", instruction: group.relaxInstruction, color: "from-green-500 to-emerald-500", bg: "bg-green-50 dark:bg-green-900/10" };
      case "transition":
        return { label: "TRANSICIÓN", instruction: `Prepárate para: ${muscleGroups[currentGroup + 1]?.name}`, color: "from-blue-500 to-blue-500", bg: "bg-blue-50 dark:bg-blue-900/10" };
      default:
        return { label: "", instruction: "", color: "", bg: "" };
    }
  };

  const progress = (completedGroups.size / muscleGroups.length) * 100;

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
              Relajación Muscular Progresiva
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Técnica de Jacobson: tensa y relaja cada grupo muscular para liberar la tensión acumulada. 8 grupos musculares, 15-20 minutos.
            </p>
          </header>

          {/* Intro / Mode selector */}
          {!isGuided && manualMode && (
            <div className="mb-10">
              <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-6">
                <h2 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">¿Cómo funciona?</h2>
                <p className="text-muted dark:text-slate-300 text-sm mb-3">
                  Recorrerás 8 grupos musculares. Para cada uno: <strong>tensa</strong> el músculo 7 segundos → <strong>suelta</strong> y <strong>relaja</strong> 15 segundos. La diferencia entre tensar y soltar enseña a tu cuerpo a relajarse profundamente.
                </p>
                <p className="text-sm text-muted dark:text-slate-400 italic">
                  Busca un lugar tranquilo, acuéstate o siéntate cómodamente, y cierra los ojos.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  onClick={startGuided}
                  className="p-6 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-semibold hover:opacity-90 transition text-left"
                >
                  <Play className="h-8 w-8 mb-3" />
                  <h3 className="text-xl font-bold mb-1">Modo Guiado</h3>
                  <p className="text-sm text-white/80">Con temporizador automático. Te guío paso a paso.</p>
                  <p className="text-xs text-white/60 mt-2 flex items-center gap-1"><Clock className="h-3 w-3" /> ~18 min</p>
                </button>
                <button
                  onClick={() => setManualMode(true)}
                  className="p-6 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl font-semibold hover:border-beige dark:hover:border-blue-gray transition text-left"
                >
                  <CheckCircle className="h-8 w-8 mb-3 text-beige dark:text-blue-gray" />
                  <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-1">Modo Libre</h3>
                  <p className="text-sm text-muted dark:text-slate-400">Lee las instrucciones y marca cada grupo a tu ritmo.</p>
                  <p className="text-xs text-muted dark:text-slate-500 mt-2">A tu propio ritmo</p>
                </button>
              </div>
            </div>
          )}

          {/* Guided mode */}
          {isGuided && phase !== "complete" && (
            <div className="mb-10">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted dark:text-slate-400">Progreso</span>
                  <span className="font-bold text-navy dark:text-slate-200">{completedGroups.size}/{muscleGroups.length} grupos</span>
                </div>
                <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Current exercise */}
              {(() => {
                const info = getPhaseInfo();
                const group = muscleGroups[currentGroup];
                return (
                  <div className={`rounded-xl border-2 p-8 transition-all ${info.bg} ${phase === "tension" ? "border-red-300 dark:border-red-700" : phase === "relax" ? "border-green-300 dark:border-green-700" : "border-blue-300 dark:border-blue-700"}`}>
                    <div className="text-center mb-6">
                      <span className="text-5xl mb-3 block">{group.bodyPart}</span>
                      <h2 className="text-2xl font-bold text-navy dark:text-slate-100">{group.name}</h2>
                      <span className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${info.color}`}>
                        {info.label}
                      </span>
                    </div>

                    <p className="text-center text-muted dark:text-slate-300 leading-relaxed mb-6 text-lg">
                      {info.instruction}
                    </p>

                    {/* Timer */}
                    <div className="text-center">
                      <div className="text-5xl font-bold text-navy dark:text-slate-100 mb-2">{timeLeft}</div>
                      <p className="text-sm text-muted dark:text-slate-400">segundos</p>
                    </div>

                    {phase !== "transition" && (
                      <div className="mt-4 bg-white/60 dark:bg-slate-700/50 rounded-lg p-3 text-center">
                        <p className="text-sm text-muted dark:text-slate-400">
                          <strong>💡</strong> {group.tip}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-center gap-3 mt-6">
                      <button
                        onClick={() => setIsRunning(!isRunning)}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition ${isRunning ? "bg-orange-500 hover:bg-orange-600" : "bg-green-500 hover:bg-green-600"}`}
                      >
                        {isRunning ? <><Pause className="h-5 w-5" /> Pausar</> : <><Play className="h-5 w-5" /> Continuar</>}
                      </button>
                      <button onClick={handleReset} className="px-4 py-3 bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                        <RotateCcw className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                );
              })()}

              {/* Group list */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {muscleGroups.map((g, idx) => (
                  <span
                    key={g.id}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                      idx === currentGroup ? "bg-beige dark:bg-blue-gray text-white" :
                      completedGroups.has(idx) ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                      "bg-gray-100 dark:bg-slate-700 text-muted dark:text-slate-400"
                    }`}
                  >
                    {g.bodyPart} {g.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Guided complete */}
          {isGuided && phase === "complete" && (
            <div className="mb-10">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-8 text-center text-white mb-6">
                <h2 className="text-3xl font-bold mb-3">🎉 ¡Sesión completada!</h2>
                <p className="text-lg text-white/90 mb-2">Has relajado los 8 grupos musculares.</p>
                <p className="text-white/80">Quédate un momento en silencio. Siente tu cuerpo entero. Nota la diferencia respecto a cuando empezaste.</p>
              </div>
              <div className="flex justify-center gap-4">
                <button onClick={startGuided} className="inline-flex items-center gap-2 px-6 py-3 bg-beige dark:bg-blue-gray text-white rounded-lg font-semibold hover:opacity-90 transition">
                  <RotateCcw className="h-4 w-4" /> Repetir sesión
                </button>
                <button onClick={handleReset} className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                  Volver al inicio
                </button>
              </div>
            </div>
          )}

          {/* Manual mode - always visible */}
          {manualMode && !isGuided && (
            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy dark:text-slate-100">Grupos Musculares</h2>
                <span className="text-sm text-muted dark:text-slate-400">{completedGroups.size}/{muscleGroups.length} completados</span>
              </div>

              <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mb-8">
                <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>

              <div className="space-y-4">
                {muscleGroups.map((group, idx) => {
                  const done = completedGroups.has(idx);
                  return (
                    <div key={group.id} className={`rounded-xl border-2 overflow-hidden bg-white dark:bg-slate-800 transition ${done ? "border-green-300 dark:border-green-700" : "border-gray-200 dark:border-slate-700"}`}>
                      <div className="p-5">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-3xl">{group.bodyPart}</span>
                          <div className="flex-1">
                            <h3 className="font-bold text-navy dark:text-slate-100 text-lg">{group.name}</h3>
                          </div>
                          <button
                            onClick={() => toggleManualComplete(idx)}
                            className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition ${done ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400 hover:bg-gray-300 dark:hover:bg-slate-600"}`}
                          >
                            <CheckCircle className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-4">
                            <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-2">Tensa (7 segundos)</p>
                            <p className="text-sm text-muted dark:text-slate-300">{group.tensionInstruction}</p>
                          </div>
                          <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4">
                            <p className="text-xs font-bold text-green-600 dark:text-green-400 uppercase mb-2">Relaja (15 segundos)</p>
                            <p className="text-sm text-muted dark:text-slate-300">{group.relaxInstruction}</p>
                          </div>
                        </div>

                        <div className="mt-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                          <p className="text-xs text-muted dark:text-slate-400"><strong>💡</strong> {group.tip}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {progress === 100 && manualMode && (
            <div className="mb-8 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">¡Sesión completada!</h3>
              <p className="text-white/90 dark:text-slate-300 mb-6">
                Si quieres profundizar en técnicas de relajación con acompañamiento profesional, estoy aquí.
              </p>
              <CTAButtons />
            </div>
          )}

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Aviso:</strong> La relajación muscular progresiva es generalmente segura. Si tienes lesiones musculares, adapta la intensidad de la tensión. Si sientes dolor, reduce la fuerza o salta ese grupo muscular.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
