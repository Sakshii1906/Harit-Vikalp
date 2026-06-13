import { useState } from "react"
import { alternatives } from "./data/alternatives"
import AlternativeCard from "./components/AlternativeCard"

const cats = ["All", "Dairy", "Dessert", "Protein", "Staple", "Nutrients"]

export default function App() {
  const [query, setQuery] = useState("")
  const [activeCat, setActiveCat] = useState("Sab")

  const filtered = alternatives.filter(item => {
    const matchCat = activeCat === "Sab" || item.cat === activeCat
    const q = query.toLowerCase()
    const matchQ =
      !q ||
      item.original.toLowerCase().includes(q) ||
      item.alt.toLowerCase().includes(q)
    return matchCat && matchQ
  })

  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">🌿 Harit Vikalp</h1>
          <p className="text-green-600 mt-2 text-sm">
            Rediscover what Indian kitchens always knew.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search karo... jaise dahi, paneer, ghee"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-green-200 bg-white text-gray-700 outline-none focus:border-green-500 mb-4 text-sm"
        />

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap mb-6">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActiveCat(c)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                activeCat === c
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-green-700 border-green-200 hover:border-green-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-3xl mb-2">🌿</p>
              <p>Koi result nahi mila. Doosra search karo!</p>
            </div>
          ) : (
            filtered.map(item => (
              <AlternativeCard key={item.id} item={item} />
            ))
          )}
        </div>

      </div>
    </div>
  )
}