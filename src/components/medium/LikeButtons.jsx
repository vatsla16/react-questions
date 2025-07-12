import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LikeButtons() {
    const [liked, setLiked] = useState({success: false, status: false})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLike = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setError(false)

            const result = Math.random() < 0.5

            if(result) {
                return setLiked({success: true, status: !liked.status})
            } else {
                setError(liked.status ? 'Unlike' : 'Like')
                return setLiked({success: false, status: false})
            }
        }, 500)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Create a Like button which appearance changes based on the following states:</p>
                <p>Default state: Gray text - like</p>
                <p>Hover state: Red border and text</p>
                <p>Loading: shows a Liking.. text while the request is in-flight.</p>
                <p>Success: toggle to Liked or like.</p>
                <p>Unsuccessful: revert to default, show error message.</p>
            </div>
            <div className='card mb-4'>
                <button type='button' className={`btn-background border-1 ${loading ? 'bg-black text-white hover:bg-black hover:text-white' : liked.status ? 'text-white bg-red-400 hover:bg-red-900 hover:text-white' : 'text-gray-500 bg-white hover:text-gray-800 hover:bg-white'}`} onClick={() => handleLike()}>
                    {loading ? <span>Liking...</span> : liked.success ? liked.status ? <span>Liked</span> : <span>Like</span> : <span>Like</span>}
                    
                </button>
                {(error && !loading) && <p className='text-red-500'>Unable to {error}</p>}
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}