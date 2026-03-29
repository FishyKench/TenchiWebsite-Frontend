import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import { getAllGames } from '../services/gameService'

function HomePage() {
  const [games, setGames] = useState([])
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    getAllGames().then(data => setGames(data))
  }, [])

  const statuses = ['All', 'Released', 'InDevelopment', 'Demo', 'OnHold']

  const filtered = filter === 'All' ? games : games.filter(g => g.status === filter)

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Games</h1>
      <p className="text-gray-500 mb-6">Browse all available games</p>

      <div className="flex gap-2 mb-8 flex-wrap">
        {statuses.map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              filter === status
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
            }`}
          >
            {status === 'InDevelopment' ? 'In Development' : status === 'OnHold' ? 'On Hold' : status}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default HomePage