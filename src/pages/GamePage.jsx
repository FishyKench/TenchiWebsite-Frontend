import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getGameById } from '../services/gameService'
import { getCommentsByGame, createComment, deleteComment } from '../services/commentService'
import { useAuth } from '../context/AuthContext'

function GamePage() {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    getGameById(id).then(data => setGame(data))
    getCommentsByGame(id).then(data => setComments(data))
  }, [id])

  async function handleSubmitComment(e) {
    e.preventDefault()
    if (!newComment.trim()) return
    await createComment(newComment, parseInt(id), user.token)
    const updated = await getCommentsByGame(id)
    setComments(updated)
    setNewComment('')
  }

  async function handleDeleteComment(commentId) {
    await deleteComment(commentId, user.token)
    setComments(comments.filter(c => c.id !== commentId))
  }

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

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comments</h2>

          {user ? (
            <form onSubmit={handleSubmitComment} className="bg-white rounded-2xl shadow-md p-4 mb-6 flex gap-3">
              <input
                type="text"
                placeholder="Leave a comment..."
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-gray-900 outline-none"
              />
              <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700">
                Post
              </button>
            </form>
          ) : (
            <p className="text-gray-400 text-sm mb-6">
              <span onClick={() => navigate('/login')} className="text-blue-500 cursor-pointer hover:underline">Login</span> to leave a comment.
            </p>
          )}

          <div className="flex flex-col gap-4">
            {comments.length === 0 && (
              <p className="text-gray-400 text-sm">No comments yet. Be the first!</p>
            )}
            {comments.map(comment => (
              <div key={comment.id} className="bg-white rounded-2xl shadow-md p-4 flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{comment.userName}</p>
                  <p className="text-gray-600 mt-1">{comment.content}</p>
                  <p className="text-gray-400 text-xs mt-2">{new Date(comment.createdAt).toLocaleDateString()}</p>
                </div>
                {user && user.role === 'Admin' && (
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-red-400 hover:text-red-600 text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage