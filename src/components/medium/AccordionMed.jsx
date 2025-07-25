import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const accordionItems = [
    {
        id: 0,
        title: 'First Accordion',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: 1,
        title: 'Second Accordion',
        content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'Third Accordion',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export default function AccordionMed() {
    const [isOpen, setIsOpen] = useState([true, false, false])
    const buttonRefs = useRef([])

    const handleClick = (e) => {
        const name = parseInt(e.target.name)
        const newList = isOpen.map((_, index) => index === name ? !isOpen[index] : false)
        setIsOpen(newList)
    }
    
    const handleKeyDown = (event, id) => {
        if (event.key === 'ArrowUp') {
            event.preventDefault();
            buttonRefs.current[id - 1].focus()
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            buttonRefs.current[id + 1].focus()
        }
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a fully accessible accordion component that has keyboard support according to ARIA specifications.</p>
                <p>Only one panel should be open at a time.</p>
                <p>Use appropriate ARIA attributes: aria-expanded, aria-controls, role="region", etc.</p>
                <p>Header buttons must be: keyboard focusable, navigable with Arrow Up/Down keys, and enter or space should toggle the panel.</p>
                <p>Panel content must be associated with the header via aria-labelledby</p>
            </div>
            <div className='card mb-4'>
                {accordionItems.map(item => (
                    <div className='accordion rounded-sm bg-white text-black p-4 mb-4' key={item.id}>
                        <button 
                            className='accordion-header flex text-lg font-bold w-full justify-between items-center p-1 cursor-pointer' 
                            id={`accordion-content-${item.id}`} 
                            name={item.id} 
                            aria-expanded={isOpen[item.id]} 
                            aria-controls={`control-${item.id}`} 
                            onClick={(e) => handleClick(e)}
                            ref={e => buttonRefs.current[item.id] = e}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                        >
                            <p>{item.title}</p>
                            <p>{isOpen[item.id] ? '-' : '+'}</p>
                        </button>
                        <div 
                            role='region' 
                            className='accordion-content border-t-1 border-gray-300 p-1' 
                            id={`control-${item.id}`} 
                            aria-labelledby={`accordion-content-${item.id}`} 
                            hidden={!isOpen[item.id]}
                        >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}