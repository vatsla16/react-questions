import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AnalogClock() {
    const [hands, setHands] = useState({hours: new Date().getHours() % 12, minutes: new Date().getMinutes(), seconds: new Date().getSeconds()})

    useEffect(() => {
        const updatedTime = setInterval(() => {
            setHands(prev => {
                let hours = prev.hours
                let minutes = prev.minutes
                let seconds = prev.seconds + 1

                if(seconds > 59) {
                    seconds = 0
                    minutes += 1
                }

                if(minutes > 59) {
                    minutes = 0
                    hours += 1
                }

                return {hours, minutes, seconds}
            })
        }, 1000)

        return () => clearInterval(updatedTime)
    }, [])

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build an analog clock where the hands update and move like a real clock.</p>
                <p>Display hour, minute, and second hands like a real analog clock</p>
            </div>
            <div className='card mb-4'>
                <div className="clock border-1 border-gray-300 bg-black rounded-full relative w-64 h-64 mx-auto">
                    {[...Array(12)].map((_, i) => {
                        const angle = (i * 30) - 90
                        const x = 50 + 45 * Math.cos((angle * Math.PI) / 180)
                        const y = 50 + 45 * Math.sin((angle * Math.PI) / 180)

                        return (
                            <div key={i} className='absolute' style={{left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)',}}>{i === 0 ? 12 : i}</div>
                        )
                    })}
                    <div className='clock-hands'>
                        <div className='absolute text-yellow-200' style={{left: `50%`, top: `40%`, border: '1px solid', height: '30px', transform: `rotate(${hands.hours * 30}deg)`, transformOrigin: 'bottom center',}}></div>
                        <div className='absolute text-blue-200' style={{left: `50%`, top: `32%`, border: '1px solid', height: '50px', transform: `rotate(${hands.minutes * 6}deg)`, transformOrigin: 'bottom center',}}></div>
                        <div className='absolute text-green-200' style={{left: `50%`, top: `20%`, border: '1px solid', height: '80px', transform: `rotate(${hands.seconds * 6}deg)`, transformOrigin: 'bottom center',}}></div>
                        <div className='absolute text-red-500 z-10' style={{left: `50%`, top: `45%`}}>.</div>
                    </div>
                </div>
                <div className='mx-auto w-fit p-2 border-1 border-gray-100 bg-white text-black rounded-md mt-4'>{hands.hours} : {hands.minutes} : {hands.seconds}</div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}