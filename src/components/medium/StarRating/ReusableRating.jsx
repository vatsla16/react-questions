import { useEffect, useState } from 'react'

export default function ReusableRating({ maxNum, filledStars }) {
    const [hovered, setHovered] = useState(null)
    const [selected, setSelected] = useState(filledStars)

    useEffect(() => {
        setSelected(filledStars)
    }, [filledStars])

    const getIndex = (index) => {
        return index <= (hovered ?? selected)
    }

    return (
        <>
            {Array.from({length: maxNum}, (_, i) => i + 1).map((index) => (
                <button
                    type='button'
                    key={index}
                    className={`cursor-pointer mr-1 font-bold text-md ${getIndex(index) ? 'text-yellow-500' : 'text-white'}`}
                    onClick={() => setSelected(index)}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >
                    ☆
                </button>
            ))}
        </>
    )
}