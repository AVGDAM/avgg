"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info, AlertTriangle, Briefcase, Heart, Home, Brain, Dumbbell } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const areas = [
  {
    id: "laboral",
    name: "Estrés Laboral",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
    questions: [
      { id: "l1", text: "Siento que tengo demasiada carga de trabajo" },
      { id: "l2", text: "Me cuesta desconectar del trabajo al llegar a casa" },
      { id: "l3", text: "Tengo conflictos o tensiones con compañeros o superiores" },
    ],
  },
  {
    id: "emocional",
    name: "Estrés Emocional",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    questions: [
      { id: "e1", text: "Me siento irritable o con cambios de humor frecuentes" },
      { id: "e2", text: "Tengo dificultad para manejar la frustración o la ira" },
      { id: "e3", text: "Me siento ansioso/a o preocupado/a sin motivo aparente" },
    ],
  },
  {
    id: "relacional",
    name: "Estrés Relacional",
    icon: Home,
    color: "from-purple-500 to-purple-600",
    questions: [
      { id: "r1", text: "Tengo conflictos frecuentes con mi pareja, familia o amigos" },
      { id: "r2", text: "Me siento solo/a o aislado/a de las personas que me importan" },
      { id: "r3", text: "Siento que mis relaciones me generan más tensión que apoyo" },
    ],
  },
  {
    id: "fisico",
    name: "Estrés Físico",
    icon: Dumbbell,
    color: "from-orange-500 to-orange-600",
    questions: [
      { id: "f1", text: "Tengo dolores de cabeza, espalda o tensión muscular frecuente" },
      { id: "f2", text: "Duermo mal o me cuesta conciliar el sueño" },
      { id: "f3", text: "He notado cambios en mi apetito, digestión o energía" },
    ],
  },
  {
    id: "cognitivo",
    name: "Estrés Cognitivo",
    icon: Brain,
    color: "from-teal-500 to-teal-600",
    questions: [
      { id: "c1", text: "Me cuesta concentrarme o mantener la atención" },
      { id: "c2", text: "Tengo pensamientos repetitivos negativos que no puedo parar" },
      { id: "c3", text: "Siento que mi memoria ha empeorado últimamente" },
    ],
  },
];

const allQuestions = areas.flatMap((a) => a.questions);

const options = [
  { value: 0, label: "Nada", emoji: "😌" },
  { value: 1, label: "Poco", emoji: "🙂" },
  { value: 2, label: "Algo", emoji: "😐" },
  { value: 3, label: "Bastante", emoji: "😟" },
  { value: 4, label: "Mucho", emoji: "😰" },
];

