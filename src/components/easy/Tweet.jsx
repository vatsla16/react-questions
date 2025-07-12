import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Temperature() {
    const [count, setCount] = useState({like: 0, retweet: 0, reply: 0, share: 0})
    const [edit, setEdit] = useState(false)
    const [inputVal, setInputVal] = useState('')
    const timestamp = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    
    const handleClick = (e) => {
        const key = e.target.dataset.type
        setCount(prev => ({...prev, [key]: prev[key] + 1}))
    }

    const buttons = ['like', 'retweet', 'reply', 'share']

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a React component that resembles a Tweet from Twitter.</p>
                <p>Your component should include: User info: Profile picture, username, and handle, Tweet content: Text (optionally with links or hashtags), Timestamp of the tweet, Interaction icons: Like, retweet, reply, and share.</p>
            </div>
            <div className='card mb-4'>
                <div className="tweet">
                    <div className="flex items-center user-info mb-4">
                        <img src="./vite.svg" alt="Profile Image" />
                        <div className='ml-4'>
                            <p className='text-md'>Username</p>
                            <p className='text-gray-600'>@handle</p>
                        </div>
                    </div>
                    <div className="tweet-content mb-2">
                        {edit ? (
                            <input type="textarea" maxLength='280' className='p-2' value={inputVal} onChange={(e) => setInputVal(e.target.value)} placeholder="What's happening?" />    
                        ) : (inputVal ? (
                            <div>{inputVal}</div>
                        ): (
                            <div className='text-gray-100'>Write your first tweet...</div>
                        ))}
                        
                    </div>
                    <p className='text-gray-600 mb-2 text-sm'>{timestamp}</p>
                    <p className='text-gray-600 mb-3 text-sm'>
                        {count.like} Likes | {count.retweet} Retweets | {count.reply} Replies | {count.share} Shares
                    </p>
                    <hr />
                    <div className="flex w-full items-center justify-between mt-3">
                        <button type='button' onClick={() => setEdit(!edit)} className='cursor-pointer text-gray-400'>{edit ? 'Post' : 'Edit'}</button>
                        {buttons.map(btn => (
                            <button key={btn} type='button' data-type={btn} onClick={handleClick} className='cursor-pointer text-gray-400'>
                                {btn.charAt(0).toUpperCase() + btn.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}