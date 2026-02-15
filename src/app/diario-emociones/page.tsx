"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Trash2, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";
import CTAButtons from "@/components/CTAButtons";

const emotions = [
  { name: "Alegría", emoji: "😊", color: "bg-yellow-100 dark:bg-yellow-900/20 border-yellow-300 dark:border-yellow-700" },
  { name: "Tristeza", emoji: "😢", color: "bg-blue-100 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700" },
  { name: "Ansiedad", emoji: "😰", color: "bg-purple-100 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700" },
  { name: "Ira", emoji: "😠", color: "bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-700" },
  { name: "Miedo", emoji: "😨", color: "bg-indigo-100 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-700" },
  { name: "Calma", emoji: "😌", color: "bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700" },
  { name: "Frustración", emoji: "😤", color: "bg-orange-100 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700" },
  { name: "Gratitud", emoji: "🥰", color: "bg-pink-100 dark:bg-pink-900/20 border-pink-300 dark:border-pink-700" },
  { name: "Culpa", emoji: "😔", color: "bg-gray-100 dark:bg-gray-900/20 border-gray-300 dark:border-gray-600" },
  { name: "Esperanza", emoji: "🌟", color: "bg-amber-100 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700" },
];

interface Entry {
  id: string;
  date: string;
  time: string;
  emotion: string;
  emoji: string;
  intensity: number;
  trigger: string;
  thoughts: string;
  body: string;
  action: string;
}

