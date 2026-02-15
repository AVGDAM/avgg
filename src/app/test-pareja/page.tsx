"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const questions = [
  {
    id: "q1",
    text: "¿Cómo calificarías la comunicación en tu relación?",
    options: [
      { value: 3, label: "Excelente - Hablamos abiertamente de todo" },
      { value: 2, label: "Buena - Generalmente nos comunicamos bien" },
      { value: 1, label: "Regular - A veces cuesta comunicarnos" },
      { value: 0, label: "Mala - Hay muchos malentendidos o no hablamos" },
    ],
  },
  {
    id: "q2",
    text: "¿Con qué frecuencia tienen conflictos significativos?",
    options: [
      { value: 3, label: "Rara vez - Y cuando ocurren, los resolvemos bien" },
      { value: 2, label: "Ocasionalmente - Son manejables" },
      { value: 1, label: "Frecuentemente - Nos cuesta resolverlos" },
      { value: 0, label: "Constantemente - Hay mucha tensión" },
    ],
  },
  {
    id: "q3",
    text: "¿Te sientes escuchado/a y comprendido/a por tu pareja?",
    options: [
      { value: 3, label: "Siempre o casi siempre" },
      { value: 2, label: "La mayoría de las veces" },
      { value: 1, label: "Pocas veces" },
      { value: 0, label: "Casi nunca o nunca" },
    ],
  },
  {
    id: "q4",
    text: "¿Cómo es la confianza en tu relación?",
    options: [
      { value: 3, label: "Total - Confío plenamente" },
      { value: 2, label: "Buena - Confío en general" },
      { value: 1, label: "Limitada - Tengo algunas dudas" },
      { value: 0, label: "Baja - Hay problemas de confianza" },
    ],
  },
  {
    id: "q5",
    text: "¿Comparten tiempo de calidad juntos?",
    options: [
      { value: 3, label: "Sí, regularmente y lo disfrutamos" },
      { value: 2, label: "Sí, aunque a veces cuesta encontrar tiempo" },
      { value: 1, label: "Poco - Cada uno va a lo suyo" },
      { value: 0, label: "Casi nada - Estamos distanciados" },
    ],
  },
  {
    id: "q6",
    text: "¿Cómo está la intimidad física y emocional?",
    options: [
      { value: 3, label: "Muy buena - Ambas están bien" },
      { value: 2, label: "Buena - Aunque podría mejorar" },
      { value: 1, label: "Regular - Una o ambas están afectadas" },
      { value: 0, label: "Mala - Hay problemas significativos" },
    ],
  },
  {
    id: "q7",
    text: "¿Se respetan mutuamente, incluso en desacuerdos?",
    options: [
      { value: 3, label: "Siempre" },
      { value: 2, label: "La mayoría de las veces" },
      { value: 1, label: "A veces hay faltas de respeto" },
      { value: 0, label: "Frecuentemente hay faltas de respeto" },
    ],
  },
  {
    id: "q8",
    text: "¿Cómo te sientes sobre el futuro de tu relación?",
    options: [
      { value: 3, label: "Optimista - Veo un futuro juntos" },
      { value: 2, label: "Esperanzado - Con trabajo, saldremos adelante" },
      { value: 1, label: "Incierto - No sé qué pasará" },
      { value: 0, label: "Pesimista - Tengo muchas dudas" },
    ],
  },
];

