import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'

export default function DigitalClock() {
    const digits = {
        0: ['A', 'B', 'C', 'D', 'E', 'F'],
        1: ['B', 'C'],
        2: ['A', 'B', 'G', 'E', 'D'],
        3: ['A', 'B', 'C', 'D', 'G'],
        4: ['F', 'G', 'B', 'C'],
        5: ['A', 'F', 'G', 'C', 'D'],
        6: ['A', 'F', 'E', 'D', 'C', 'G'],
        7: ['A', 'B', 'C'],
        8: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        9: ['A', 'B', 'C', 'D', 'F', 'G'],
    }

    const [current, setCurrent] = useState({hours: '', minutes: '', seconds: ''})

    useEffect(() => {
        const cycle = () => {
            const date = new Date()
            const hours = String(date.getHours()).padStart(2, '0').split('').map(Number)
            const minutes = String(date.getMinutes()).padStart(2, '0').split('').map(Number)
            const seconds = String(date.getSeconds()).padStart(2, '0').split('').map(Number)
            setCurrent({hours, minutes, seconds})
        }

        cycle()

        const interval = setInterval(cycle, 1000);

        return () => clearInterval(interval)
    }, [])

    const SegmentDigits = ({digit}) => {
        const currentDigit = digits[digit]

        return (
            <div className='relative w-[40px] h-[70px] m-5'>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((seg, index) => (
                    <div key={index} className={`segment ${seg.toLowerCase()} ${currentDigit.includes(seg) ? 'active' : ''}`}></div>
                ))}
            </div>
        )
    }

    const isValid = current.hours && current.minutes && current.seconds

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Create a widget that renders the current time in HH:MM:SS format using a 7-segment digital display.</p>
            </div>
            <div className='card mb-4 text-center'>
                {isValid ? (
                    <div className="clock flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="flex sm:flex-row">
                            {current.hours.map((i, index) => (
                                <SegmentDigits key={index} digit={i} />
                            ))}
                        </div>
                        <span className='blink font-bold text-2xl m-5'>:</span>
                        <div className="flex sm:flex-row">
                            {current.minutes.map((i, index) => (
                                <SegmentDigits key={index} digit={i} />
                            ))}
                        </div>
                        <span className='blink font-bold text-2xl m-5'>:</span>
                        <div className="flex sm:flex-row">
                            {current.seconds.map((i, index) => (
                                <SegmentDigits key={index} digit={i} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div><Spinner /></div>
                )}
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}