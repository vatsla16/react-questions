import { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/directoryfiles';

export default function DirectoryTree() {
    const RecursionComponent = ({data}) => {
        const [toggle, setToggle] = useState({});
    
        return (
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <div className='mb-1'> 
                            {item.children ? (
                                <button className='cursor-pointer' aria-controls={`dir-${item.id}`} type='button' onClick={() => setToggle({...toggle, [item.name]: !toggle[item.name]})}>{item.name} {toggle[item.name] ? '-' : '+'}</button>
                            ) : (
                                <p>{item.name}</p>
                            )}
                        </div>
                        <div id={`dir-${item.id}`} hidden={!toggle[item.name]} className='ml-4'>
                            {item.children && <RecursionComponent data={item.children} />}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Given an array of file objects, build a component that displays them in a hierarchical tree format.</p>
                <p>There are two types of objects - files and directories:</p>
                <p>Files are essentially leaf nodes of the tree, they do not have children.</p>
                <p>Directories can contain other objects either files or directories.</p>
                <p>You may assume that the IDs and names within the same directory are unique.</p>
            </div>
            <div className='card mb-4'>
                <RecursionComponent data={data}/>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}