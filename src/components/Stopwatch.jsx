import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Stopwatch() {
    const [time, setTime] = useState({mins: 0, secs: 0})
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if(!running) return;
        const startTime = setInterval(() => {
            setTime(prev => {
                if(prev.secs == 59) {
                    return {...prev, mins: prev.mins + 1, secs: 0}
                } 

                return {...prev, secs: prev.secs + 1}
            })
        }, 1000)

        return () => clearInterval(startTime);
    }, [running])

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Implement a Stopwatch/timer as shown below with start ,stop and reset button.</p>
            </div>
            <div className='card mb-4'>
                <p className='mb-4'>Timer</p>
                <div className='timer-container'>
                    <p>{time.mins} mins {time.secs} secs</p>
                    <div className='timer-buttons mt-3'>
                        <button type='button' className='bg-green-300 text-black btn-background px-4 py-2' onClick={() => setRunning(true)}>Start</button>
                        <button type='button' className='bg-red-300 text-black btn-background px-4 py-2' onClick={() => setRunning(false)}>Stop</button>
                        <button type='button' className='bg-yellow-300 text-black btn-background px-4 py-2' onClick={() => {setRunning(false); setTime({mins: 0, secs: 0})}}>Reset</button>
                    </div>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}