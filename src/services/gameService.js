const BASE_URL = "http://localhost:5270/api"

export async function getAllGames() {
    const response = await fetch(`${BASE_URL}/game`)
    const data = await response.json()
    return data
}