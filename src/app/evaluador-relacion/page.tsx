"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info, AlertTriangle, Heart, MessageCircle, Shield, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const dimensions = [
  {
    id: "comunicacion",
    name: "Comunicación",
    icon: MessageCircle,
    color: "from-blue-500 to-blue-600",
    questions: [
      { id: "com1", text: "Mi pareja y yo podemos hablar abiertamente de nuestros sentimientos" },
      { id: "com2", text: "Cuando discutimos, escuchamos al otro sin interrumpir" },
      { id: "com3", text: "Nos expresamos sin gritos, insultos ni desprecio" },
    ],
  },
  {
    id: "confianza",
    name: "Confianza y Seguridad",
    icon: Shield,
    color: "from-green-500 to-emerald-600",
    questions: [
      { id: "con1", text: "Confío plenamente en mi pareja" },
      { id: "con2", text: "Me siento seguro/a siendo vulnerable con mi pareja" },
      { id: "con3", text: "Respetamos la privacidad e independencia del otro" },
    ],
  },
  {
    id: "intimidad",
    name: "Intimidad y Conexión",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    questions: [
      { id: "int1", text: "Nos mostramos cariño físico y emocional regularmente" },
      { id: "int2", text: "Pasamos tiempo de calidad juntos (sin pantallas ni distracciones)" },
      { id: "int3", text: "Estamos satisfechos con nuestra vida íntima y sexual" },
    ],
  },
  {
    id: "conflictos",
    name: "Resolución de Conflictos",
    icon: Users,
    color: "from-orange-500 to-amber-600",
    questions: [
      { id: "cnf1", text: "Cuando hay un desacuerdo, buscamos soluciones juntos en lugar de ganar" },
      { id: "cnf2", text: "Sabemos pedir perdón y perdonar cuando es necesario" },
      { id: "cnf3", text: "Los conflictos no se alargan durante días ni se convierten en rencor" },
    ],
  },
  {
    id: "proyecto",
    name: "Proyecto Común",
    icon: Sparkles,
    color: "from-purple-500 to-violet-600",
    questions: [
      { id: "pro1", text: "Tenemos metas y planes de futuro compartidos" },
      { id: "pro2", text: "Nos apoyamos mutuamente en los proyectos individuales" },
      { id: "pro3", text: "Compartimos valores fundamentales sobre la vida" },
    ],
  },
];

const allQuestions = dimensions.flatMap((d) => d.questions);

const options = [
  { value: 1, label: "Totalmente en desacuerdo" },
  { value: 2, label: "En desacuerdo" },
  { value: 3, label: "Algo en desacuerdo" },
  { value: 4, label: "Neutral" },
  { value: 5, label: "Algo de acuerdo" },
  { value: 6, label: "De acuerdo" },
  { value: 7, label: "Totalmente de acuerdo" },
];

