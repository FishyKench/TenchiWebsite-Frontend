import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../services/authService'

function RegisterPage() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await register(userName, email, password)
      navigate('/login')
    } catch (err) {
      setError('Registration failed. Try again.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Register</h1>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg outline-none"
          />
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
            Register
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-sm">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="text-blue-400 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage