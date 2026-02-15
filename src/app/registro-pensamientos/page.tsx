"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Trash2, ChevronDown, AlertTriangle, Lightbulb } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const distortions = [
  { name: "Pensamiento todo o nada", description: "Ver las cosas en blanco o negro, sin matices", example: "\"Si no soy perfecto, soy un fracaso\"" },
  { name: "Catastrofización", description: "Esperar siempre el peor escenario posible", example: "\"Seguro que va a salir todo mal\"" },
  { name: "Lectura mental", description: "Creer saber lo que otros piensan sin evidencia", example: "\"Seguro que piensa que soy tonto/a\"" },
  { name: "Personalización", description: "Asumir la culpa de cosas que no dependen de ti", example: "\"Es mi culpa que esté enfadado\"" },
  { name: "Filtro mental", description: "Centrarse solo en lo negativo ignorando lo positivo", example: "\"El proyecto salió bien pero cometí un error\"" },
  { name: "Sobregeneralización", description: "Un solo evento negativo como patrón interminable", example: "\"Siempre me pasa lo mismo\"" },
  { name: "Etiquetado", description: "Ponerse una etiqueta global por una acción concreta", example: "\"Soy un/a inútil\"" },
  { name: "Descalificar lo positivo", description: "Quitar importancia a los logros o cosas buenas", example: "\"Cualquiera lo habría hecho\"" },
];

interface ThoughtRecord {
  id: string;
  date: string;
  situation: string;
  automaticThought: string;
  emotion: string;
  emotionIntensity: number;
  distortions: string[];
  evidence_for: string;
  evidence_against: string;
  alternativeThought: string;
  newEmotionIntensity: number;
}

export default function RegistroPensamientosPage() {
  const [records, setRecords] = useState<ThoughtRecord[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [expandedRecord, setExpandedRecord] = useState<string | null>(null);
  const [showDistortions, setShowDistortions] = useState(false);

  // Form state
  const [situation, setSituation] = useState("");
  const [automaticThought, setAutomaticThought] = useState("");
  const [emotion, setEmotion] = useState("");
  const [emotionIntensity, setEmotionIntensity] = useState(7);
  const [selectedDistortions, setSelectedDistortions] = useState<string[]>([]);
  const [evidenceFor, setEvidenceFor] = useState("");
  const [evidenceAgainst, setEvidenceAgainst] = useState("");
  const [alternativeThought, setAlternativeThought] = useState("");
  const [newEmotionIntensity, setNewEmotionIntensity] = useState(4);

  const [step, setStep] = useState(1);

  const resetForm = () => {
    setShowForm(false);
    setStep(1);
    setSituation("");
    setAutomaticThought("");
    setEmotion("");
    setEmotionIntensity(7);
    setSelectedDistortions([]);
    setEvidenceFor("");
    setEvidenceAgainst("");
    setAlternativeThought("");
    setNewEmotionIntensity(4);
  };

  const handleSubmit = () => {
    const now = new Date();
    const newRecord: ThoughtRecord = {
      id: Date.now().toString(),
      date: now.toLocaleDateString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }),
      situation,
      automaticThought,
      emotion,
      emotionIntensity,
      distortions: selectedDistortions,
      evidence_for: evidenceFor,
      evidence_against: evidenceAgainst,
      alternativeThought,
      newEmotionIntensity,
    };
    setRecords([newRecord, ...records]);
    resetForm();
  };

  const toggleDistortion = (name: string) => {
    setSelectedDistortions((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  const canAdvance = () => {
    if (step === 1) return situation && automaticThought && emotion;
    if (step === 2) return true;
    if (step === 3) return alternativeThought;
    return false;
  };

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
              Registro de Pensamientos (CBT)
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Herramienta de Terapia Cognitivo-Conductual para identificar pensamientos automáticos negativos, detectar distorsiones cognitivas y crear pensamientos alternativos más equilibrados.
            </p>
          </header>

          {/* Distortions guide */}
          <div className="mb-8">
            <button
              onClick={() => setShowDistortions(!showDistortions)}
              className="w-full flex items-center justify-between p-4 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-xl hover:bg-blue-100 dark:hover:bg-slate-700 transition"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-beige dark:text-blue-gray" />
                <span className="font-semibold text-navy dark:text-slate-100">Guía: Distorsiones Cognitivas</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-muted transition-transform ${showDistortions ? "rotate-180" : ""}`} />
            </button>
            {showDistortions && (
              <div className="mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5">
                <p className="text-sm text-muted dark:text-slate-300 mb-4">
                  Las distorsiones cognitivas son patrones de pensamiento que distorsionan la realidad. Identificarlas es el primer paso para cambiarlas.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {distortions.map((d) => (
                    <div key={d.name} className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                      <h4 className="font-semibold text-sm text-navy dark:text-slate-100">{d.name}</h4>
                      <p className="text-xs text-muted dark:text-slate-400 mt-1">{d.description}</p>
                      <p className="text-xs text-beige dark:text-blue-gray mt-1 italic">{d.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Add button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="w-full mb-8 py-4 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              <Plus className="h-6 w-6" /> Nuevo Registro de Pensamiento
            </button>
          )}

          {/* Multi-step form */}
          {showForm && (
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 mb-8 shadow-sm">
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition ${
                      step >= s ? "bg-beige dark:bg-blue-gray text-white" : "bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400"
                    }`}>{s}</div>
                    {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-beige dark:bg-blue-gray" : "bg-gray-200 dark:bg-slate-700"}`} />}
                  </div>
                ))}
              </div>

              {/* Step 1: Situation & Thought */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-navy dark:text-slate-100">Paso 1: Identifica la situación y el pensamiento</h2>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué situación ha ocurrido?</label>
                    <textarea value={situation} onChange={(e) => setSituation(e.target.value)} placeholder="Describe brevemente qué ha pasado..." className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué pensamiento automático has tenido?</label>
                    <textarea value={automaticThought} onChange={(e) => setAutomaticThought(e.target.value)} placeholder="El primer pensamiento que vino a tu cabeza..." className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué emoción sientes?</label>
                      <input type="text" value={emotion} onChange={(e) => setEmotion(e.target.value)} placeholder="Ej: Ansiedad, tristeza, ira..." className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">Intensidad: {emotionIntensity}/10</label>
                      <input type="range" min="1" max="10" value={emotionIntensity} onChange={(e) => setEmotionIntensity(Number(e.target.value))} className="w-full accent-beige dark:accent-blue-gray mt-2" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Distortions & Evidence */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-navy dark:text-slate-100">Paso 2: Analiza el pensamiento</h2>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-3">¿Qué distorsiones cognitivas detectas? (opcional)</label>
                    <div className="flex flex-wrap gap-2">
                      {distortions.map((d) => (
                        <button
                          key={d.name}
                          type="button"
                          onClick={() => toggleDistortion(d.name)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border-2 transition ${
                            selectedDistortions.includes(d.name)
                              ? "border-beige dark:border-blue-gray bg-beige/10 dark:bg-blue-gray/10 text-beige dark:text-blue-gray"
                              : "border-gray-200 dark:border-slate-700 text-muted dark:text-slate-400 hover:border-gray-300"
                          }`}
                        >{d.name}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">Pruebas A FAVOR del pensamiento</label>
                    <textarea value={evidenceFor} onChange={(e) => setEvidenceFor(e.target.value)} placeholder="¿Qué datos reales apoyan este pensamiento?" className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">Pruebas EN CONTRA del pensamiento</label>
                    <textarea value={evidenceAgainst} onChange={(e) => setEvidenceAgainst(e.target.value)} placeholder="¿Qué datos reales contradicen este pensamiento?" className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray" />
                  </div>
                </div>
              )}

              {/* Step 3: Alternative thought */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-navy dark:text-slate-100">Paso 3: Crea un pensamiento alternativo</h2>
                  <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 mb-2">
                    <p className="text-xs text-muted dark:text-slate-400 uppercase font-semibold mb-1">Tu pensamiento original:</p>
                    <p className="text-sm text-navy dark:text-slate-200 italic">&quot;{automaticThought}&quot;</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">
                      <Lightbulb className="h-4 w-4 inline text-beige dark:text-blue-gray mr-1" />
                      Pensamiento alternativo más equilibrado
                    </label>
                    <textarea value={alternativeThought} onChange={(e) => setAlternativeThought(e.target.value)} placeholder="Un pensamiento más realista y equilibrado que tenga en cuenta las pruebas a favor y en contra..." className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Cómo te sientes ahora? Intensidad: {newEmotionIntensity}/10</label>
                    <input type="range" min="1" max="10" value={newEmotionIntensity} onChange={(e) => setNewEmotionIntensity(Number(e.target.value))} className="w-full accent-beige dark:accent-blue-gray" />
                    {newEmotionIntensity < emotionIntensity && (
                      <p className="text-sm text-green-600 dark:text-green-400 mt-2">📉 Intensidad reducida de {emotionIntensity} a {newEmotionIntensity}. ¡La reestructuración funciona!</p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)} className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                    ← Anterior
                  </button>
                )}
                {step < 3 ? (
                  <button
                    onClick={() => canAdvance() && setStep(step + 1)}
                    disabled={!canAdvance()}
                    className={`flex-1 py-3 rounded-lg font-semibold text-white transition ${canAdvance() ? "bg-beige dark:bg-blue-gray hover:opacity-90" : "bg-gray-300 dark:bg-slate-700 cursor-not-allowed"}`}
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!alternativeThought}
                    className={`flex-1 py-3 rounded-lg font-semibold text-white transition ${alternativeThought ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 dark:bg-slate-700 cursor-not-allowed"}`}
                  >
                    Guardar Registro
                  </button>
                )}
                <button onClick={resetForm} className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-muted dark:text-slate-400 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                  Cancelar
                </button>
              </div>
            </div>
          )}

          {/* Records */}
          {records.length > 0 && (
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-navy dark:text-slate-100">Tus Registros</h2>
              {records.map((record) => (
                <div key={record.id} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden">
                  <button
                    onClick={() => setExpandedRecord(expandedRecord === record.id ? null : record.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition"
                  >
                    <div className="flex-1">
                      <p className="text-xs text-muted dark:text-slate-400 mb-1">{record.date}</p>
                      <p className="font-semibold text-navy dark:text-slate-100 mb-1">&quot;{record.automaticThought}&quot;</p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-red-500">😟 {record.emotion} {record.emotionIntensity}/10</span>
                        <span className="text-muted">→</span>
                        <span className="text-green-500">😌 {record.newEmotionIntensity}/10</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={(e) => { e.stopPropagation(); setRecords(records.filter(r => r.id !== record.id)); }} className="text-muted hover:text-red-500 transition p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <ChevronDown className={`h-5 w-5 text-muted transition-transform ${expandedRecord === record.id ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  {expandedRecord === record.id && (
                    <div className="px-5 pb-5 border-t border-gray-200 dark:border-slate-700 space-y-3">
                      <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3 mt-3">
                        <p className="text-xs font-semibold text-muted dark:text-slate-400 uppercase mb-1">Situación</p>
                        <p className="text-sm text-navy dark:text-slate-200">{record.situation}</p>
                      </div>
                      {record.distortions.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-muted dark:text-slate-400 uppercase mb-2">Distorsiones detectadas</p>
                          <div className="flex flex-wrap gap-1">
                            {record.distortions.map((d) => (
                              <span key={d} className="text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">{d}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {record.evidence_for && (
                        <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-3">
                          <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase mb-1">A favor</p>
                          <p className="text-sm text-navy dark:text-slate-200">{record.evidence_for}</p>
                        </div>
                      )}
                      {record.evidence_against && (
                        <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-3">
                          <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase mb-1">En contra</p>
                          <p className="text-sm text-navy dark:text-slate-200">{record.evidence_against}</p>
                        </div>
                      )}
                      <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-1">Pensamiento alternativo</p>
                        <p className="text-sm text-navy dark:text-slate-200 font-medium">{record.alternativeThought}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {records.length === 0 && !showForm && (
            <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-gray-300 dark:border-slate-700 mb-8">
              <span className="text-5xl mb-4 block">🧠</span>
              <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">Sin registros aún</h3>
              <p className="text-muted dark:text-slate-400 mb-4">La próxima vez que un pensamiento negativo te atrape, regístralo aquí.</p>
              <p className="text-sm text-muted dark:text-slate-500 max-w-md mx-auto">
                <strong>Tip:</strong> No se trata de pensar en positivo, sino de pensar de forma más realista y equilibrada.
              </p>
            </div>
          )}

          {records.length >= 2 && (
            <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-3">¿Quieres aprender más técnicas CBT?</h3>
              <p className="text-white/90 dark:text-slate-300 mb-6">
                La reestructuración cognitiva es una de las muchas herramientas de la TCC. Un psicólogo puede enseñarte técnicas avanzadas.
              </p>
              <CTAButtons />
            </div>
          )}

          <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Nota:</strong> Los registros se guardan solo durante esta sesión. Esta herramienta es educativa y no sustituye la terapia profesional.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
