import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function IntroPage() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500)
    const t2 = setTimeout(() => setStep(2), 1800)
    const t3 = setTimeout(() => setStep(3), 3000)
    const t4 = setTimeout(() => setStep(4), 4200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  function handleEnter() {
    localStorage.setItem('introSeen', 'true')
    navigate('/')
  }

  const fadeIn = {
    animation: 'fadeUp 0.8s ease forwards'
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center text-white">
        <div className="text-center space-y-4">
          {step >= 1 && (
            <h1 style={fadeIn} className="text-5xl font-bold tracking-tight">
              Mohammed Alhammaly
            </h1>
          )}
          {step >= 2 && (
            <p style={fadeIn} className="text-gray-400 text-lg">
              Game developer. I build whatever I imagine.
            </p>
          )}
          {step >= 3 && (
            <p style={fadeIn} className="text-gray-600 text-sm tracking-widest uppercase">
              Platformer · Puzzle · Multiplayer · Roguelite
            </p>
          )}
          {step >= 4 && (
            <div style={fadeIn} className="pt-6">
              <button
                onClick={handleEnter}
                className="border border-white text-white px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-white hover:text-gray-950 transition-all duration-300"
              >
                Enter
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default IntroPage