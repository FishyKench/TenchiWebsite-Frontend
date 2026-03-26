import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getGameById } from '../services/gameService'

function GamePage() {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getGameById(id).then(data => setGame(data))
  }, [id])

  if (!game) return <div className="text-gray-500 p-8">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-10">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-gray-800 text-sm mb-6 flex items-center gap-1"
        >
          ← Back to Games
        </button>
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <img
            src={game.coverImageUrl}
            alt={game.gameTitle}
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{game.gameTitle}</h1>
              <span className="text-sm font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {game.status}
              </span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed">{game.description}</p>
            {game.releaseDate && (
              <p className="text-gray-400 text-sm mt-4">
                Released: {new Date(game.releaseDate).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage