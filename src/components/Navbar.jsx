import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <Link to="/" className="text-xl font-bold">TenchiWebsite</Link>
      <ul className="flex gap-6 items-center">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        {user ? (
          <>
            <li className="text-gray-300">Welcome, {user.userName}</li>
            <li><Link to="/admin" className="hover:text-gray-300">Admin</Link></li>
            <li onClick={handleLogout} className="cursor-pointer hover:text-gray-300">Logout</li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar