import { useNavigate } from 'react-router-dom'

function GameCard({ game }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/game/${game.id}`)}
      className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition"
    >
      <h2 className="text-xl font-bold">{game.gameTitle}</h2>
      <p className="text-gray-400 mt-2">{game.description}</p>
      <span className="text-sm text-blue-400 mt-2 block">{game.status}</span>
    </div>
  )
}

export default GameCard