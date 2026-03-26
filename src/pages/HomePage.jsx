import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import { getAllGames } from '../services/gameService'

function HomePage() {
  const [games, setGames] = useState([])

  useEffect(() => {
    getAllGames().then(data => setGames(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Games</h1>
      <p className="text-gray-500 mb-8">Browse all available games</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default HomePage