function calculateResult(answers: Record<string, number>) {
  const totalScore = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const maxScore = allQuestions.length * 7;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const dimensionScores = dimensions.map((dim) => {
    const dimTotal = dim.questions.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
    const dimMax = dim.questions.length * 7;
    const dimPct = Math.round((dimTotal / dimMax) * 100);
    return { name: dim.name, score: dimTotal, max: dimMax, percentage: dimPct, color: dim.color };
  });

  const sorted = [...dimensionScores].sort((a, b) => a.percentage - b.percentage);
  const weakest = sorted[0];
  const strongest = sorted[sorted.length - 1];

  const tipsMap: Record<string, string[]> = {
    "Comunicación": [
      "Practica la escucha activa: repite lo que tu pareja dice para confirmar que entiendes",
      "Usa mensajes en primera persona ('Yo siento...') en lugar de acusaciones ('Tú siempre...')",
      "Reservad 15 minutos al día para hablar sin distracciones",
      "Aprende a expresar necesidades en lugar de quejas",
    ],
    "Confianza y Seguridad": [
      "Sé coherente entre lo que dices y lo que haces",
      "Respeta el espacio y la privacidad de tu pareja",
      "Comparte tus miedos y vulnerabilidades gradualmente",
      "Si hay heridas del pasado, considera terapia de pareja para trabajarlas",
    ],
    "Intimidad y Conexión": [
      "Planificad citas regulares solo para vosotros dos",
      "Mostrad afecto diariamente: abrazos, besos, palabras bonitas",
      "Hablad abiertamente sobre vuestras necesidades íntimas",
      "Compartid nuevas experiencias juntos para revitalizar la relación",
    ],
    "Resolución de Conflictos": [
      "Usad la regla del 'time-out': si la discusión se calienta, pausa de 20 minutos",
      "Buscad soluciones ganar-ganar en lugar de tener razón",
      "No saquéis temas del pasado en discusiones actuales",
      "Aprended a pedir perdón de forma genuina y a aceptar disculpas",
    ],
    "Proyecto Común": [
      "Hablad periódicamente sobre vuestros sueños y metas",
      "Cread pequeños proyectos conjuntos (viaje, hobby, reto)",
      "Apoyadse mutuamente en los objetivos individuales",
      "Revisad vuestros valores y asegurad que estáis alineados en lo fundamental",
    ],
  };

  let level: "excelente" | "buena" | "mejorable" | "en_riesgo";
  let title: string;
  let description: string;
  let color: string;
  let generalRecs: string[];

  if (percentage >= 80) {
    level = "excelente";
    title = "Relación Excelente";
    description = "Tu relación muestra señales muy saludables en todas las dimensiones. Sigue cuidándola.";
    color = "from-green-500 to-emerald-600";
    generalRecs = [
      "Sigue cultivando lo que os funciona bien",
      "No deis la relación por sentada: el cariño necesita mantenimiento",
      "Celebrad juntos los logros y momentos buenos",
      "Seguid creciendo como individuos y como pareja",
    ];
  } else if (percentage >= 60) {
    level = "buena";
    title = "Relación Buena";
    description = "Vuestra relación tiene una base sólida, pero hay áreas específicas donde podéis mejorar para fortalecerla.";
    color = "from-blue-500 to-blue-600";
    generalRecs = [
      "Trabajad juntos en las áreas más débiles con diálogo abierto",
      "Leed sobre relaciones saludables o haced un taller de pareja",
      "Dedicad tiempo de calidad exclusivo para vosotros",
      "Si las áreas débiles no mejoran, considerad una consulta preventiva de pareja",
    ];
  } else if (percentage >= 40) {
    level = "mejorable";
    title = "Relación Mejorable";
    description = "Vuestra relación tiene áreas significativas que necesitan atención. Con esfuerzo de ambos, se puede mejorar considerablemente.";
    color = "from-orange-500 to-orange-600";
    generalRecs = [
      "Es muy recomendable acudir a terapia de pareja",
      "Identificad juntos los patrones negativos que se repiten",
      "Priorizad la comunicación: hablad de lo que no funciona sin culpar",
      "Tened paciencia: los cambios en la relación llevan tiempo",
      "Cada uno debe trabajar también en su bienestar individual",
    ];
  } else {
    level = "en_riesgo";
    title = "Relación en Riesgo";
    description = "Vuestra relación presenta dificultades importantes en varias áreas. Es fundamental buscar ayuda profesional si ambos queréis seguir juntos.";
    color = "from-red-500 to-red-700";
    generalRecs = [
      "Buscar terapia de pareja es el paso más importante ahora",
      "Si hay violencia física o psicológica, busca ayuda urgente (016)",
      "Valora si ambos estáis comprometidos con mejorar la relación",
      "Cuida tu bienestar emocional individual mientras trabajáis en la relación",
      "La primera consulta con nosotros es gratuita",
    ];
  }

  const specificTips = tipsMap[weakest.name] || [];

  return {
    totalScore,
    maxScore,
    percentage,
    dimensionScores,
    weakest,
    strongest,
    specificTips,
    level,
    title,
    description,
    color,
    generalRecs,
  };
}

