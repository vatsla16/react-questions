import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ConnectFour() {

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a grid of lights where the lights deactivate in the reverse order they were activated.</p>
                <p></p>
            </div>
            <div className='card mb-4'>
                
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}