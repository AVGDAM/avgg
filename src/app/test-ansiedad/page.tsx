"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Info } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const questions = [
  {
    id: "q1",
    text: "Durante las últimas 2 semanas, ¿con qué frecuencia te has sentido nervioso/a, ansioso/a o muy alterado/a?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q2",
    text: "¿Con qué frecuencia no has sido capaz de parar o controlar tu preocupación?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q3",
    text: "¿Te has preocupado demasiado por diferentes cosas?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q4",
    text: "¿Has tenido dificultades para relajarte?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q5",
    text: "¿Te has sentido tan inquieto/a que te ha sido difícil permanecer sentado/a tranquilamente?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q6",
    text: "¿Te has sentido fácilmente molesto/a o irritable?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q7",
    text: "¿Has sentido miedo, como si algo terrible pudiera suceder?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
];

function calculateResult(answers: Record<string, number>) {
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0);

  if (score <= 4) {
    return {
      score,
      level: "bajo" as const,
      title: "Ansiedad Mínima",
      description: "Tus niveles de ansiedad son normales y no parecen interferir significativamente en tu vida diaria.",
      recommendations: [
        "Mantén hábitos saludables: ejercicio regular, sueño suficiente y alimentación equilibrada",
        "Practica técnicas de relajación preventivas como mindfulness o respiración profunda",
        "Continúa con tus actividades sociales y de ocio",
        "Si en el futuro notas cambios, no dudes en consultar",
      ],
      color: "from-green-500 to-green-600",
    };
  } else if (score <= 9) {
    return {
      score,
      level: "medio" as const,
      title: "Ansiedad Leve",
      description: "Experimentas síntomas de ansiedad leve que pueden estar afectando algunas áreas de tu vida.",
      recommendations: [
        "Considera técnicas de manejo de ansiedad: respiración diafragmática, relajación muscular progresiva",
        "Identifica y reduce factores de estrés en tu vida cuando sea posible",
        "Establece una rutina de autocuidado diaria",
        "Si los síntomas persisten más de 2 semanas, considera consultar con un profesional",
        "El ejercicio físico regular ayuda significativamente a reducir la ansiedad",
      ],
      color: "from-yellow-500 to-yellow-600",
    };
  } else if (score <= 14) {
    return {
      score,
      level: "alto" as const,
      title: "Ansiedad Moderada",
      description: "Tus niveles de ansiedad son moderados y probablemente están interfiriendo en tu vida diaria.",
      recommendations: [
        "Es recomendable consultar con un psicólogo profesional para evaluar tu situación",
        "La terapia cognitivo-conductual es muy efectiva para la ansiedad moderada",
        "No esperes a que empeore - el tratamiento temprano es más efectivo",
        "Evita el consumo de cafeína y alcohol, que pueden empeorar los síntomas",
        "Habla con personas de confianza sobre cómo te sientes",
      ],
      color: "from-orange-500 to-orange-600",
    };
  } else {
    return {
      score,
      level: "muy-alto" as const,
      title: "Ansiedad Severa",
      description: "Tus niveles de ansiedad son altos y requieren atención profesional. Los síntomas probablemente están afectando significativamente tu vida.",
      recommendations: [
        "Es importante que consultes con un psicólogo o psiquiatra lo antes posible",
        "No estás solo/a - la ansiedad severa es tratable con el apoyo adecuado",
        "La combinación de terapia psicológica y, en algunos casos, medicación puede ser muy efectiva",
        "Contacta con nosotros para una evaluación profesional - la primera consulta es gratuita",
        "Si tienes pensamientos de hacerte daño, busca ayuda de emergencia inmediatamente (112)",
      ],
      color: "from-red-500 to-red-600",
    };
  }
}

export default function TestAnsiedadPage() {
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
              <div className="text-5xl font-bold mb-2">{result.score} puntos</div>
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

            {(result.level === "alto" || result.level === "muy-alto") && (
              <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-6">
                <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda profesional?</h3>
                <p className="text-white/90 dark:text-slate-300 mb-6">
                  Basado en tus respuestas, podría beneficiarte hablar con un profesional. La primera consulta es gratuita.
                </p>
                <CTAButtons />
              </div>
            )}

            <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Aviso importante:</strong> Este test es orientativo y no sustituye un diagnóstico profesional. Si tienes dudas o malestar significativo, consulta con un psicólogo.
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
              Test de Ansiedad (GAD-7)
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Escala validada científicamente para evaluar tu nivel de ansiedad. Responde con sinceridad pensando en las últimas 2 semanas.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">Test de Ansiedad GAD-7</h2>
              <p className="text-muted dark:text-slate-300 leading-relaxed">
                Este cuestionario utiliza la escala GAD-7 (Generalized Anxiety Disorder-7), una herramienta validada internacionalmente para detectar trastornos de ansiedad.
              </p>
              <p className="text-sm text-muted dark:text-slate-400 mt-3 italic">
                Este test es orientativo y no sustituye una evaluación profesional.
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
