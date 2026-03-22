import { useState, useEffect } from 'react'

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
                {games.map(game =>(
                    <div key={game.id} className='bg-gray-800 rounded-lg p-4'>
                        <h2 className='text-xl font-bold'>{game.gameTitle}</h2>
                        <p className='text-gray-400 mt-2'>{game.description}</p>
                        <span className='text-sm text-blue-400 mt-2 block'>{game.status}</span>
            </div>
            ))}
        </div>
        </div>
    )
}

export default HomePage