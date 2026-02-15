"use client";

import Link from "next/link";
import { ArrowLeft, Play, Pause, RotateCcw, Wind, Clock, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import CTAButtons from "@/components/CTAButtons";

interface Technique {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  color: string;
  inhale: number;
  hold1: number;
  exhale: number;
  hold2: number;
  cycles: number;
  duration: string;
}

const techniques: Technique[] = [
  {
    id: "cuadrada",
    name: "Respiración Cuadrada (4-4-4-4)",
    description: "Equilibra el sistema nervioso. Muy usada por militares y atletas para mantener la calma bajo presión.",
    useCases: ["Ansiedad aguda", "Antes de un examen", "Nervios en reuniones"],
    color: "from-blue-500 to-blue-600",
    inhale: 4,
    hold1: 4,
    exhale: 4,
    hold2: 4,
    cycles: 6,
    duration: "5 min",
  },
  {
    id: "relajante",
    name: "Respiración 4-7-8 (Relajante)",
    description: "Activa el sistema nervioso parasimpático. Ideal para conciliar el sueño y reducir ansiedad.",
    useCases: ["Insomnio", "Ansiedad nocturna", "Relajación profunda"],
    color: "from-indigo-500 to-purple-600",
    inhale: 4,
    hold1: 7,
    exhale: 8,
    hold2: 0,
    cycles: 4,
    duration: "5 min",
  },
  {
    id: "diafragmatica",
    name: "Respiración Diafragmática",
    description: "La base de todas las técnicas. Enseña a respirar con el abdomen en lugar del pecho, maximizando la oxigenación.",
    useCases: ["Estrés diario", "Tensión muscular", "Práctica regular"],
    color: "from-teal-500 to-teal-600",
    inhale: 4,
    hold1: 2,
    exhale: 6,
    hold2: 0,
    cycles: 8,
    duration: "7 min",
  },
  {
    id: "calmante",
    name: "Exhalación Prolongada (3-6)",
    description: "La clave está en que la exhalación sea el doble de la inhalación. Esto activa la respuesta de calma del cuerpo.",
    useCases: ["Ataques de pánico", "Ansiedad inmediata", "En cualquier lugar"],
    color: "from-cyan-500 to-cyan-600",
    inhale: 3,
    hold1: 0,
    exhale: 6,
    hold2: 0,
    cycles: 10,
    duration: "5 min",
  },
  {
    id: "energizante",
    name: "Respiración Energizante (4-0-4)",
    description: "Aumenta la energía y el estado de alerta. Útil cuando necesitas activarte sin recurrir a cafeína.",
    useCases: ["Cansancio mental", "Antes de ejercicio", "Falta de concentración"],
    color: "from-orange-500 to-orange-600",
    inhale: 4,
    hold1: 0,
    exhale: 4,
    hold2: 0,
    cycles: 10,
    duration: "3 min",
  },
];

type Phase = "inhale" | "hold1" | "exhale" | "hold2";

function BreathingTimer({ technique }: { technique: Technique }) {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>("inhale");
  const [secondsLeft, setSecondsLeft] = useState(technique.inhale);
  const [currentCycle, setCurrentCycle] = useState(1);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const getPhaseLabel = (p: Phase) => {
    switch (p) {
      case "inhale": return "Inhala";
      case "hold1": return "Mantén";
      case "exhale": return "Exhala";
      case "hold2": return "Espera";
    }
  };

  const getPhaseDuration = useCallback((p: Phase) => {
    switch (p) {
      case "inhale": return technique.inhale;
      case "hold1": return technique.hold1;
      case "exhale": return technique.exhale;
      case "hold2": return technique.hold2;
    }
  }, [technique]);

  const getNextPhase = useCallback((current: Phase): { phase: Phase; newCycle: boolean } => {
    const order: Phase[] = ["inhale", "hold1", "exhale", "hold2"];
    let idx = order.indexOf(current);
    let newCycle = false;
    
    do {
      idx = (idx + 1) % order.length;
      if (idx === 0) newCycle = true;
    } while (getPhaseDuration(order[idx]) === 0);

    return { phase: order[idx], newCycle };
  }, [getPhaseDuration]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          const next = getNextPhase(phase);
          if (next.newCycle) {
            setCurrentCycle((c) => {
              if (c >= technique.cycles) {
                setIsRunning(false);
                setFinished(true);
                return c;
              }
              return c + 1;
            });
          }
          setPhase(next.phase);
          return getPhaseDuration(next.phase);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, phase, technique.cycles, getNextPhase, getPhaseDuration]);

  const handleReset = () => {
    setIsRunning(false);
    setPhase("inhale");
    setSecondsLeft(technique.inhale);
    setCurrentCycle(1);
    setFinished(false);
  };

  const maxDuration = Math.max(technique.inhale, technique.hold1, technique.exhale, technique.hold2);
  const progress = ((getPhaseDuration(phase) - secondsLeft) / getPhaseDuration(phase)) * 100;

  const circleSize = phase === "inhale" ? 100 : phase === "exhale" ? 60 : 80;

  return (
    <div className="text-center py-6">
      {/* Visual circle */}
      <div className="relative w-48 h-48 mx-auto mb-6">
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${technique.color} opacity-20 transition-all duration-1000`}
          style={{ transform: `scale(${circleSize / 100})` }}
        />
        <div
          className={`absolute inset-4 rounded-full bg-gradient-to-br ${technique.color} opacity-40 transition-all duration-1000`}
          style={{ transform: `scale(${circleSize / 100})` }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-navy dark:text-slate-100">{secondsLeft}</span>
          <span className={`text-sm font-semibold ${
            phase === "inhale" ? "text-blue-600 dark:text-blue-400" :
            phase === "exhale" ? "text-purple-600 dark:text-purple-400" :
            "text-amber-600 dark:text-amber-400"
          }`}>{getPhaseLabel(phase)}</span>
        </div>
      </div>

      <p className="text-sm text-muted dark:text-slate-400 mb-4">
        Ciclo {currentCycle} de {technique.cycles}
      </p>

      {/* Progress bar */}
      <div className="max-w-xs mx-auto mb-6">
        <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${technique.color} transition-all duration-300`}
            style={{ width: `${((currentCycle - 1) / technique.cycles) * 100}%` }}
          />
        </div>
      </div>

      {finished ? (
        <div>
          <p className="text-green-600 dark:text-green-400 font-semibold mb-4">✅ ¡Ejercicio completado! ¿Cómo te sientes?</p>
          <button onClick={handleReset} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
            <RotateCcw className="h-4 w-4" /> Repetir
          </button>
        </div>
      ) : (
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition ${
              isRunning
                ? "bg-orange-500 hover:bg-orange-600"
                : `bg-gradient-to-r ${technique.color} hover:opacity-90`
            }`}
          >
            {isRunning ? <><Pause className="h-5 w-5" /> Pausar</> : <><Play className="h-5 w-5" /> {secondsLeft === technique.inhale && currentCycle === 1 ? "Comenzar" : "Continuar"}</>}
          </button>
          <button onClick={handleReset} className="px-4 py-3 bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition">
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function EjerciciosRespiracionPage() {
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);
  const [expandedInfo, setExpandedInfo] = useState<string | null>(null);

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
              Ejercicios de Respiración Guiados
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              5 técnicas de respiración para calmar la ansiedad, conciliar el sueño y reducir el estrés. Con temporizador interactivo y guía visual.
            </p>
          </header>

          {/* Intro box */}
          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-10">
            <h2 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">¿Cómo usar esta herramienta?</h2>
            <p className="text-muted dark:text-slate-300 text-sm">
              Elige una técnica según lo que necesites. Siéntate cómodamente, cierra los ojos si quieres, y sigue el ritmo del temporizador. El círculo se expande al inhalar y se contrae al exhalar.
            </p>
          </div>

          {/* Techniques */}
          <div className="space-y-6">
            {techniques.map((tech) => (
              <div key={tech.id} className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                <div className={`h-1.5 bg-gradient-to-r ${tech.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white shadow-lg`}>
                      <Wind className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-navy dark:text-slate-100">{tech.name}</h2>
                      <p className="text-sm text-muted dark:text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {tech.duration} · {tech.cycles} ciclos
                      </p>
                    </div>
                  </div>

                  <p className="text-muted dark:text-slate-300 text-sm mb-3">{tech.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.useCases.map((use) => (
                      <span key={use} className="text-xs bg-gray-100 dark:bg-slate-700 text-muted dark:text-slate-400 px-3 py-1 rounded-full">
                        {use}
                      </span>
                    ))}
                  </div>

                  {/* Rhythm display */}
                  <div className="flex items-center gap-2 text-sm text-muted dark:text-slate-400 mb-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                    <span className="font-medium">Ritmo:</span>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">Inhala {tech.inhale}s</span>
                    {tech.hold1 > 0 && <><span>→</span><span className="text-amber-600 dark:text-amber-400 font-bold">Mantén {tech.hold1}s</span></>}
                    <span>→</span>
                    <span className="text-purple-600 dark:text-purple-400 font-bold">Exhala {tech.exhale}s</span>
                    {tech.hold2 > 0 && <><span>→</span><span className="text-amber-600 dark:text-amber-400 font-bold">Espera {tech.hold2}s</span></>}
                  </div>

                  {selectedTechnique === tech.id ? (
                    <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                      <BreathingTimer technique={tech} />
                      <button
                        onClick={() => setSelectedTechnique(null)}
                        className="mt-4 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-slate-200 transition"
                      >
                        Cerrar ejercicio
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedTechnique(tech.id)}
                      className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${tech.color} hover:opacity-90 transition`}
                    >
                      Practicar esta técnica
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Necesitas más herramientas?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              La respiración es un excelente primer paso. Si necesitas estrategias más completas para manejar la ansiedad, puedo ayudarte.
            </p>
            <CTAButtons />
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Aviso:</strong> Si experimentas mareos al practicar, detente y respira normalmente. Si tienes problemas respiratorios, consulta con tu médico antes de hacer estos ejercicios.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
