"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Info } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const questions = [
  {
    id: "q1",
    text: "¿Cómo calificarías tu estado de ánimo general en las últimas semanas?",
    options: [
      { value: 3, label: "Muy bueno - Me siento feliz la mayor parte del tiempo" },
      { value: 2, label: "Bueno - Generalmente me siento bien" },
      { value: 1, label: "Regular - Tengo altibajos frecuentes" },
      { value: 0, label: "Malo - Me siento triste o irritable con frecuencia" },
    ],
  },
  {
    id: "q2",
    text: "¿Qué tan bien duermes habitualmente?",
    options: [
      { value: 3, label: "Muy bien - Duermo profundamente y me despierto descansado/a" },
      { value: 2, label: "Bien - Ocasionalmente tengo problemas para dormir" },
      { value: 1, label: "Regular - Tengo problemas frecuentes de sueño" },
      { value: 0, label: "Mal - Tengo insomnio o duermo muy mal" },
    ],
  },
  {
    id: "q3",
    text: "¿Cómo es tu nivel de energía durante el día?",
    options: [
      { value: 3, label: "Alto - Me siento con energía y motivado/a" },
      { value: 2, label: "Normal - Tengo energía suficiente para mis actividades" },
      { value: 1, label: "Bajo - Me siento cansado/a con frecuencia" },
      { value: 0, label: "Muy bajo - Me cuesta mucho hacer las cosas diarias" },
    ],
  },
  {
    id: "q4",
    text: "¿Cómo son tus relaciones sociales actualmente?",
    options: [
      { value: 3, label: "Muy buenas - Disfruto de mi vida social" },
      { value: 2, label: "Buenas - Tengo relaciones satisfactorias" },
      { value: 1, label: "Regulares - Me cuesta relacionarme o me siento solo/a" },
      { value: 0, label: "Malas - Me aíslo o tengo muchos conflictos" },
    ],
  },
  {
    id: "q5",
    text: "¿Cómo manejas el estrés y las preocupaciones?",
    options: [
      { value: 3, label: "Muy bien - Tengo buenas estrategias de afrontamiento" },
      { value: 2, label: "Bien - Generalmente puedo manejarlo" },
      { value: 1, label: "Regular - Me cuesta controlar la preocupación" },
      { value: 0, label: "Mal - Me siento abrumado/a constantemente" },
    ],
  },
  {
    id: "q6",
    text: "¿Cómo es tu concentración y memoria últimamente?",
    options: [
      { value: 3, label: "Muy buena - No tengo problemas" },
      { value: 2, label: "Buena - Funciono normalmente" },
      { value: 1, label: "Regular - Noto algunas dificultades" },
      { value: 0, label: "Mala - Tengo problemas significativos de concentración" },
    ],
  },
  {
    id: "q7",
    text: "¿Cómo te sientes sobre tu futuro?",
    options: [
      { value: 3, label: "Optimista - Tengo esperanza e ilusión" },
      { value: 2, label: "Positivo - Veo el futuro con normalidad" },
      { value: 1, label: "Incierto - Me preocupa el futuro" },
      { value: 0, label: "Pesimista - Me siento sin esperanza" },
    ],
  },
  {
    id: "q8",
    text: "¿Disfrutas de las actividades que antes te gustaban?",
    options: [
      { value: 3, label: "Sí, igual que antes" },
      { value: 2, label: "Sí, aunque menos que antes" },
      { value: 1, label: "Poco - He perdido interés en muchas cosas" },
      { value: 0, label: "No - Ya no disfruto de nada" },
    ],
  },
];

function calculateResult(answers: Record<string, number>) {
  const score = Object.values(answers).reduce((sum, value) => sum + value, 0);
  const maxScore = 24;
  const percentage = (score / maxScore) * 100;

  if (percentage >= 75) {
    return {
      score,
      level: "bajo" as const,
      title: "Salud Mental Excelente",
      description: "Tu bienestar emocional es muy bueno. Mantienes un buen equilibrio psicológico.",
      recommendations: [
        "Continúa con tus hábitos saludables actuales",
        "Mantén tus rutinas de autocuidado",
        "Sigue cultivando tus relaciones sociales",
        "Practica la gratitud y el mindfulness como prevención",
      ],
      color: "from-green-500 to-green-600",
    };
  } else if (percentage >= 50) {
    return {
      score,
      level: "medio" as const,
      title: "Salud Mental Buena con Áreas de Mejora",
      description: "Tu bienestar general es aceptable, pero hay aspectos que podrían mejorar.",
      recommendations: [
        "Identifica las áreas que más te afectan y trabaja en ellas",
        "Establece una rutina de autocuidado: ejercicio, sueño, alimentación",
        "Practica técnicas de relajación o mindfulness",
        "Fortalece tu red de apoyo social",
        "Si las dificultades persisten, considera consultar con un profesional",
      ],
      color: "from-yellow-500 to-yellow-600",
    };
  } else {
    return {
      score,
      level: "muy-alto" as const,
      title: "Señales de Malestar Emocional",
      description: "Tus respuestas sugieren que podrías estar experimentando dificultades significativas en tu bienestar emocional.",
      recommendations: [
        "Es recomendable que consultes con un psicólogo profesional",
        "No minimices lo que sientes - tu bienestar es importante",
        "El apoyo profesional puede ayudarte a recuperar tu equilibrio",
        "Habla con personas de confianza sobre cómo te sientes",
        "Evita el aislamiento - mantén contacto social aunque te cueste",
        "La terapia psicológica puede marcar una gran diferencia en tu calidad de vida",
      ],
      color: "from-orange-500 to-red-600",
    };
  }
}

export default function TestSaludMentalPage() {
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
              Test de Salud Mental General
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Evaluación general de tu bienestar emocional y psicológico. Responde con sinceridad pensando en las últimas semanas.
            </p>
          </header>

          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-navy dark:text-slate-100 mb-3">Test de Bienestar Emocional</h2>
              <p className="text-muted dark:text-slate-300 leading-relaxed">
                Este test evalúa diferentes aspectos de tu salud mental: estado de ánimo, sueño, energía, relaciones sociales y gestión del estrés.
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
