import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function StopwatchMed() {
    const [timer, setTimer] = useState({hours: 0, minutes: 0, seconds: 0, milliseconds: 0})
    const [status, setStatus] = useState(false)
    let intervalRef = useRef(null)
    
    const handleTimer = () => {
        const newStatus = !status
        setStatus(newStatus)

        if(newStatus) {
            intervalRef.current = setInterval(() => {
                setTimer(prev => {
                    let ms = prev.milliseconds + 1
                    let secs = prev.seconds
                    let mins = prev.minutes
                    let hours = prev.hours

                    if (ms > 59) {
                        ms = 0
                        secs += 1
                    }

                    if (secs > 59) {
                        secs = 0
                        mins += 1
                    }

                    if (mins > 59) {
                        mins = 0
                        hours += 1
                    }

                    return {hours, minutes: mins, seconds: secs, milliseconds: ms}
                })
            }, 1)
        } else {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    const handleReset = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTimer({hours: 0, minutes: 0, seconds: 0, milliseconds: 0})
        setStatus(false)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a stopwatch widget which can measure how much time has passed. It shows the current timer and has two buttons underneath: "Start/Stop" and "Reset".</p>
                <p>The timer shows the number of seconds elapsed, down to the millisecond.</p>
            </div>
            <div className='card mb-4'>
                {timer && 
                    <div>{timer.hours} hr : {timer.minutes} mins : {timer.seconds} secs : {timer.milliseconds} ms</div>
                }
                <button type='button' className={`mt-4 btn-background text-black ${status ? 'bg-amber-400' : 'bg-green-400'}`} onClick={handleTimer}>{status ? 'Stop' : 'Start'}</button>
                <button type='button' className='mt-4 btn-background bg-red-400 text-black' onClick={(handleReset)}>Reset</button>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}