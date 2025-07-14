import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TrafficLights() {
    const [lights, setLights] = useState({red: false, yellow: false, green: false})

    useEffect(() => {
        const cycle = () => {
            setLights({red: false, yellow: false, green: true})
            setTimeout(() => {
                setLights({red: false, yellow: true, green: false})
                setTimeout(() => {
                    setLights({red: true, yellow: false, green: false})
                    setTimeout(() => {
                        cycle()
                    }, 4000)
                }, 500)
            }, 3000)
        }

        cycle()
    }, [])

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely</p>
                <p>Duration: Red light (4000ms), Yellow light (500ms), Green light (3000ms)</p>
            </div>
            <div className='card mb-4'>
                <div className="rounded-md bg-black p-5 block m-auto w-fit">
                    <p className={`border-2 mb-4 w-[50px] h-[50px] border-gray-700 rounded-full ${lights.red ? 'bg-red-500' : 'bg-black'}`}></p>
                    <p className={`border-2 mb-4 w-[50px] h-[50px] border-gray-700 rounded-full ${lights.yellow ? 'bg-yellow-500' : 'bg-black'}`}></p>
                    <p className={`border-2 mb-4 w-[50px] h-[50px] border-gray-700 rounded-full ${lights.green ? 'bg-green-500' : 'bg-black'}`}></p>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}