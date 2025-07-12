import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HideShow() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Implement a button to show/hide the text content</p>
            </div>
            <div className='card mb-4'>
                <button type='button' className='btn-background text-black bg-green-500 px-2 py-1' onClick={() => setToggle(t => !t)}>{toggle ? 'Hide': 'Show'}</button>
                <span className={toggle ? 'inline-block' : 'hidden'}>This is a text</span>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}