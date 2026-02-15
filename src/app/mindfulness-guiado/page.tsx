"use client";

import Link from "next/link";
import { ArrowLeft, Play, Pause, RotateCcw, Clock, ChevronDown, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import CTAButtons from "@/components/CTAButtons";

interface MindfulnessExercise {
  id: string;
  name: string;
  duration: number; // seconds
  durationLabel: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  description: string;
  color: string;
  steps: { instruction: string; duration: number }[];
}

const exercises: MindfulnessExercise[] = [
  {
    id: "body-scan-mini",
    name: "Body Scan Express",
    duration: 180,
    durationLabel: "3 min",
    level: "Principiante",
    description: "Un recorrido rápido por tu cuerpo para identificar tensiones y conectar con las sensaciones físicas.",
    color: "from-green-500 to-emerald-500",
    steps: [
      { instruction: "Cierra los ojos. Toma 3 respiraciones profundas para centrarte.", duration: 20 },
      { instruction: "Lleva tu atención a la cabeza y la cara. Nota si hay tensión en la frente, mandíbula o cuello. Solo observa.", duration: 20 },
      { instruction: "Baja a los hombros y brazos. ¿Están tensos? ¿Relajados? No cambies nada, solo nota.", duration: 20 },
      { instruction: "Ahora el pecho y la espalda. Siente cómo se mueven con cada respiración.", duration: 20 },
      { instruction: "Lleva la atención al abdomen. Siente cómo sube y baja suavemente.", duration: 20 },
      { instruction: "Baja a las piernas. Siente el peso de tus muslos, rodillas, pantorrillas.", duration: 20 },
      { instruction: "Termina en los pies. Siente el contacto con el suelo. Ancla aquí.", duration: 20 },
      { instruction: "Ahora siente tu cuerpo entero como una unidad. Respira profundamente 3 veces.", duration: 20 },
      { instruction: "Poco a poco, mueve los dedos de manos y pies. Abre los ojos cuando estés listo/a.", duration: 20 },
    ],
  },
  {
    id: "breathing-focus",
    name: "Atención a la Respiración",
    duration: 300,
    durationLabel: "5 min",
    level: "Principiante",
    description: "El ejercicio fundamental de mindfulness: observar tu respiración sin intentar cambiarla.",
    color: "from-blue-500 to-indigo-500",
    steps: [
      { instruction: "Siéntate cómodamente. Cierra los ojos o baja la mirada. Coloca las manos en las piernas.", duration: 20 },
      { instruction: "Comienza a notar tu respiración natural. No la cambies. Solo obsérvala.", duration: 30 },
      { instruction: "¿Dónde sientes más la respiración? ¿En la nariz? ¿En el pecho? ¿En el abdomen? Elige un punto y ancla tu atención ahí.", duration: 30 },
      { instruction: "Sigue respirando. Inhala... exhala... Cada respiración es única. Obsérvala con curiosidad.", duration: 40 },
      { instruction: "Si tu mente divaga (lo hará), no te juzgues. Es normal. Suavemente, regresa a la respiración.", duration: 40 },
      { instruction: "Cada vez que vuelves a la respiración, estás ejercitando tu atención. Eso es meditar.", duration: 40 },
      { instruction: "Continúa observando. Inhala... exhala... Estás aquí. Estás presente.", duration: 40 },
      { instruction: "Comienza a ampliar tu conciencia. Nota los sonidos a tu alrededor. Los olores. La temperatura.", duration: 30 },
      { instruction: "Toma 3 respiraciones profundas. Abre los ojos lentamente. Nota cómo te sientes.", duration: 30 },
    ],
  },
  {
    id: "five-senses",
    name: "Mindfulness de los 5 Sentidos",
    duration: 300,
    durationLabel: "5 min",
    level: "Principiante",
    description: "Conecta con el momento presente a través de tus cinco sentidos. Ideal para interrumpir la ansiedad.",
    color: "from-purple-500 to-violet-500",
    steps: [
      { instruction: "Detén lo que estás haciendo. Toma una respiración profunda. Vas a conectar con tus 5 sentidos.", duration: 20 },
      { instruction: "👀 VISTA: Nombra 5 cosas que puedes ver ahora mismo. Obsérvalas con detalle: colores, formas, texturas.", duration: 40 },
      { instruction: "✋ TACTO: Toca 4 superficies diferentes. Nota la temperatura, la textura, la presión. La tela de tu ropa, la superficie de la mesa...", duration: 40 },
      { instruction: "👂 OÍDO: Identifica 3 sonidos. Algunos cercanos, otros lejanos. El rumor del aire, un pájaro, tu propia respiración...", duration: 40 },
      { instruction: "👃 OLFATO: Detecta 2 olores. Acerca la nariz a algo. Puede ser tu café, tu ropa, el aire...", duration: 40 },
      { instruction: "👅 GUSTO: Nota 1 sabor. Puede ser el residual en tu boca, un sorbo de agua, o simplemente la sensación de tu lengua.", duration: 40 },
      { instruction: "Ahora, con todos los sentidos activados, siente la riqueza del momento presente. Estás aquí, completamente.", duration: 40 },
      { instruction: "Toma 3 respiraciones profundas. Agradece a tus sentidos por esta conexión con el presente.", duration: 40 },
    ],
  },
  {
    id: "loving-kindness",
    name: "Meditación de Bondad Amorosa",
    duration: 420,
    durationLabel: "7 min",
    level: "Intermedio",
    description: "Cultiva compasión hacia ti mismo/a y hacia los demás. Especialmente útil para la autocrítica.",
    color: "from-pink-500 to-rose-500",
    steps: [
      { instruction: "Cierra los ojos. Respira profundamente varias veces hasta sentirte en calma.", duration: 30 },
      { instruction: "Piensa en ti mismo/a. Con calidez, repite mentalmente: 'Que yo sea feliz. Que yo esté en paz. Que yo esté libre de sufrimiento.'", duration: 50 },
      { instruction: "Sigue enviándote amor: 'Me merezco amor y compasión. Estoy haciendo lo mejor que puedo. Me acepto tal como soy.'", duration: 50 },
      { instruction: "Ahora piensa en alguien que quieres mucho. Visualiza su cara. Envíale: 'Que seas feliz. Que estés en paz. Que estés libre de sufrimiento.'", duration: 50 },
      { instruction: "Piensa en una persona neutral (el cartero, un vecino). Envíale las mismas palabras: 'Que seas feliz. Que estés en paz.'", duration: 50 },
      { instruction: "Si puedes, piensa en alguien con quien tengas dificultades. Intenta enviarle: 'Que seas feliz. Que estés en paz.' (No fuerces si no sale)", duration: 50 },
      { instruction: "Amplía tu círculo de compasión a todas las personas: 'Que todos los seres sean felices. Que todos estén en paz. Que todos estén libres de sufrimiento.'", duration: 50 },
      { instruction: "Vuelve a ti. Siente la calidez que has generado. Pon una mano en el pecho. Respira.", duration: 40 },
      { instruction: "Toma 3 respiraciones profundas. Abre los ojos suavemente. Lleva esta intención contigo.", duration: 50 },
    ],
  },
  {
    id: "mindful-eating",
    name: "Alimentación Consciente",
    duration: 360,
    durationLabel: "6 min",
    level: "Intermedio",
    description: "Aprende a comer con atención plena. Transforma una actividad automática en una experiencia sensorial completa.",
    color: "from-amber-500 to-orange-500",
    steps: [
      { instruction: "Coge un alimento pequeño: una uva, un trozo de chocolate, una nuez. Ponlo frente a ti.", duration: 30 },
      { instruction: "👀 MIRA: Obsérvalo como si fuera la primera vez que ves algo así. El color, la forma, las imperfecciones. Cada detalle.", duration: 40 },
      { instruction: "✋ TOCA: Cógelo. Siente su peso, su textura, su temperatura. Ruédalo entre tus dedos.", duration: 40 },
      { instruction: "👃 HUELE: Acércalo a la nariz. Inhala profundamente. ¿A qué huele? ¿Evoca algún recuerdo?", duration: 40 },
      { instruction: "👅 Llévalo a los labios. No muerdas aún. Nota las sensaciones en los labios. ¿Tu boca saliva?", duration: 30 },
      { instruction: "Ahora, dale un pequeño mordisco. Solo uno. Deja que el sabor se expanda en tu boca. No tragues todavía.", duration: 40 },
      { instruction: "Mastica muy lentamente. Nota cómo cambia la textura, el sabor, la temperatura. Cada masticación es diferente.", duration: 50 },
      { instruction: "Traga conscientemente. Siente el alimento bajar. Nota las sensaciones que quedan en tu boca.", duration: 40 },
      { instruction: "Reflexiona: ¿Cómo es comer con esta atención vs. comer con el móvil o la tele? Esta es la atención plena.", duration: 50 },
    ],
  },
  {
    id: "open-awareness",
    name: "Conciencia Abierta",
    duration: 600,
    durationLabel: "10 min",
    level: "Avanzado",
    description: "Meditación sin objeto de atención fijo. Observa todo lo que surge: pensamientos, emociones, sensaciones, sin aferrarte a nada.",
    color: "from-teal-500 to-cyan-500",
    steps: [
      { instruction: "Siéntate en postura cómoda y erguida. Cierra los ojos. Respira naturalmente.", duration: 30 },
      { instruction: "No fijes tu atención en nada concreto. Simplemente, estate abierto/a a lo que surja.", duration: 60 },
      { instruction: "Puede surgir un pensamiento. Obsérvalo como una nube que pasa. No lo sigas. Déjalo ir.", duration: 60 },
      { instruction: "Puede surgir una emoción. Nómbrala suavemente ('tristeza', 'alegría'). Déjala estar sin juzgar.", duration: 60 },
      { instruction: "Puede surgir una sensación corporal. Dolor, cosquilleo, calor. Observa sin reaccionar.", duration: 60 },
      { instruction: "Puede surgir un sonido externo. Inclúyelo en tu experiencia. No lo rechaces ni lo busques.", duration: 60 },
      { instruction: "Mantén esta apertura. Eres el cielo, y todo lo que surge son nubes que pasan.", duration: 60 },
      { instruction: "Si te pierdes en un pensamiento, no pasa nada. En el momento en que lo notas, ya has vuelto.", duration: 60 },
      { instruction: "Poco a poco, vuelve a notar tu cuerpo sentado. El peso, la postura. La habitación.", duration: 60 },
      { instruction: "Toma 3 respiraciones profundas. Abre los ojos. Lleva esta conciencia amplia contigo.", duration: 70 },
    ],
  },
];

function MindfulnessTimer({ exercise }: { exercise: MindfulnessExercise }) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepTimeLeft, setStepTimeLeft] = useState(exercise.steps[0].duration);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advanceStep = useCallback(() => {
    if (currentStep < exercise.steps.length - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      setStepTimeLeft(exercise.steps[next].duration);
    } else {
      setFinished(true);
      setIsRunning(false);
    }
  }, [currentStep, exercise.steps]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTotalElapsed((prev) => prev + 1);
      setStepTimeLeft((prev) => {
        if (prev <= 1) {
          advanceStep();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, advanceStep]);

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setStepTimeLeft(exercise.steps[0].duration);
    setTotalElapsed(0);
    setFinished(false);
  };

  const progress = (totalElapsed / exercise.duration) * 100;

  if (finished) {
    return (
      <div className="text-center py-8">
        <p className="text-green-600 dark:text-green-400 text-xl font-bold mb-4">✅ Meditación completada</p>
        <p className="text-muted dark:text-slate-300 mb-6">Tómate un momento para notar cómo te sientes. Esa es la atención plena.</p>
        <button onClick={handleReset} className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
          <RotateCcw className="h-4 w-4" /> Repetir
        </button>
      </div>
    );
  }

  return (
    <div className="py-6">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted dark:text-slate-400 mb-1">
          <span>Paso {currentStep + 1} de {exercise.steps.length}</span>
          <span>{Math.floor(totalElapsed / 60)}:{(totalElapsed % 60).toString().padStart(2, "0")} / {exercise.durationLabel}</span>
        </div>
        <div className="bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
          <div className={`h-full rounded-full bg-gradient-to-r ${exercise.color} transition-all`} style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
      </div>

      {/* Instruction */}
      <div className={`bg-gradient-to-br ${exercise.color} bg-opacity-10 rounded-xl p-8 mb-6`}>
        <p className="text-center text-lg text-white font-medium leading-relaxed">
          {exercise.steps[currentStep].instruction}
        </p>
        <div className="text-center mt-4">
          <span className="text-3xl font-bold text-white/90">{stepTimeLeft}</span>
          <span className="text-white/60 text-sm ml-1">seg</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition ${
            isRunning ? "bg-orange-500 hover:bg-orange-600" : `bg-gradient-to-r ${exercise.color} hover:opacity-90`
          }`}
        >
          {isRunning ? <><Pause className="h-5 w-5" /> Pausar</> : <><Play className="h-5 w-5" /> {totalElapsed === 0 ? "Comenzar" : "Continuar"}</>}
        </button>
        <button onClick={handleReset} className="px-4 py-3 bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition">
          <RotateCcw className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default function MindfulnessGuiadoPage() {
  const [activeExercise, setActiveExercise] = useState<string | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  return (
    <main className="min-h-screen bg-white dark:bg-slate-800/30">
      <div className="border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <Link href="/recursos-autoayuda" className="inline-flex items-center gap-2 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-blue-gray-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver a Recursos de Autoayuda
          </Link>
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-navy dark:text-slate-100 mb-4">
              Mindfulness Guiado
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              6 ejercicios de atención plena con instrucciones paso a paso y temporizador. Desde 3 minutos para principiantes hasta 10 minutos para avanzados.
            </p>
          </header>

          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-10">
            <h2 className="text-lg font-bold text-navy dark:text-slate-100 mb-2">¿Nuevo en mindfulness?</h2>
            <p className="text-muted dark:text-slate-300 text-sm">
              Empieza por <strong>Body Scan Express</strong> o <strong>Atención a la Respiración</strong>. Solo necesitas un lugar tranquilo y 3-5 minutos. No hay forma de hacerlo mal: cada vez que notas que tu mente divaga y vuelves, estás meditando.
            </p>
          </div>

          <div className="space-y-6">
            {exercises.map((ex) => (
              <div key={ex.id} className="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                <div className={`h-1.5 bg-gradient-to-r ${ex.color}`} />
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${ex.color} flex items-center justify-center text-white shadow-lg`}>
                      {completed.has(ex.id) ? <CheckCircle className="h-6 w-6" /> : <span className="text-xl">🧘</span>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-xl font-bold text-navy dark:text-slate-100">{ex.name}</h2>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          ex.level === "Principiante" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" :
                          ex.level === "Intermedio" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" :
                          "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
                        }`}>{ex.level}</span>
                      </div>
                      <p className="text-sm text-muted dark:text-slate-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {ex.durationLabel} · {ex.steps.length} pasos
                      </p>
                    </div>
                  </div>

                  <p className="text-muted dark:text-slate-300 text-sm mb-4">{ex.description}</p>

                  {activeExercise === ex.id ? (
                    <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                      <MindfulnessTimer exercise={ex} />
                      <button
                        onClick={() => { setActiveExercise(null); setCompleted((prev) => new Set([...prev, ex.id])); }}
                        className="mt-4 text-sm text-muted dark:text-slate-400 hover:text-navy dark:hover:text-slate-200 transition block mx-auto"
                      >
                        Cerrar ejercicio
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveExercise(ex.id)}
                      className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${ex.color} hover:opacity-90 transition`}
                    >
                      {completed.has(ex.id) ? "Repetir meditación" : "Comenzar meditación"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">¿Quieres integrar mindfulness en tu vida?</h3>
            <p className="text-white/90 dark:text-slate-300 mb-6">
              El mindfulness es una herramienta central en terapia. Un profesional puede ayudarte a adaptarla a tus necesidades específicas.
            </p>
            <CTAButtons />
          </div>

          <div className="mt-8 bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Nota:</strong> El mindfulness es una habilidad que mejora con la práctica. No te desanimes si tu mente divaga mucho al principio, es completamente normal.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
