import { useState } from 'react'
import { Link } from 'react-router-dom'

const accordionItems = [
    {
        id: 'first',
        title: 'First Accordion',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 'second',
        title: 'Second Accordion',
        content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 'third',
        title: 'Third Accordion',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export default function Accordion() {
    const [open, setOpen] = useState({first: true, second: false, third: false});

    const toggleOpen = (id) => {
        setOpen(item => ({
            ...item,
            [id]: !item[id]
        }))
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build an accordion component that displays a list of vertically stacked sections with each containing a title and content</p>
            </div>
            <div className='card mb-4'>
                {accordionItems.map(item => {<div>{item}</div>})}
                {accordionItems.map(({ id, title, content }) => (
                    <div className="accordion-container" key={id}>
                        <div className="accordion-title">
                            <button type='button' 
                                onClick={() => toggleOpen(id)} 
                                aria-expanded={open[id]} 
                                aria-controls={`content-${id}`}
                            >
                                {title} <span className='inline-block ps-2'>{open[id] ? '-' : '+'}</span>
                            </button>
                        </div>
                        {open[id] && (
                            <div className="accordion-content border-t-1 border-pink-200 mt-2 pt-2" id={`content-${id}`} role='region'>
                                <p>{content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}