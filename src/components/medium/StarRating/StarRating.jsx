import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReusableRating from './ReusableRating';

export default function StarRating() {
    const [stars, setStars] = useState({max: 5, filled: 1})

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Create a star rating widget that allows users to select a rating value.</p>
                <p>The widget accepts two parameters: the maximum number of stars and the number of currently filled stars.</p>
                <p>When a star is clicked, it is filled along with all the stars to its left.</p>
                <p>Hovering over a star fills that star and all stars to its left. And revert back to original state if no new selection is made.</p>
            </div>
            <div className='card mb-4'>
                <div className="form mb-4">
                    <label>
                        Enter Max number of stars:
                        <input type="number" min='0' className='px-2 py-1 mb-4 ml-2' value={stars.max} onChange={(e) => setStars(prev => ({...prev, max: Number(e.target.value)}))} />
                    </label><br/>
                    <label>
                        Enter number of stars filled:
                        <input type="number" min='0' className='px-2 py-1 ml-2' value={stars.filled} onChange={(e) => setStars(prev => ({...prev, filled: Number(e.target.value)}))} />
                    </label>
                </div>
                <ReusableRating
                    maxNum={stars.max}
                    filledStars={stars.filled}
                />
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}