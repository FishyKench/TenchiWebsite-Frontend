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