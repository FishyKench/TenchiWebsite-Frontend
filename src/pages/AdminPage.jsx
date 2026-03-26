import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { getAllGames, createGame, deleteGame, publishGame } from '../services/gameService'

function AdminPage() {
  const { user } = useAuth()
  const [games, setGames] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    gameTitle: '',
    description: '',
    coverImageUrl: '',
    status: 'InDevelopment'
  })

  useEffect(() => {
    getAllGames().then(data => setGames(data))
  }, [])

  async function handleCreate(e) {
    e.preventDefault()
    await createGame(form, user.token)
    const updated = await getAllGames()
    setGames(updated)
    setShowForm(false)
    setForm({ gameTitle: '', description: '', coverImageUrl: '', status: 'InDevelopment' })
  }

  async function handleDelete(id) {
    await deleteGame(id, user.token)
    setGames(games.filter(g => g.id !== id))
  }

  async function handlePublish(id) {
    await publishGame(id, user.token)
    const updated = await getAllGames()
    setGames(updated)
  }

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700"
        >
          {showForm ? 'Cancel' : '+ New Game'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleCreate} className="bg-white rounded-2xl shadow-md p-6 mb-8 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-900">Create New Game</h2>
          <input
            type="text"
            placeholder="Game Title"
            value={form.gameTitle}
            onChange={e => setForm({ ...form, gameTitle: e.target.value })}
            className="border border-gray-200 rounded-lg px-4 py-2 text-gray-900 outline-none"
          />
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="border border-gray-200 rounded-lg px-4 py-2 text-gray-900 outline-none"
          />
          <input
            type="text"
            placeholder="Cover Image URL"
            value={form.coverImageUrl}
            onChange={e => setForm({ ...form, coverImageUrl: e.target.value })}
            className="border border-gray-200 rounded-lg px-4 py-2 text-gray-900 outline-none"
          />
          <select
            value={form.status}
            onChange={e => setForm({ ...form, status: e.target.value })}
            className="border border-gray-200 rounded-lg px-4 py-2 text-gray-900 outline-none"
          >
            <option value="InDevelopment">In Development</option>
            <option value="Released">Released</option>
            <option value="Demo">Demo</option>
            <option value="OnHold">On Hold</option>
          </select>
          <button type="submit" className="bg-gray-900 text-white py-2 rounded-lg font-bold hover:bg-gray-700">
            Create Game
          </button>
        </form>
      )}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-gray-600 text-sm font-semibold">Title</th>
              <th className="px-6 py-3 text-gray-600 text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-gray-600 text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <tr key={game.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900 font-medium">{game.gameTitle}</td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {game.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  {game.status !== 'Released' && (
                    <button
                      onClick={() => handlePublish(game.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Publish
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(game.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPage