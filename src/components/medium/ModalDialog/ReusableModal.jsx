// import react from 'react'

export default function ReusableModal({ title, content, isOpen, onClose}) {
    if(!isOpen) return null;

    return (
        <div className='z-10 absolute top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-5'>
            <div className="dailog bg-white rounded-sm p-4 w-[50%] h-fit">
                <h2 className='text-black'>{title}</h2>
                <p className='text-black'>{content}</p>
                <button type='button' className="cursor-pointer mt-5 font-bold border-1 rounded-sm p-2 text-black hover:bg-black hover:text-white" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}