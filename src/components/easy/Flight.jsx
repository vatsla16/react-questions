import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Flight() {
    const [flight, setFlight] = useState({departure: null, return: null});

    const isValid = flight.departure && flight.return && (flight.departure < flight.return)

    const handleSubmit = () => isValid && alert(`Flight booked from ${flight.departure} to ${flight.return}`)

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a simple Flight Booker React component that allows a user to: Select a departure date, Select a return date, Click a “Book Flight” button. The return date should never be earlier than the departure date</p>
            </div>
            <div className='card mb-4'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Departure Date: 
                        <input type="date" className='p-2 ml-2 mb-4' onChange={e => setFlight({...flight, departure: e.target.value})} />
                    </label><br />
                    <label>
                        Return Date: 
                        <input type="date" className='p-2 ml-2 mb-4' onChange={e => setFlight({...flight, return: e.target.value})} />
                    </label><br />
                    {(flight.departure > flight.return) && ( <span className="text-red-500 text-sm">Return date cannot be before departure date.<br/></span>)}
                    <button type='submit' className={`btn-background bg-green-300 text-black ${isValid ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`} disabled={!isValid}>Book</button>
                </form>

                <div className="content">
                    {isValid && (
                        <div>Flight booked from {flight.departure} to {flight.return}</div>
                    )}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}