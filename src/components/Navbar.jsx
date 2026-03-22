import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <Link to="/" className="text-xl font-bold">TenchiWebsite</Link>
      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar