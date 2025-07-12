import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

let index = 0;

export default function Todo() {
    const [todos, setTodo] = useState([]);
    const inputRef = useRef(null);

    const addTodo = () => {
        if(inputRef.current.value.length > 0) {
            setTodo([...todos, {id: index++, task: inputRef.current.value}])
        }
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Create a "todo" app with the following criteria. The user should able to add and remove todo items.</p>
            </div>
            <div className='card mb-4'>
                <div className='form-container'>
                    <input type='text' id='task' className='px-4 py-2' placeholder='Enter a task' ref={inputRef}/>
                    <input type='button' className='btn-background text-black bg-grey-300' onClick={() => addTodo()} value='Add'/>
                </div>
                <div className='content'>
                    <h2 className='mb-4 mt-4'>Task list</h2>
                    <ul className='list-disc ps-8'>
                        {todos.map(todo => (
                            <li key={todo.id}>
                                {todo.task}
                                <button type='button' className='bg-red-400 text-black cursor-pointer rounded-md px-2 py-1 text-center ml-2 mb-2 hover:underline focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800' onClick={() => setTodo(todos.filter(t => t.id != todo.id))}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}