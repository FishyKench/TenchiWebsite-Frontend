const BASE_URL = 'http://localhost:5270/api'

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login?email=${email}&password=${password}`, {
    method: 'POST'
  })
  if (!response.ok) throw new Error('Login failed')
  const data = await response.json()
  localStorage.setItem('token', data.token)
  return data
}