export default function EvaluadorRelacionPage() {
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

            {/* Dimensiones */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-6">Análisis de tu Relación</h3>
              <div className="space-y-5">
                {result.dimensionScores.map((dim) => (
                  <div key={dim.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-navy dark:text-slate-200">{dim.name}</span>
                      <span className={`text-sm font-bold ${dim.percentage >= 80 ? "text-green-500" : dim.percentage >= 60 ? "text-blue-500" : dim.percentage >= 40 ? "text-orange-500" : "text-red-500"}`}>
                        {dim.percentage}%
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${dim.color}`}
                        style={{ width: `${dim.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Punto fuerte */}
            <div className="bg-green-50 dark:bg-slate-800 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-navy dark:text-slate-100 mb-1">
                💪 Vuestro punto fuerte: {result.strongest.name}
              </h3>
              <p className="text-sm text-muted dark:text-slate-300">
                Con un {result.strongest.percentage}%, esta es la dimensión donde mejor funcionáis como pareja. Seguid cultivándola.
              </p>
            </div>

            {/* Área de mejora */}
            <div className="bg-orange-50 dark:bg-slate-800 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <h3 className="font-bold text-navy dark:text-slate-100">Área de mejora: {result.weakest.name}</h3>
              </div>
              <p className="text-muted dark:text-slate-300 mb-4">
                Con un {result.weakest.percentage}%, esta es el área donde más podéis crecer. Aquí van consejos específicos:
              </p>
              <ul className="space-y-2">
                {result.specificTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-slate-300">
                    <CheckCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recomendaciones generales */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-beige dark:text-blue-gray" />
                Recomendaciones para Vuestra Relación
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

            {(result.level === "mejorable" || result.level === "en_riesgo") && (
              <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-6">
                <h3 className="text-2xl font-bold mb-3">¿Queréis mejorar vuestra relación?</h3>
                <p className="text-white/90 dark:text-slate-300 mb-6">
                  La terapia de pareja puede ayudaros a entenderos mejor, resolver conflictos y fortalecer vuestra relación. La primera consulta es gratuita.
                </p>
                <CTAButtons />
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Aviso importante:</strong> Este evaluador es orientativo y refleja tu percepción individual. Para un análisis completo, ambos miembros de la pareja deberían participar. Consulta con un profesional si lo necesitas.
              </p>
            </div>

            <button onClick={handleReset} className="w-full py-3 px-6 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
              Evaluar de nuevo
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
              Evaluador de Relación de Pareja
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Analiza la salud de tu relación en 5 dimensiones clave. Descubre vuestros puntos fuertes y áreas de mejora.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">¿Cómo funciona?</h2>
              <p className="text-muted dark:text-slate-300">
                Responde a 15 afirmaciones sobre 5 áreas de tu relación. Indica tu grado de acuerdo con sinceridad. Al finalizar, recibirás un análisis completo con recomendaciones personalizadas.
              </p>
              <p className="text-sm text-muted dark:text-slate-400 mt-3 italic">
                Responde según tu percepción actual. No hay respuestas correctas o incorrectas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              {dimensions.map((dim) => {
                const DimIcon = dim.icon;
                return (
                  <div key={dim.id}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${dim.color} flex items-center justify-center text-white`}>
                        <DimIcon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold text-navy dark:text-slate-100">{dim.name}</h2>
                    </div>
                    <div className="space-y-6">
                      {dim.questions.map((question) => {
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
                                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 cursor-pointer transition text-sm ${
                                    answers[question.id] === option.value
                                      ? "border-beige dark:border-blue-gray bg-beige/10 dark:bg-blue-gray/10"
                                      : "border-gray-200 dark:border-slate-700 hover:border-beige/50 dark:hover:border-blue-gray/50"
                                  }`}
                                >
                                  <input type="radio" name={question.id} value={option.value} checked={answers[question.id] === option.value} onChange={() => handleAnswerChange(question.id, option.value)} className="sr-only" />
                                  <span className="font-bold text-navy dark:text-slate-200">{option.value}</span>
                                  <span className="text-muted dark:text-slate-400 hidden sm:inline">{option.label}</span>
                                </label>
                              ))}
                            </div>
                            <div className="flex justify-between text-xs text-muted dark:text-slate-500 mt-2 sm:hidden">
                              <span>Totalmente en desacuerdo</span>
                              <span>Totalmente de acuerdo</span>
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
                {allAnswered ? "Ver Análisis de mi Relación" : `Responde todas las afirmaciones (${Object.keys(answers).length}/${allQuestions.length})`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
