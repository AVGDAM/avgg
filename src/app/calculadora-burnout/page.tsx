"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info, AlertTriangle, TrendingUp, Battery, Brain, Users, Clock } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const dimensions = [
  {
    id: "agotamiento",
    name: "Agotamiento Emocional",
    icon: Battery,
    questions: [
      { id: "ae1", text: "Me siento emocionalmente agotado/a por mi trabajo" },
      { id: "ae2", text: "Me siento cansado/a al levantarme por la mañana y tener que enfrentar otro día de trabajo" },
      { id: "ae3", text: "Trabajar todo el día es realmente un esfuerzo para mí" },
      { id: "ae4", text: "Me siento frustrado/a por mi trabajo" },
    ],
  },
  {
    id: "despersonalizacion",
    name: "Despersonalización",
    icon: Users,
    questions: [
      { id: "dp1", text: "Siento que trato a algunas personas como si fueran objetos impersonales" },
      { id: "dp2", text: "Me he vuelto más insensible con la gente desde que tengo este trabajo" },
      { id: "dp3", text: "Me preocupa que este trabajo me esté endureciendo emocionalmente" },
    ],
  },
  {
    id: "realizacion",
    name: "Realización Personal",
    icon: TrendingUp,
    questions: [
      { id: "rp1", text: "Siento que no estoy influyendo positivamente en la vida de otras personas a través de mi trabajo" },
      { id: "rp2", text: "Me siento con poca energía o vitalidad" },
      { id: "rp3", text: "Siento que no estoy consiguiendo logros valiosos en mi trabajo" },
    ],
  },
  {
    id: "fisico",
    name: "Síntomas Físicos",
    icon: Brain,
    questions: [
      { id: "sf1", text: "Tengo dolores de cabeza frecuentes o tensión muscular" },
      { id: "sf2", text: "Tengo problemas para dormir o me despierto pensando en el trabajo" },
      { id: "sf3", text: "Noto cambios en mi apetito o peso" },
    ],
  },
];

const allQuestions = dimensions.flatMap((d) => d.questions);

const options = [
  { value: 0, label: "Nunca" },
  { value: 1, label: "Alguna vez al año" },
  { value: 2, label: "Una vez al mes" },
  { value: 3, label: "Varias veces al mes" },
  { value: 4, label: "Una vez a la semana" },
  { value: 5, label: "Varias veces a la semana" },
  { value: 6, label: "Todos los días" },
];

function calculateResult(answers: Record<string, number>) {
  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const maxScore = allQuestions.length * 6;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const dimensionScores = dimensions.map((dim) => {
    const dimTotal = dim.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const dimMax = dim.questions.length * 6;
    const dimPct = Math.round((dimTotal / dimMax) * 100);
    return { name: dim.name, score: dimTotal, max: dimMax, percentage: dimPct };
  });

  const worstDimension = dimensionScores.reduce((worst, d) => (d.percentage > worst.percentage ? d : worst), dimensionScores[0]);

  if (percentage <= 20) {
    return {
      totalScore,
      maxScore,
      percentage,
      dimensionScores,
      worstDimension,
      level: "bajo" as const,
      title: "Sin Burnout",
      description: "No muestras signos significativos de burnout. Tu relación con el trabajo parece saludable.",
      recommendations: [
        "Mantén tus hábitos actuales de autocuidado y desconexión",
        "Sigue estableciendo límites saludables entre trabajo y vida personal",
        "Practica actividades de ocio y ejercicio regularmente",
        "Cultiva relaciones sociales fuera del entorno laboral",
      ],
      color: "from-green-500 to-emerald-600",
    };
  } else if (percentage <= 40) {
    return {
      totalScore,
      maxScore,
      percentage,
      dimensionScores,
      worstDimension,
      level: "leve" as const,
      title: "Burnout Leve",
      description: "Muestras algunos signos iniciales de desgaste profesional. Es el momento ideal para tomar medidas preventivas.",
      recommendations: [
        "Revisa tu carga de trabajo y aprende a delegar cuando sea posible",
        "Establece horarios claros de desconexión digital",
        "Incorpora pausas activas durante tu jornada laboral",
        "Practica técnicas de relajación como respiración diafragmática o mindfulness",
        "Habla con tu supervisor sobre la distribución de tareas si es necesario",
      ],
      color: "from-yellow-500 to-amber-600",
    };
  } else if (percentage <= 60) {
    return {
      totalScore,
      maxScore,
      percentage,
      dimensionScores,
      worstDimension,
      level: "moderado" as const,
      title: "Burnout Moderado",
      description: "Presentas signos claros de agotamiento profesional que están afectando tu bienestar. Es recomendable actuar ahora.",
      recommendations: [
        "Consulta con un profesional de salud mental para evaluar tu situación",
        "Evalúa seriamente cambios en tu entorno laboral",
        "Prioriza el descanso: vacaciones, días libres, reducción de jornada si es posible",
        "Practica ejercicio físico regular (reduce cortisol y estrés)",
        "Considera si necesitas apoyo psicológico profesional",
        "Habla con personas de confianza sobre cómo te sientes",
      ],
      color: "from-orange-500 to-orange-600",
    };
  } else {
    return {
      totalScore,
      maxScore,
      percentage,
      dimensionScores,
      worstDimension,
      level: "severo" as const,
      title: "Burnout Severo",
      description: "Tu nivel de agotamiento profesional es alto y necesita atención urgente. El burnout severo puede derivar en problemas de salud graves.",
      recommendations: [
        "Busca ayuda profesional lo antes posible - un psicólogo puede ayudarte",
        "Habla con tu médico si experimentas síntomas físicos persistentes",
        "Valora seriamente una baja temporal o cambio laboral",
        "No ignores las señales de tu cuerpo y mente",
        "La primera consulta con nosotros es gratuita - podemos orientarte",
        "Si sientes que no puedes más, llama al 024 (línea de atención a conducta suicida)",
      ],
      color: "from-red-500 to-red-700",
    };
  }
}

export default function CalculadoraBurnoutPage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ReturnType<typeof calculateResult> | null>(null);
  const [showTest, setShowTest] = useState(true);
  const [currentDimension, setCurrentDimension] = useState(0);

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length !== allQuestions.length) {
      alert("Por favor, responde todas las preguntas");
      return;
    }
    const testResult = calculateResult(answers);
    setResult(testResult);
    setShowTest(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setShowTest(true);
    setCurrentDimension(0);
  };

  const allAnswered = Object.keys(answers).length === allQuestions.length;
  const currentDimQuestions = dimensions[currentDimension].questions;
  const currentDimAnswered = currentDimQuestions.every((q) => answers[q.id] !== undefined);

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
            {/* Score principal */}
            <div className={`bg-gradient-to-r ${result.color} rounded-xl p-8 text-white mb-8`}>
              <h2 className="text-3xl font-bold mb-3">{result.title}</h2>
              <div className="text-5xl font-bold mb-2">{result.percentage}%</div>
              <p className="text-lg opacity-90">{result.description}</p>
              <div className="mt-4 bg-white/20 rounded-full h-4 overflow-hidden">
                <div className="h-full bg-white/80 rounded-full transition-all" style={{ width: `${result.percentage}%` }} />
              </div>
            </div>

            {/* Dimensiones */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-6">Análisis por Dimensiones</h3>
              <div className="space-y-5">
                {result.dimensionScores.map((dim) => (
                  <div key={dim.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-navy dark:text-slate-200">{dim.name}</span>
                      <span className={`text-sm font-bold ${dim.percentage > 60 ? "text-red-500" : dim.percentage > 40 ? "text-orange-500" : dim.percentage > 20 ? "text-yellow-600" : "text-green-500"}`}>
                        {dim.percentage}%
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${dim.percentage > 60 ? "bg-red-500" : dim.percentage > 40 ? "bg-orange-500" : dim.percentage > 20 ? "bg-yellow-500" : "bg-green-500"}`}
                        style={{ width: `${dim.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Área más afectada */}
            <div className="bg-orange-50 dark:bg-slate-800 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <h3 className="font-bold text-navy dark:text-slate-100">Área más afectada</h3>
              </div>
              <p className="text-muted dark:text-slate-300">
                <strong>{result.worstDimension.name}</strong> con un {result.worstDimension.percentage}% de afectación. Centra tus esfuerzos de mejora en esta área.
              </p>
            </div>

            {/* Recomendaciones */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-beige dark:text-blue-gray" />
                Plan de Acción Personalizado
              </h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-beige dark:text-blue-gray shrink-0 mt-0.5" />
                    <span className="text-muted dark:text-slate-300">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(result.level === "moderado" || result.level === "severo") && (
              <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-6">
                <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda profesional?</h3>
                <p className="text-white/90 dark:text-slate-300 mb-6">
                  El burnout es tratable. Como psicóloga especializada en estrés laboral, puedo ayudarte a recuperar tu bienestar.
                </p>
                <CTAButtons />
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Aviso importante:</strong> Esta calculadora es orientativa y basada en el modelo Maslach. No sustituye un diagnóstico profesional. Si tienes dudas, consulta con un psicólogo.
              </p>
            </div>

            <button onClick={handleReset} className="w-full py-3 px-6 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
              Hacer la calculadora de nuevo
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
              Calculadora de Burnout
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Evalúa tu nivel de agotamiento profesional en 4 dimensiones clave. Basada en el modelo Maslach de burnout.
            </p>
          </header>

          {/* Progress bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex gap-2">
              {dimensions.map((dim, idx) => {
                const dimAnswered = dim.questions.every((q) => answers[q.id] !== undefined);
                return (
                  <button
                    key={dim.id}
                    onClick={() => setCurrentDimension(idx)}
                    className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-medium transition ${
                      idx === currentDimension
                        ? "bg-beige dark:bg-blue-gray text-white"
                        : dimAnswered
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-gray-100 dark:bg-slate-700 text-muted dark:text-slate-400"
                    }`}
                  >
                    {dim.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <div className="flex items-center gap-3 mb-2">
                {(() => { const Icon = dimensions[currentDimension].icon; return <Icon className="h-6 w-6 text-beige dark:text-blue-gray" />; })()}
                <h2 className="text-2xl font-bold text-navy dark:text-slate-100">{dimensions[currentDimension].name}</h2>
              </div>
              <p className="text-sm text-muted dark:text-slate-400 italic">
                Indica con qué frecuencia experimentas cada situación en relación con tu trabajo.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                {currentDimQuestions.map((question, index) => {
                  const globalIndex = allQuestions.findIndex((q) => q.id === question.id) + 1;
                  return (
                    <div key={question.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
                      <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-4">
                        {globalIndex}. {question.text}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {options.map((option) => (
                          <label
                            key={option.value}
                            className={`flex flex-col items-center gap-1 p-3 rounded-lg border-2 cursor-pointer transition text-center ${
                              answers[question.id] === option.value
                                ? "border-beige dark:border-blue-gray bg-beige/10 dark:bg-blue-gray/10"
                                : "border-gray-200 dark:border-slate-700 hover:border-beige/50 dark:hover:border-blue-gray/50"
                            }`}
                          >
                            <input type="radio" name={question.id} value={option.value} checked={answers[question.id] === option.value} onChange={() => handleAnswerChange(question.id, option.value)} className="sr-only" />
                            <span className="text-lg font-bold text-navy dark:text-slate-200">{option.value}</span>
                            <span className="text-xs text-muted dark:text-slate-400">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8">
                {currentDimension > 0 && (
                  <button type="button" onClick={() => setCurrentDimension(currentDimension - 1)} className="flex-1 py-4 px-6 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                    ← Anterior
                  </button>
                )}
                {currentDimension < dimensions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (currentDimAnswered) setCurrentDimension(currentDimension + 1);
                      else alert("Responde todas las preguntas de esta sección");
                    }}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold text-white transition ${
                      currentDimAnswered ? "bg-beige dark:bg-blue-gray hover:bg-beige-dark dark:hover:bg-blue-gray-light" : "bg-gray-300 dark:bg-slate-600 cursor-not-allowed"
                    }`}
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!allAnswered}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold text-white transition ${
                      allAnswered ? "bg-beige dark:bg-blue-gray hover:bg-beige-dark dark:hover:bg-blue-gray-light" : "bg-gray-300 dark:bg-slate-700 cursor-not-allowed"
                    }`}
                  >
                    {allAnswered ? "Ver Resultados" : `Completa todas las preguntas (${Object.keys(answers).length}/${allQuestions.length})`}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
