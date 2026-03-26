import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authService'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { setUser } = useAuth()

  async function handleSubmit(e) {
  e.preventDefault()
  try {
    const data = await login(email, password)
    setUser({ token: data.token, userName: data.userName, role: data.role })
    navigate('/')
  } catch (err) {
    setError('Invalid email or password')
  }
}

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage