const BASE_URL = 'http://localhost:5270/api'

export async function getCommentsByGame(gameId) {
  const response = await fetch(`${BASE_URL}/comment/game/${gameId}`)
  if (!response.ok) throw new Error('Failed to fetch comments')
  return await response.json()
}

export async function createComment(content, gameId, token) {
  const response = await fetch(`${BASE_URL}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ content, gameId })
  })
  if (!response.ok) throw new Error('Failed to create comment')
}

export async function deleteComment(id, token) {
  const response = await fetch(`${BASE_URL}/comment/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Failed to delete comment')
}