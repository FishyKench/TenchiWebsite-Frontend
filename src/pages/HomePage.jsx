import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import { getAllGames } from '../services/gameService'
import { data } from 'react-router-dom'

function HomePage(){
    const [games, setGames] = useState([])

    useEffect(() => {
        getAllGames().then(data => setGames(data))
    }, [])

    return(
        <div className='p-8 text-white'>
            <h1 className='text-3xl font-bold mb-6'>Games</h1>
            <div className='grid grid-cols-3 gap-6'>
                {games.map(game => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage