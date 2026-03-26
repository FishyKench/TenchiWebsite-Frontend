import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getGameById } from '../services/gameService'

function GamePage() {
  const { id } = useParams()
  const [game, setGame] = useState(null)

  useEffect(() => {
    getGameById(id).then(data => setGame(data))
  }, [id])

  if (!game) return <div className="text-white p-8">Loading...</div>

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold">{game.gameTitle}</h1>
      <p className="text-gray-400 mt-4">{game.description}</p>
      <span className="text-blue-400 mt-2 block">{game.status}</span>
    </div>
  )
}

export default GamePage