function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">TenchiWebsite</h1>
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Login</li>
      </ul>
    </nav>
  )
}

export default Navbar