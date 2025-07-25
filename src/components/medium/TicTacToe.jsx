import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TicTacToe() {
    const options = ['O', 'X'];
    const [turns, setTurns] = useState({})
    const [nextTurn, setNextTurn] = useState(1)

    const result = useMemo(() => {
        switch(Object.keys(turns).length <= 9) {
            case (turns[1] == turns[5] && turns[5] == turns[9]): return turns[1]
            case (turns[3] == turns[5] && turns[5] == turns[7]): return turns[3]
            case (turns[1] == turns[2] && turns[2] == turns[3]): return turns[1]
            case (turns[4] == turns[5] && turns[5] == turns[6]): return turns[4]
            case (turns[7] == turns[8] && turns[8] == turns[9]): return turns[7]
            case (turns[1] == turns[4] && turns[4] == turns[7]): return turns[1]
            case (turns[2] == turns[5] && turns[5] == turns[8]): return turns[2]
            case (turns[3] == turns[6] && turns[6] == turns[9]): return turns[3]
            default: return null;
        }
    }, [turns])

    const handleChange = (e) => {
        setNextTurn(prev => prev + 1)
        const key = e.target.name
        const opt = nextTurn % 2 == 0 ? options[1] : options[0]
        return setTurns(prev => ({...prev, [key]: opt}))
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a tic-tac-toe game that is playable by two players.</p>
                <p>Display the current game status at the top: whose turn it is, winner (if any), or draw.</p>
                <p>Add a "Reset" button to allow the game to be restarted at any time.</p>
            </div>
            <div className='card mb-4'>
                <div className='text-md font-bold mb-6 text-center'>
                    {result ? `Player ${result} won` : (nextTurn + 1 <= 9) ? `Next Turn: ${((nextTurn + 1) % 2 == 0 ? options[0] : options[1])}` : 'draw'}
                </div>
                <div className="board mb-6 grid grid-cols-3 w-[50%] m-auto">
                    {Array.from({length: 9}, (_, i) => i + 1).map(i => (
                        <button type='button' key={i} name={i} onClick={(e) => handleChange(e)} className={`box-${i} h-30 text-2xl font-bold hover:outline hover:outline-dashed hover:outline-cyan-500 ${result ? 'cursor-not-allowed' : 'cursor-pointer'}`} disabled={result}>
                            {turns[i]}
                        </button>
                    ))}
                </div>
                <button type='button' onClick={() => {setNextTurn(1); setTurns([])}} className='btn-background bg-red-500 text-white block m-auto'>Reset Board</button>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}