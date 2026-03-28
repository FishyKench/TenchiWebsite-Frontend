import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import GamePage from './pages/GamePage'
import RegisterPage from './pages/RegisterPage'
import AdminPage from './pages/AdminPage'
import ProtectedRoute from './components/ProtectedRoute'
import IntroPage from './pages/IntroPage'

const introSeen = localStorage.getItem('introSeen')
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/" element={introSeen ? <HomePage /> : <Navigate to="/intro" />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
            } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App