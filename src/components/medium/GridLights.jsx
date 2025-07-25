import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function GridLights() {
    const [order, setOrder] = useState([])

    const handleClick = (item) => {
        setOrder(prev => ([...prev, parseInt(item.target.name)]))
    }

    const handleDeactivate = () => {
        let interval = null

        if(order.length) {
            interval = setInterval(() => {
                console.log(order)
                setOrder(order.slice(0, order.length - 1))
                order.length -= 1
            }, 300)
        }

        return () => clearInterval(interval)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a grid of lights where the lights deactivate in the reverse order they were activated.</p>
                <p>Display a 3x3 grid of lights.</p>
                <p>Clicking on a light activates it (e.g., changes color).</p>
                <p>Each light can only be activated once.</p>
                <p>Clicking the “Deactivate” button turns lights off one at a time, in reverse activation order (i.e., LIFO).</p>
                <p>Deactivation occurs with a short delay (e.g., 300ms between lights).</p>
            </div>
            <div className='card mb-4'>
                <div className="grid grid-cols-3 mb-4">
                    {Array.from({length: 9}, (_, i) => i + 1).map(i => {
                        const isActive = order.includes(i)
                        const style = {
                        cursor: isActive ? 'not-allowed' : 'pointer',
                        background: isActive ? 'purple' : 'black',
                        };

                        return (
                            <button 
                                key={i}
                                type='button' 
                                className={`border-1 w-20 h-20 border-gray-100 ${order.includes(i) ? 'cursor-not-allowed bg-purple-400' : 'cursor-pointer bg-black'}`}
                                style={style}
                                name={i}    
                                onClick={handleClick}
                            ></button>
                        )
                    })}
                </div>
                <button type='button' className='btn-background bg-red-400 text-black p-2' onClick={handleDeactivate}>Deactivate</button>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}