export default function DiarioEmocionesPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<{ name: string; emoji: string } | null>(null);
  const [intensity, setIntensity] = useState(5);
  const [trigger, setTrigger] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [body, setBody] = useState("");
  const [action, setAction] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEmotion) return;

    const now = new Date();
    const newEntry: Entry = {
      id: Date.now().toString(),
      date: now.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }),
      time: now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
      emotion: selectedEmotion.name,
      emoji: selectedEmotion.emoji,
      intensity,
      trigger,
      thoughts,
      body,
      action,
    };

    setEntries([newEntry, ...entries]);
    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);
    setSelectedEmotion(null);
    setIntensity(5);
    setTrigger("");
    setThoughts("");
    setBody("");
    setAction("");
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  const emotionCounts = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.emotion] = (acc[e.emotion] || 0) + 1;
    return acc;
  }, {});

  const avgIntensity = entries.length > 0 ? (entries.reduce((sum, e) => sum + e.intensity, 0) / entries.length).toFixed(1) : "—";
  const mostFrequent = Object.entries(emotionCounts).sort((a, b) => b[1] - a[1])[0];

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
              Diario de Emociones Online
            </h1>
            <p className="text-lg text-muted dark:text-slate-300 max-w-2xl mx-auto">
              Registra tus emociones diarias, identifica patrones y mejora tu autoconocimiento emocional. Cada registro te acerca a entenderte mejor.
            </p>
          </header>

          {/* Stats */}
          {entries.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-navy dark:text-slate-100">{entries.length}</div>
                <div className="text-xs text-muted dark:text-slate-400">Registros</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-navy dark:text-slate-100">{avgIntensity}</div>
                <div className="text-xs text-muted dark:text-slate-400">Intensidad media</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-navy dark:text-slate-100">{mostFrequent ? mostFrequent[0] : "—"}</div>
                <div className="text-xs text-muted dark:text-slate-400">Más frecuente</div>
              </div>
            </div>
          )}

          {/* Add button */}
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="w-full mb-8 py-4 px-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              <Plus className="h-6 w-6" /> Registrar Emoción
            </button>
          )}

          {/* Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-6 mb-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy dark:text-slate-100 mb-4">¿Cómo te sientes ahora?</h2>

              {/* Emotion selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-3">Elige tu emoción principal</label>
                <div className="flex flex-wrap gap-2">
                  {emotions.map((em) => (
                    <button
                      key={em.name}
                      type="button"
                      onClick={() => setSelectedEmotion({ name: em.name, emoji: em.emoji })}
                      className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition ${
                        selectedEmotion?.name === em.name
                          ? `${em.color} ring-2 ring-beige dark:ring-blue-gray`
                          : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                      }`}
                    >
                      {em.emoji} {em.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">
                  Intensidad: <span className="text-beige dark:text-blue-gray">{intensity}/10</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full accent-beige dark:accent-blue-gray"
                />
                <div className="flex justify-between text-xs text-muted dark:text-slate-500 mt-1">
                  <span>Leve</span>
                  <span>Moderada</span>
                  <span>Intensa</span>
                </div>
              </div>

              {/* Trigger */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué lo ha provocado?</label>
                <input
                  type="text"
                  value={trigger}
                  onChange={(e) => setTrigger(e.target.value)}
                  placeholder="Ej: Una discusión, el trabajo, una llamada..."
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray"
                />
              </div>

              {/* Thoughts */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué pensamientos tienes?</label>
                <textarea
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  placeholder="Ej: Pienso que todo va a salir mal..."
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray"
                />
              </div>

              {/* Body sensations */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué sientes en el cuerpo?</label>
                <input
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Ej: Nudo en el estómago, tensión en hombros..."
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray"
                />
              </div>

              {/* Action */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-navy dark:text-slate-200 mb-2">¿Qué vas a hacer?</label>
                <input
                  type="text"
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  placeholder="Ej: Respirar 5 min, llamar a alguien, pasear..."
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 text-navy dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-beige dark:focus:ring-blue-gray"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={!selectedEmotion}
                  className={`flex-1 py-3 rounded-lg font-semibold text-white transition ${selectedEmotion ? "bg-beige dark:bg-blue-gray hover:opacity-90" : "bg-gray-300 dark:bg-slate-700 cursor-not-allowed"}`}
                >
                  Guardar Registro
                </button>
                <button type="button" onClick={resetForm} className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-navy dark:text-slate-100 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-slate-600 transition">
                  Cancelar
                </button>
              </div>
            </form>
          )}

          {/* Entries */}
          {entries.length > 0 ? (
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-bold text-navy dark:text-slate-100 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-beige dark:text-blue-gray" /> Tus Registros
              </h2>
              {entries.map((entry) => (
                <div key={entry.id} className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{entry.emoji}</span>
                      <div>
                        <h3 className="font-bold text-navy dark:text-slate-100">{entry.emotion}</h3>
                        <p className="text-xs text-muted dark:text-slate-400">{entry.date} · {entry.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm font-bold text-navy dark:text-slate-200">{entry.intensity}/10</div>
                        <div className="w-16 bg-gray-200 dark:bg-slate-700 rounded-full h-1.5 mt-1">
                          <div className="h-full bg-beige dark:bg-blue-gray rounded-full" style={{ width: `${entry.intensity * 10}%` }} />
                        </div>
                      </div>
                      <button onClick={() => deleteEntry(entry.id)} className="text-muted dark:text-slate-500 hover:text-red-500 transition p-1">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    {entry.trigger && (
                      <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-muted dark:text-slate-400 uppercase">Desencadenante</span>
                        <p className="text-navy dark:text-slate-200 mt-1">{entry.trigger}</p>
                      </div>
                    )}
                    {entry.thoughts && (
                      <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-muted dark:text-slate-400 uppercase">Pensamientos</span>
                        <p className="text-navy dark:text-slate-200 mt-1">{entry.thoughts}</p>
                      </div>
                    )}
                    {entry.body && (
                      <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-muted dark:text-slate-400 uppercase">Cuerpo</span>
                        <p className="text-navy dark:text-slate-200 mt-1">{entry.body}</p>
                      </div>
                    )}
                    {entry.action && (
                      <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-muted dark:text-slate-400 uppercase">Acción</span>
                        <p className="text-navy dark:text-slate-200 mt-1">{entry.action}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            !showForm && (
              <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-gray-300 dark:border-slate-700 mb-8">
                <span className="text-5xl mb-4 block">📝</span>
                <h3 className="text-xl font-bold text-navy dark:text-slate-100 mb-2">Tu diario está vacío</h3>
                <p className="text-muted dark:text-slate-400 mb-4">Empieza registrando cómo te sientes ahora mismo.</p>
                <p className="text-sm text-muted dark:text-slate-500 max-w-md mx-auto">
                  <strong>Tip:</strong> Intenta registrar al menos una emoción al día. Con el tiempo, empezarás a ver patrones que te ayudarán a entenderte mejor.
                </p>
              </div>
            )
          )}

          {/* Info */}
          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-beige dark:border-blue-gray p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-navy dark:text-slate-100 mb-2">¿Por qué llevar un diario emocional?</h3>
            <ul className="space-y-2 text-sm text-muted dark:text-slate-300">
              <li>• <strong>Autoconocimiento:</strong> Identificas qué emociones sientes y con qué frecuencia</li>
              <li>• <strong>Patrones:</strong> Descubres qué situaciones desencadenan ciertas emociones</li>
              <li>• <strong>Regulación:</strong> Al nombrar la emoción, reduces su intensidad (efecto etiquetado)</li>
              <li>• <strong>Terapia:</strong> Es una herramienta habitual en terapia cognitivo-conductual</li>
            </ul>
          </div>

          {entries.length >= 3 && (
            <div className="bg-gradient-to-r from-beige to-blue-gray dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-3">¿Quieres profundizar en lo que descubres?</h3>
              <p className="text-white/90 dark:text-slate-300 mb-6">
                Un psicólogo puede ayudarte a interpretar tus patrones emocionales y darte herramientas personalizadas.
              </p>
              <CTAButtons />
            </div>
          )}

          <div className="bg-yellow-50 dark:bg-slate-800 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm text-yellow-900 dark:text-yellow-200">
              <strong>Nota:</strong> Tus registros se guardan solo en esta sesión del navegador. No almacenamos datos personales. Para un seguimiento a largo plazo, te recomendamos usar una libreta física o una app dedicada.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
