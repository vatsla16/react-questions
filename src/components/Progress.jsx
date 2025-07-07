import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Progress() {
    const [progress, setProgress] = useState(0);

    const bgColor = `linear-gradient(to right, #22c55e 0%, #22c55e ${progress}%, #ffffff ${progress}%, #ffffff 100%)`;

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Create a Progress Bar that should fill based on the input percentage value</p>
            </div>
            <div className='card mb-4'>
                <h2>Progress Bar</h2>
                <div className='font-medium rounded-md w-full px-4 py-4 mb-4 text-black' style={{backgroundImage: bgColor}}>
                    {progress ? progress + '%' : ''}
                </div>

                <div className='value-selector'>
                    <span>Enter percentage: </span>
                    <input type='number' className='ms-2 px-1 py-1 w-20' onChange={(e) => setProgress(e.target.value ? e.target.value: 0)} />
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}