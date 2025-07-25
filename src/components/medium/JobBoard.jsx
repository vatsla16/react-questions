import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'

export default function JobBoard() {
    const countRef = useRef(6)
    const [data, setData] = useState(null)
    const [paginated, setPaginated] = useState(null)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseIds = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
                if(!responseIds.ok) {
                    throw new Error(`Error: ${responseIds.status}`)
                }
                const ids = await responseIds.json()

                const responseData = await Promise.all(ids.map(id => (
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
                )))

                setData(responseData)
                setPaginated(responseData.slice(0, countRef.current))
                setHasMore(countRef.current < responseData.length)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    },[])

    const handleClick = () => {
        countRef.current += 6
        setPaginated(data.slice(0, countRef.current))
        setHasMore(countRef.current < data.length)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.</p>
                <p>The page should show 6 jobs on initial load with a button to load more postings.</p>
                <p>Job Stories(IDs): URL: https://hacker-news.firebaseio.com/v0/jobstories.json, HTTP Method: GET, Content Type: json</p>
                <p>Job Details: URL: https://hacker-news.firebaseio.com/v0/item/id.json, HTTP Method: GET, Content Type: json</p>
            </div>
            <div className='card mb-4'>
                {paginated ? (
                    paginated.map(item => {
                        const newDate = new Date(item.time * 1000)
                        return (
                            <div key={item.id} className='rounded-sm border-1 border-gray-100 bg-gray-400 mb-2 p-4'>
                                <a className='mb-1 text-md font-bold text-black hover:underline' href={item.url} target='_blank'>{item.title}</a>
                                <p className='text-sm text-gray-700'>By {item.by} - {newDate.toLocaleString()}</p>
                            </div>
                        )
                    })
                ) : (<Spinner />)}

                {hasMore && <button type='button' className='btn-background bg-amber-400 text-black mt-4 cursor-pointer' onClick={handleClick}>Load More</button>}
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}