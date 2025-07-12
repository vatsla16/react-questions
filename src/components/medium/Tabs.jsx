import { useState } from 'react'
import { Link } from 'react-router-dom'

const tabs = [
    {id: 'tab1', title: 'Tab 1', content: 'Tab 1 Content is displayed here. This tab is active.'}, 
    {id: 'tab2', title: 'Tab 2', content: 'Tab 2 Content is displayed here. This tab is active.'}, 
    {id: 'tab3', title: 'Tab 3', content: 'Tab 3 Content is displayed here. This tab is active.'}
]

export default function Tabs() {
    const [active, setActive] = useState('tab1') //tab1, tab2, tab3

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a tabs component that displays one panel of content at a time depending on the active tab element.</p>
            </div>
            <div className='card mb-4'>
                <div className="tabs-heading" role='tab-list'>
                    {tabs.map(item => (
                        <button role='tab' aria-selected={active === item.id} key={item.id} aria-controls={item.id} className={`tab-button cursor-pointer p-3 mr-2 rounded-t-lg border-1 border-b-0 ${active == item.id ? 'bg-white text-black font-bold' : 'text-white'}`} type='button' onClick={() => setActive(item.id)}>{item.title}</button>
                    ))}
                </div>
                <div className="tab-content p-4 rounded-b-sm rounded-tr-sm border-1 border-gray-400/50">
                    {tabs.map(item => (
                        <div key={item.id} id={item.id} hidden={active!== item.id} aria-labelledby={item.id} className='content block'>{item.content}</div>
                    ))}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}