function calculateResult(answers: Record<string, number>) {
  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const maxScore = allQuestions.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const areaScores = areas.map((area) => {
    const areaTotal = area.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const areaMax = area.questions.length * 4;
    const areaPct = Math.round((areaTotal / areaMax) * 100);
    return { name: area.name, score: areaTotal, max: areaMax, percentage: areaPct, color: area.color };
  });

  const sortedAreas = [...areaScores].sort((a, b) => b.percentage - a.percentage);
  const worstArea = sortedAreas[0];
  const bestArea = sortedAreas[sortedAreas.length - 1];

  const tipsMap: Record<string, string[]> = {
    "Estrés Laboral": [
      "Establece horarios claros y respeta tu hora de salida",
      "Aprende a decir 'no' a tareas adicionales cuando estés saturado/a",
      "Toma micro-descansos de 5 minutos cada hora",
    ],
    "Estrés Emocional": [
      "Practica la respiración diafragmática cuando sientas ansiedad",
      "Escribe un diario emocional para identificar patrones",
      "Reserva tiempo diario para actividades que te gusten",
    ],
    "Estrés Relacional": [
      "Comunica tus necesidades de forma asertiva, sin agresividad",
      "Dedica tiempo de calidad a las personas importantes",
      "Establece límites saludables en relaciones que te generan tensión",
    ],
    "Estrés Físico": [
      "Haz ejercicio moderado al menos 30 minutos, 3 veces por semana",
      "Crea una rutina de sueño: misma hora, sin pantallas antes de dormir",
      "Practica relajación muscular progresiva antes de dormir",
    ],
    "Estrés Cognitivo": [
      "Practica mindfulness 10 minutos al día para mejorar la concentración",
      "Limita la información negativa (noticias, redes sociales)",
      "Organiza tu día con listas para reducir la carga mental",
    ],
  };

  let level: "bajo" | "leve" | "moderado" | "alto";
  let title: string;
  let description: string;
  let color: string;
  let generalRecs: string[];

  if (percentage <= 20) {
    level = "bajo";
    title = "Estrés Bajo";
    description = "Tu nivel de estrés es saludable. Gestionas bien las demandas de tu día a día.";
    color = "from-green-500 to-emerald-600";
    generalRecs = [
      "Mantén tus hábitos actuales, están funcionando bien",
      "Sigue practicando actividades que te relajan",
      "Refuerza tus relaciones sociales y de apoyo",
    ];
  } else if (percentage <= 45) {
    level = "leve";
    title = "Estrés Leve";
    description = "Tienes un nivel de estrés manejable, pero algunas áreas podrían mejorar. Buen momento para implementar cambios.";
    color = "from-yellow-500 to-amber-600";
    generalRecs = [
      "Incorpora técnicas de relajación a tu rutina diaria",
      "Identifica las fuentes principales de estrés y actúa sobre ellas",
      "Asegúrate de dormir 7-8 horas y hacer ejercicio regular",
    ];
  } else if (percentage <= 70) {
    level = "moderado";
    title = "Estrés Moderado";
    description = "Tu nivel de estrés es significativo y probablemente está afectando tu calidad de vida. Es recomendable actuar.";
    color = "from-orange-500 to-orange-600";
    generalRecs = [
      "Consulta con un profesional de salud mental para evaluar tu situación",
      "Revisa tu estilo de vida: descanso, alimentación y ejercicio",
      "Reduce compromisos no esenciales temporalmente",
      "Habla con personas de confianza sobre tu situación",
    ];
  } else {
    level = "alto";
    title = "Estrés Alto";
    description = "Tu nivel de estrés es muy elevado y requiere atención. El estrés crónico puede provocar problemas físicos y emocionales graves.";
    color = "from-red-500 to-red-700";
    generalRecs = [
      "Busca ayuda profesional lo antes posible",
      "Prioriza tu salud: no dejes pasar más tiempo sin actuar",
      "Valora cambios importantes en las áreas más afectadas",
      "La primera consulta con nosotros es gratuita - podemos ayudarte",
    ];
  }

  const specificTips = tipsMap[worstArea.name] || [];

  return {
    totalScore,
    maxScore,
    percentage,
    areaScores,
    worstArea,
    bestArea,
    specificTips,
    level,
    title,
    description,
    color,
    generalRecs,
  };
}

