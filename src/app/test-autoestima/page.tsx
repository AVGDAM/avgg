"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const questions = [
  {
    id: "q1",
    text: "Siento que soy una persona digna de aprecio, al menos en igual medida que los demás",
    options: [
      { value: 3, label: "Muy de acuerdo" },
      { value: 2, label: "De acuerdo" },
      { value: 1, label: "En desacuerdo" },
      { value: 0, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q2",
    text: "Estoy convencido/a de que tengo cualidades buenas",
    options: [
      { value: 3, label: "Muy de acuerdo" },
      { value: 2, label: "De acuerdo" },
      { value: 1, label: "En desacuerdo" },
      { value: 0, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q3",
    text: "Soy capaz de hacer las cosas tan bien como la mayoría de la gente",
    options: [
      { value: 3, label: "Muy de acuerdo" },
      { value: 2, label: "De acuerdo" },
      { value: 1, label: "En desacuerdo" },
      { value: 0, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q4",
    text: "Tengo una actitud positiva hacia mí mismo/a",
    options: [
      { value: 3, label: "Muy de acuerdo" },
      { value: 2, label: "De acuerdo" },
      { value: 1, label: "En desacuerdo" },
      { value: 0, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q5",
    text: "En general, estoy satisfecho/a conmigo mismo/a",
    options: [
      { value: 3, label: "Muy de acuerdo" },
      { value: 2, label: "De acuerdo" },
      { value: 1, label: "En desacuerdo" },
      { value: 0, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q6",
    text: "Siento que no tengo mucho de lo que estar orgulloso/a",
    options: [
      { value: 0, label: "Muy de acuerdo" },
      { value: 1, label: "De acuerdo" },
      { value: 2, label: "En desacuerdo" },
      { value: 3, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q7",
    text: "En general, me inclino a pensar que soy un fracaso",
    options: [
      { value: 0, label: "Muy de acuerdo" },
      { value: 1, label: "De acuerdo" },
      { value: 2, label: "En desacuerdo" },
      { value: 3, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q8",
    text: "Me gustaría poder sentir más respeto por mí mismo/a",
    options: [
      { value: 0, label: "Muy de acuerdo" },
      { value: 1, label: "De acuerdo" },
      { value: 2, label: "En desacuerdo" },
      { value: 3, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q9",
    text: "Hay veces que realmente pienso que soy inútil",
    options: [
      { value: 0, label: "Muy de acuerdo" },
      { value: 1, label: "De acuerdo" },
      { value: 2, label: "En desacuerdo" },
      { value: 3, label: "Muy en desacuerdo" },
    ],
  },
  {
    id: "q10",
    text: "A veces creo que no soy buena persona",
    options: [
      { value: 0, label: "Muy de acuerdo" },
      { value: 1, label: "De acuerdo" },
      { value: 2, label: "En desacuerdo" },
      { value: 3, label: "Muy en desacuerdo" },
    ],
  },
];

function calculateResult(answers: Record<string, number>) {
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0);

  if (score >= 25) {
    return {
      score,
      level: "bajo" as const,
      title: "Autoestima Alta",
      description: "Tienes una autoestima saludable y positiva. Te valoras y confías en tus capacidades.",
      recommendations: [
        "Mantén tu autodiálogo positivo y constructivo",
        "Continúa estableciendo y alcanzando metas personales",
        "Comparte tu confianza ayudando a otros",
        "Celebra tus logros, pero también acepta tus áreas de mejora con compasión",
      ],
      color: "from-green-500 to-green-600",
    };
  } else if (score >= 15) {
    return {
      score,
      level: "medio" as const,
      title: "Autoestima Media",
      description: "Tu autoestima es moderada. Tienes días buenos y malos en cuanto a cómo te percibes.",
      recommendations: [
        "Identifica y cuestiona pensamientos negativos sobre ti mismo/a",
        "Practica la autocompasión - trátate como tratarías a un buen amigo",
        "Establece metas pequeñas y alcanzables para construir confianza",
        "Reconoce y celebra tus logros, por pequeños que sean",
        "Considera trabajar en tu autoestima con un psicólogo si te limita en tu vida",
      ],
      color: "from-yellow-500 to-yellow-600",
    };
  } else {
    return {
      score,
      level: "muy-alto" as const,
      title: "Autoestima Baja",
      description: "Tu autoestima está baja. Esto puede estar afectando negativamente tu bienestar y relaciones.",
      recommendations: [
        "Considera trabajar con un psicólogo - la baja autoestima es tratable",
        "La terapia cognitivo-conductual es muy efectiva para mejorar la autoestima",
        "Identifica el origen de tus autocríticas - a menudo vienen de experiencias pasadas",
        "Practica el autodiálogo compasivo en lugar del autocrítico",
        "Rodéate de personas que te valoren y te traten con respeto",
        "La autoestima se construye con acciones - empieza con pequeños cambios",
      ],
      color: "from-orange-500 to-red-600",
    };
  }
}

export default function TestAutoestimaPage() {
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

            {(result.level === "medio" || result.level === "muy-alto") && (
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
              Test de Autoestima
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Basado en la Escala de Autoestima de Rosenberg. Evalúa cómo te percibes y valoras a ti mismo/a.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">Test de Autoestima de Rosenberg</h2>
              <p className="text-muted dark:text-slate-300 leading-relaxed">
                La Escala de Rosenberg es el test de autoestima más utilizado mundialmente por su fiabilidad y validez científica.
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
