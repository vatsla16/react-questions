import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="card flex justify-around">
                <div>
                    <h2>Easy</h2>
                    <ul>
                        <li>
                            <Link className='link' to="/hideshow">Hide/Show</Link>
                        </li>
                        <li>
                            <Link className='link' to="/stopwatch">Stopwatch</Link>
                        </li>
                        <li>
                            <Link className='link' to="/todo">Todo List</Link>
                        </li>
                        <li>
                            <Link className='link' to="/newform">Form Submission</Link>
                        </li>
                        <li>
                            <Link className='link' to="/accordion">Accordion</Link>
                        </li>
                        <li>
                            <Link className='link' to="/progressfill">Progress Fill</Link>
                        </li>
                        <li>
                            <Link className='link' to="/mortgagecalculator">Mortgage Calculator</Link>
                        </li>
                        <li>
                            <Link className='link' to="/flight">Flight Booker</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Medium</h2>
                    <ul>
                        <li>
                            <Link className='link' to="/progress">Progress Bar</Link>
                        </li>
                        <li>
                            <Link className='link' to="/counttimer">Count + Timer</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Hard</h2>
                    <ul>
                        <li>
                            <Link className='link' to="/">To Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}