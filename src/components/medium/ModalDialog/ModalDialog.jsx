import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReusableModal from './ReusableModal'

const data = {
    title: 'Title for the Dialog',
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima eveniet cum nihil dolore asperiores exercitationem architecto esse explicabo ad vitae'
}

export default function ModalDialog() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a modal dialog component that can be opened and closed with customizable title and contents.</p>
                <p>The modal dialog should contain the following elements: title/heading string, any contents as the body, and close button that hides/closes the modal when clicked.</p>
            </div>
            <div className='card mb-4'>
                <button type='button' className='btn-background text-white bg-green-700' onClick={() => setToggle(true)}>Show Dialog</button>
                <ReusableModal 
                    title={data.title} 
                    content={data.content}
                    isOpen={toggle}
                    onClose={() => setToggle(false)}
                />
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}