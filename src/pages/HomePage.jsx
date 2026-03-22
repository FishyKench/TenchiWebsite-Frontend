import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'

function HomePage(){
    const [games, setGames] = useState([])

    useEffect(() => {
        const fakeGames = [
            {id: 0, gameTitle: "Game One", description: "Game One Desc", status: "Released"},
            {id: 0, gameTitle: "Game One", description: "Game One Desc", status: "Released"},
            {id: 0, gameTitle: "Game One", description: "Game One Desc", status: "Released"}, 
        ]
        setGames(fakeGames)
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