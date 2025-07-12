import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

export default function RollDice() {
    const [dice, setDice] = useState(1);
    const [flag, setFlag] = useState(false)

    const isValid = dice >= 1 && dice <= 12

    const result = useMemo(() => {
        if (!isValid && dice == '' && flag == true) {
            return [];
        }
        
        setFlag(false)
        return Array.from({length: dice}, (_, i) => i + 1).map(() => Math.floor(Math.random() * 6) + 1)
    }, [flag])

    const handleChange = (e) => {
        if (!isValid && dice == '') {
            return;
        }

        setFlag(false)
        setDice(() => Number(e.target.value))
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a dice roller app that simulates the results of rolling a specified number of 6-sided dice.</p>
                <p>The user can specify the number of dice to roll using the input field and the value can be an integer between 1 to 12 inclusive.</p>
                <p>The results of the dice roll should be displayed in rows of three.</p>
            </div>
            <div className='card mb-4'>
                <div className="form flex items-center">
                    <label>
                        Number of Dice: 
                        <input type="number" className='ml-2 p-2' value={dice} onChange={e => handleChange(e)} />
                    </label>
                    <button type='button' className='m-0 ml-3 btn-background text-black bg-green-400' onClick={() => setFlag(true)}>Roll</button>
                </div>
                {!isValid ? <div className="text-red-400 mt-2">Numbers should be between 1 - 12 (inclusive)<br/></div> : <br />}
                
                {result.length > 0 && (
                    <div className="content grid grid-cols-3 gap-4 p-2 mt-4 text-center justify-center rounded-md border-1">
                        {result.map((item, index) => (
                            <div key={index} className='border-1 bg-white text-black rounded-sm w-full p-4'>{item}</div>
                        ))}
                    </div>
                )}
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}