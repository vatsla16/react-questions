import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CountTimer() {
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prev => {
                if(prev == 0) {
                    return () => clearInterval(timerInterval)
                }
                return prev - 1
            })
        }, 1000);
    }, []);

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Implement a button and timer that will start from 10 and ends at 0 and tracks the counter until the timer expires and button should disappear once timer expires</p>
            </div>
            <div className='card mb-4 text-center'>
                <p className='text-lg mb-4'>Click as fast as you can before timer runs out!</p>
                <div>
                    <p className="count mb-3">{count}</p>
                    <p className="timer mb-3">{timer > 0 ? 'Time left: ' + timer + ' secs': 'Time is over!'}</p>
                    <button type='button' className={`btn-background bg-gray-300 text-black font-extrabold ${timer > 0 ? 'inline-block' : 'hidden'}`} onClick={() => setCount(prev => prev + 1)}>+</button>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}