export default function MedidorEstresPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ReturnType<typeof calculateResult> | null>(null);
  const [showTest, setShowTest] = useState(true);

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length !== allQuestions.length) {
      alert("Por favor, responde todas las preguntas");
      return;
    }
    setResult(calculateResult(answers));
    setShowTest(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setShowTest(true);
  };

  const allAnswered = Object.keys(answers).length === allQuestions.length;

  if (!showTest && result) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-800/30">
        <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
            <Link href="/calculadoras-psicologicas" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Volver a Calculadoras
            </Link>
          </div>
        </div>

        <div className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            {/* Score */}
            <div className={`bg-gradient-to-r ${result.color} rounded-xl p-8 text-white mb-8`}>
              <h2 className="text-3xl font-bold mb-3">{result.title}</h2>
              <div className="text-5xl font-bold mb-2">{result.percentage}%</div>
              <p className="text-lg opacity-90">{result.description}</p>
              <div className="mt-4 bg-white/20 rounded-full h-4 overflow-hidden">
                <div className="h-full bg-white/80 rounded-full transition-all" style={{ width: `${result.percentage}%` }} />
              </div>
            </div>

            {/* Gráfico de áreas */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-6">Mapa de Estrés por Áreas</h3>
              <div className="space-y-5">
                {result.areaScores.map((area) => (
                  <div key={area.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-navy dark:text-slate-200">{area.name}</span>
                      <span className={`text-sm font-bold ${area.percentage > 70 ? "text-red-500" : area.percentage > 45 ? "text-orange-500" : area.percentage > 20 ? "text-yellow-600" : "text-green-500"}`}>
                        {area.percentage}%
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${area.color}`}
                        style={{ width: `${area.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Área más afectada y tips */}
            <div className="bg-orange-50 dark:bg-slate-800 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <h3 className="font-bold text-navy dark:text-slate-100">Área que más te afecta: {result.worstArea.name}</h3>
              </div>
              <p className="text-muted dark:text-slate-300 mb-4">
                Con un {result.worstArea.percentage}% de estrés, esta es el área donde más beneficio obtendrás al hacer cambios.
              </p>
              <h4 className="font-semibold text-navy dark:text-slate-200 mb-2">Tips específicos:</h4>
              <ul className="space-y-2">
                {result.specificTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-slate-300">
                    <CheckCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Punto fuerte */}
            <div className="bg-green-50 dark:bg-slate-800 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-navy dark:text-slate-100 mb-1">Tu punto fuerte: {result.bestArea.name}</h3>
              <p className="text-sm text-muted dark:text-slate-300">
                Con un {result.bestArea.percentage}% de estrés, esta área la gestionas bien. Aprovecha esta fortaleza como base para mejorar otras áreas.
              </p>
            </div>

            {/* Recomendaciones generales */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-beige dark:text-blue-gray" />
                Estrategias de Reducción de Estrés
              </h3>
              <ul className="space-y-3">
                {result.generalRecs.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                    <span className="text-muted dark:text-slate-300">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(result.level === "moderado" || result.level === "alto") && (
              <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-6">
                <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda profesional?</h3>
                <p className="text-white/90 dark:text-slate-300 mb-6">
                  El estrés crónico es tratable. Como psicóloga especializada, puedo ayudarte con herramientas efectivas para reducir tu estrés.
                </p>
                <CTAButtons />
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Aviso importante:</strong> Este medidor es orientativo. No sustituye un diagnóstico profesional. Si tu estrés persiste, consulta con un psicólogo.
              </p>
            </div>

            <button onClick={handleReset} className="w-full py-3 px-6 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
              Medir mi estrés de nuevo
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link href="/calculadoras-psicologicas" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver a Calculadoras
          </Link>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Medidor de Estrés
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Evalúa tu nivel de estrés en 5 áreas clave de tu vida. Identifica dónde se concentra tu estrés y obtén estrategias personalizadas.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">¿Cómo funciona?</h2>
              <p className="text-muted dark:text-slate-300">
                Responde a 15 preguntas sobre 5 áreas de tu vida. Al finalizar, recibirás un análisis visual de tu estrés con tips específicos para cada área.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {areas.map((area) => {
                const AreaIcon = area.icon;
                return (
                  <div key={area.id}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center text-white`}>
                        <AreaIcon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-navy dark:text-slate-100">{area.name}</h2>
                    </div>
                    <div className="space-y-6">
                      {area.questions.map((question) => {
                        const globalIndex = allQuestions.findIndex((q) => q.id === question.id) + 1;
                        return (
                          <div key={question.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
                            <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-4">
                              {globalIndex}. {question.text}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {options.map((option) => (
                                <label
                                  key={option.value}
                                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition ${
                                    answers[question.id] === option.value
                                      ? "border-beige dark:border-blue-gray bg-beige/10 dark:bg-blue-gray/10"
                                      : "border-gray-200 dark:border-slate-700 hover:border-beige/50 dark:hover:border-blue-gray/50"
                                  }`}
                                >
                                  <input type="radio" name={question.id} value={option.value} checked={answers[question.id] === option.value} onChange={() => handleAnswerChange(question.id, option.value)} className="sr-only" />
                                  <span className="text-lg">{option.emoji}</span>
                                  <span className="text-sm font-medium text-muted dark:text-slate-300">{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={!allAnswered}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition ${
                  allAnswered ? "bg-beige dark:bg-blue-gray hover:bg-beige-dark dark:hover:bg-blue-gray-light" : "bg-gray-300 dark:bg-slate-700 cursor-not-allowed"
                }`}
              >
                {allAnswered ? "Ver mi Mapa de Estrés" : `Responde todas las preguntas (${Object.keys(answers).length}/${allQuestions.length})`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
