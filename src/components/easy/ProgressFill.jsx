import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProgressFill() {
    const [bars, setBars] = useState([]) // id, filled

    const addBar = () => {
        const id = Date.now()

        setBars(prev => [
            ...prev,
            { id, filled: false}
        ]);

        setTimeout(() => {
            setBars(prev => prev.map(bar => bar.id === id ? {...bar, filled: true} : bar))
        }, 200)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build an app where clicking the "Add" button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown. Each bar takes approximately 2000ms to completely fill up.</p>
            </div>
            <div className='card mb-4'>
                <button type='button' className='btn-background bg-amber-300 text-black' onClick={addBar}>Add</button>
                <div className="content bg-gray-300 text-black p-4">
                    {bars.map(bar => (
                        <div key={bar.id} className='rounded-md w-full mb-4 h-5 bg-white overflow-hidden'>
                            <div className={`h-full bg-amber-700 transition-all duration-[2000ms] ease-in ${bar.filled ? 'w-full' : 'w-0'}`}></div>
                        </div>
                    ))}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}