function calculateResult(answers: Record<string, number>) {
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0);

  if (score >= 20) {
    return {
      score,
      level: "bajo" as const,
      title: "Relación Saludable",
      description: "Tu relación muestra signos de salud y fortaleza. La comunicación, confianza y respeto están presentes.",
      recommendations: [
        "Continúa cultivando la comunicación abierta",
        "Mantén el tiempo de calidad juntos como prioridad",
        "Celebra lo que funciona bien en vuestra relación",
        "Sigue trabajando en equipo para fortalecer el vínculo",
        "Si surge algún conflicto, afrontadlo con respeto y escucha activa",
      ],
      color: "from-green-500 to-green-600",
    };
  } else if (score >= 12) {
    return {
      score,
      level: "medio" as const,
      title: "Relación con Áreas de Mejora",
      description: "Tu relación tiene fortalezas, pero también aspectos que necesitan atención y mejora.",
      recommendations: [
        "Identifica las áreas específicas que necesitan trabajo",
        "Mejora la comunicación: aprended a escucharos sin juzgar",
        "Dedicad tiempo de calidad juntos, sin distracciones",
        "Considera terapia de pareja preventiva para fortalecer el vínculo",
        "Trabajad en la resolución constructiva de conflictos",
        "Expresad aprecio y gratitud mutuamente",
      ],
      color: "from-yellow-500 to-yellow-600",
    };
  } else {
    return {
      score,
      level: "muy-alto" as const,
      title: "Relación en Dificultades",
      description: "Tu relación muestra señales significativas de malestar. Es importante buscar ayuda profesional.",
      recommendations: [
        "La terapia de pareja puede ayudaros significativamente",
        "No esperes a que empeore - la intervención temprana es clave",
        "Evalúa si hay respeto mutuo - sin respeto, la relación no es sana",
        "Si hay violencia (física, verbal o emocional), busca ayuda inmediatamente",
        "Hablad con un profesional sobre vuestros sentimientos y opciones",
        "A veces, la terapia también ayuda a separarse de forma saludable si es necesario",
      ],
      color: "from-orange-500 to-red-600",
    };
  }
}

export default function TestParejePage() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<ReturnType<typeof calculateResult> | null>(null);
  const [showTest, setShowTest] = useState(true);

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Object.keys(answers).length !== questions.length) {
      alert("Por favor, responde todas las preguntas");
      return;
    }

    const testResult = calculateResult(answers);
    setResult(testResult);
    setShowTest(false);
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    setShowTest(true);
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  if (!showTest && result) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-800/30">
        <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
            <Link
              href="/recursos-gratuitos"
              className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Recursos Gratuitos
            </Link>
          </div>
        </div>

        <div className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className={`bg-gradient-to-r ${result.color} rounded-xl p-8 text-white mb-8`}>
              <h2 className="text-3xl font-bold mb-3">{result.title}</h2>
              <div className="text-5xl font-bold mb-2">{result.score} / 24 puntos</div>
              <p className="text-lg opacity-90">{result.description}</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-beige dark:text-blue-gray" />
                Recomendaciones
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

            {result.level === "muy-alto" && (
              <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-6">
                <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda profesional?</h3>
                <p className="text-white/90 dark:text-slate-300 mb-6">
                  La terapia de pareja puede ayudaros a mejorar vuestra relación. La primera consulta es gratuita.
                </p>
                <CTAButtons />
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Aviso importante:</strong> Este test es orientativo y no sustituye una evaluación profesional. Si hay violencia en tu relación, busca ayuda especializada inmediatamente.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-6 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition"
            >
              Hacer el test de nuevo
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
          <Link
            href="/recursos-gratuitos"
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Recursos Gratuitos
          </Link>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Test de Salud de Pareja
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Evalúa la salud de tu relación de pareja. Responde con sinceridad sobre tu situación actual.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">Evaluación de Relación de Pareja</h2>
              <p className="text-muted dark:text-slate-300 leading-relaxed">
                Este cuestionario evalúa aspectos clave de tu relación: comunicación, confianza, intimidad, resolución de conflictos y satisfacción general.
              </p>
              <p className="text-sm text-muted dark:text-slate-400 mt-3 italic">
                Si hay violencia en tu relación, busca ayuda especializada inmediatamente.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {questions.map((question, index) => (
                <div key={question.id} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-navy dark:text-slate-100 mb-4">
                    {index + 1}. {question.text}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition ${
                          answers[question.id] === option.value
                            ? "border-beige dark:border-blue-gray bg-beige/10 dark:bg-blue-gray/10"
                            : "border-gray-200 dark:border-slate-700 hover:border-beige/50 dark:hover:border-blue-gray/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => handleAnswerChange(question.id, option.value)}
                          className="text-beige dark:text-blue-gray focus:ring-beige dark:focus:ring-blue-gray"
                        />
                        <span className="text-muted dark:text-slate-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button
                type="submit"
                disabled={!allAnswered}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition ${
                  allAnswered
                    ? "bg-beige dark:bg-blue-gray hover:bg-beige-dark dark:hover:bg-blue-gray-light cursor-pointer"
                    : "bg-gray-300 dark:bg-slate-700 cursor-not-allowed"
                }`}
              >
                {allAnswered ? "Ver Resultados" : `Responde todas las preguntas (${Object.keys(answers).length}/${questions.length})`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
