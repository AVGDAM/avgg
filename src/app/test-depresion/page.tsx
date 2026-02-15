"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const questions = [
  {
    id: "q1",
    text: "¿Con qué frecuencia has tenido poco interés o placer en hacer las cosas?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q2",
    text: "¿Te has sentido decaído/a, deprimido/a o sin esperanza?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q3",
    text: "¿Has tenido problemas para dormir (insomnio o dormir demasiado)?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q4",
    text: "¿Te has sentido cansado/a o con poca energía?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q5",
    text: "¿Has tenido poco apetito o has comido en exceso?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q6",
    text: "¿Te has sentido mal contigo mismo/a, o has sentido que eres un fracaso o que has defraudado a tu familia?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q7",
    text: "¿Has tenido dificultad para concentrarte en cosas como leer el periódico o ver televisión?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q8",
    text: "¿Te has movido o hablado tan lento que otras personas podrían haberlo notado? ¿O lo contrario: tan inquieto/a o agitado/a que te movías mucho más de lo habitual?",
    options: [
      { value: 0, label: "Nunca" },
      { value: 1, label: "Varios días" },
      { value: 2, label: "Más de la mitad de los días" },
      { value: 3, label: "Casi todos los días" },
    ],
  },
  {
    id: "q9",
    text: "¿Has tenido pensamientos de que estarías mejor muerto/a o de hacerte daño de alguna manera?",
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
      title: "Depresión Mínima o Ausente",
      description: "No presentas síntomas significativos de depresión en este momento.",
      recommendations: [
        "Mantén tus hábitos saludables actuales",
        "Continúa con tus actividades sociales y de ejercicio",
        "Practica gratitud y mindfulness como prevención",
        "Estate atento/a a cambios en tu estado de ánimo",
      ],
      color: "from-green-500 to-green-600",
    };
  } else if (score <= 9) {
    return {
      score,
      level: "medio" as const,
      title: "Depresión Leve",
      description: "Presentas síntomas leves de depresión que conviene monitorear.",
      recommendations: [
        "Establece una rutina diaria con horarios regulares de sueño",
        "Realiza ejercicio físico al menos 30 minutos, 3-4 veces por semana",
        "Mantén contacto social, aunque no te apetezca",
        "Considera consultar con un profesional si los síntomas persisten",
        "Evita el aislamiento y las sustancias (alcohol, drogas)",
      ],
      color: "from-yellow-500 to-yellow-600",
    };
  } else if (score <= 14) {
    return {
      score,
      level: "alto" as const,
      title: "Depresión Moderada",
      description: "Tus síntomas sugieren depresión moderada. Es recomendable buscar ayuda profesional.",
      recommendations: [
        "Consulta con un psicólogo profesional - la terapia es muy efectiva",
        "La terapia cognitivo-conductual tiene una tasa de éxito del 60-80%",
        "No intentes sobrellevarlo solo/a - pedir ayuda es de valientes",
        "Evita tomar decisiones importantes hasta sentirte mejor",
        "Informa a personas de confianza sobre cómo te sientes",
      ],
      color: "from-orange-500 to-orange-600",
    };
  } else if (score <= 19) {
    return {
      score,
      level: "muy-alto" as const,
      title: "Depresión Moderadamente Severa",
      description: "Presentas síntomas significativos de depresión. Es importante que busques ayuda profesional pronto.",
      recommendations: [
        "Consulta con un psicólogo o psiquiatra lo antes posible",
        "La depresión moderada-severa responde bien al tratamiento profesional",
        "Considera tanto terapia psicológica como evaluación para medicación",
        "No estás solo/a - busca apoyo de familiares y amigos",
        "Si tienes pensamientos de hacerte daño, busca ayuda inmediata (112 o Teléfono de la Esperanza: 717 003 717)",
      ],
      color: "from-red-500 to-red-600",
    };
  } else {
    return {
      score,
      level: "muy-alto" as const,
      title: "Depresión Severa",
      description: "Tus síntomas indican depresión severa. Es crucial que busques ayuda profesional de inmediato.",
      recommendations: [
        "URGENTE: Contacta con un profesional de salud mental hoy mismo",
        "Si tienes pensamientos suicidas, llama al 112 o al Teléfono de la Esperanza: 717 003 717",
        "La depresión severa es tratable - hay esperanza y ayuda disponible",
        "Informa a tu médico de cabecera sobre estos síntomas",
        "No tomes decisiones importantes en este estado - primero busca tratamiento",
        "Pide a alguien de confianza que te acompañe a buscar ayuda si lo necesitas",
      ],
      color: "from-red-600 to-red-700",
    };
  }
}

export default function TestDepresionPage() {
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
                <strong>Aviso importante:</strong> Este test es orientativo y no sustituye un diagnóstico profesional. Si tienes pensamientos suicidas, busca ayuda inmediata.
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
              Test de Depresión (PHQ-9)
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Escala validada científicamente para evaluar síntomas de depresión. Responde pensando en las últimas 2 semanas.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">Test de Depresión PHQ-9</h2>
              <p className="text-muted dark:text-slate-300 leading-relaxed">
                El PHQ-9 (Patient Health Questionnaire-9) es una herramienta reconocida internacionalmente para detectar y medir la severidad de la depresión.
              </p>
              <p className="text-sm text-muted dark:text-slate-400 mt-3 italic">
                Este test es orientativo. Si tienes pensamientos suicidas, busca ayuda inmediata.
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
