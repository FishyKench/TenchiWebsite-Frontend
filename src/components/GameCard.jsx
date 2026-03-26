import { useNavigate } from 'react-router-dom'

function GameCard({ game }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/game/${game.id}`)}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={game.coverImageUrl}
        alt={game.gameTitle}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-gray-900 text-lg font-bold">{game.gameTitle}</h2>
        <p className="text-gray-500 text-sm mt-1">{game.description}</p>
        <span className="inline-block mt-3 text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {game.status}
        </span>
      </div>
    </div>
  )
}

export default GameCard