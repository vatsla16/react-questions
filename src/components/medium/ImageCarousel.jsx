import { useState } from 'react'
import { Link } from 'react-router-dom'

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];


export default function ImageCarousel() {
    const [page, setPage] = useState(0)

    const handleNext = () => {
        const next = page + 1 == images.length ? 0 : page + 1
        setPage(next)
    }

    const handlePrev = () => {
        const prev = page - 1 == -1 ? images.length - 1 : page - 1
        setPage(prev)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build an image carousel that displays a sequence of images.</p>
                <p>The image carousel should be centered on the screen with a maximum size of 600px by 400px.</p>
                <p>Pagination: Add left/right navigation buttons to allow the user to navigate through the images. The buttons should allow a cycling behavior, i.e. after the last image, the image cycles back to the first.</p>
            </div>
            <div className='card mb-4'>
                <div className="flex justify-center mb-4">
                    {images.map((image, index) => (
                        <img key={index} src={image['src']} alt={image['alt']} className={`max-w-[600px] max-h-[400px] w-full ${page == index ? 'block' : 'hidden'}`} />
                    ))}
                </div>
                <div className="pagination text-center">
                    <button type='button' className='btn-background bg-gray-600 text-white cursor-pointer' onClick={() => handlePrev()}>Previous</button>
                    <button type='button' className='btn-background bg-gray-600 text-white cursor-pointer' onClick={() => handleNext()}>Next</button>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}