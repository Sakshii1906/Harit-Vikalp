import { useState } from "react"

export default function AlternativeCard({ item }) {
  const [openAlt, setOpenAlt] = useState(null)

  return (
    <div className="bg-white border border-green-100 rounded-2xl p-5 hover:border-green-300 transition-all">

      {/* Original */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className="font-bold text-gray-800 text-base">{item.original}</span>
        <span className="text-gray-400 text-sm">→ natural alternatives</span>
      </div>

      {/* Alternatives List */}
      <div className="flex flex-col gap-2">
        {item.alternatives.map((a, i) => (
          <div key={i} className="border border-green-100 rounded-xl overflow-hidden">

            {/* Header */}
            <button
              onClick={() => setOpenAlt(openAlt === i ? null : i)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-green-50 transition-all text-left"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-green-700 text-sm">{a.alt}</span>
                <span className="text-xs bg-green-50 text-green-800 px-2 py-0.5 rounded-full">{a.tag}</span>
              </div>
              <span className="text-gray-400 text-xs ml-2">{openAlt === i ? "▲" : "▼"}</span>
            </button>

            {/* Expanded */}
            {openAlt === i && (
              <div className="px-4 pb-4 border-t border-green-50">
                <p className="text-sm text-gray-500 mt-3 mb-4 leading-relaxed">{a.reason}</p>

                {/* TIPS (for sunlight etc) */}
                {a.tips && (
                  <div className="mb-3">
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">How To Get It</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {a.tips.map((tip, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* RECIPE (for food items) */}
                {a.recipe && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Recipe</p>
                    <p className="font-semibold text-green-800 text-sm mb-3">{a.recipe.title}</p>

                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Ingredients</p>
                    <ul className="text-sm text-gray-600 mb-4 space-y-1">
                      {a.recipe.ingredients.map((ing, j) => (
                        <li key={j}>• {ing}</li>
                      ))}
                    </ul>

                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">Method</p>
                    <ol className="text-sm text-gray-600 space-y-2">
                      {a.recipe.steps.map((step, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="bg-green-100 text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                            {j + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* DISCLAIMER for nutrients */}
                {item.cat === "Nutrients" && (
                  <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-green-50 italic">
                    ⚠️ This is general information only. Please consult a doctor before stopping any prescribed supplements.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}