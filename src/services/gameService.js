const BASE_URL = "http://localhost:5270/api"

export async function getAllGames() {
    const response = await fetch(`${BASE_URL}/game`)
    if (!response.ok) throw new Error('Game not found')
    const data = await response.json()
    return data
    
}

export async function getGameById(id) {
  const response = await fetch(`${BASE_URL}/game/${id}`)
  if (!response.ok) throw new Error('Game not found')
  const data = await response.json()
  return data
}

export async function createGame(gameData, token) {
  const response = await fetch(`${BASE_URL}/game`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(gameData)
  })
  if (!response.ok) throw new Error('Failed to create game')
  return await response.json()
}

export async function deleteGame(id, token) {
  const response = await fetch(`${BASE_URL}/game/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Failed to delete game')
}

export async function publishGame(id, token) {
  const response = await fetch(`${BASE_URL}/game/${id}/publish`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${token}` }
  })
  if (!response.ok) throw new Error('Failed to publish game')
}

export async function updateGame(id, gameData, token) {
  const response = await fetch(`${BASE_URL}/game/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ ...gameData, id: id })
  })
  if (!response.ok) throw new Error('Failed to update game')
}