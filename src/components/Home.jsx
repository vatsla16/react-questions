import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="card grid grid-flow-row md:grid-flow-col justify-around">
                <div className='mb-4'>
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
                        <li>
                            <Link className='link' to="/table">Generate Table</Link>
                        </li>
                        <li>
                            <Link className='link' to="/temperature">Temperature</Link>
                        </li>
                        <li>
                            <Link className='link' to="/tweet">Tweet</Link>
                        </li>
                    </ul>
                </div>
                <div className='mb-4'>
                    <h2>Medium</h2>
                    <ul>
                        <li>
                            <Link className='link' to="/progress">Progress Bar</Link>
                        </li>
                        <li>
                            <Link className='link' to="/counttimer">Count + Timer</Link>
                        </li>
                        <li>
                            <Link className='link' to="/tabs">Tabs</Link>
                        </li>
                        <li>
                            <Link className='link' to="/datatable">Data Table</Link>
                        </li>
                        <li>
                            <Link className='link' to="/rolldice">Dice Roller</Link>
                        </li>
                        <li>
                            <Link className='link' to="/directorytree">Directory Tree</Link>
                        </li>
                        <li>
                            <Link className='link' to="/likebuttons">Like Buttons</Link>
                        </li>
                        <li>
                            <Link className='link' to="/modaldialog">Modal Dialog</Link>
                        </li>
                        <li>
                            <Link className='link' to="/starrating">Star Rating</Link>
                        </li>
                        <li>
                            <Link className='link' to="/trafficlights">Traffic Lights</Link>
                        </li>
                        <li>
                            <Link className='link' to="/digitalclock">Digital Clock</Link>
                        </li>
                        <li>
                            <Link className='link' to="/tictactoe">Tic Tac Toe</Link>
                        </li>
                        <li>
                            <Link className='link' to="/imagecarousel">Image Carousel</Link>
                        </li>
                        <li>
                            <Link className='link' to="/jobboard">Job Board</Link>
                        </li>
                        <li>
                            <Link className='link' to="/stopwatchmed">Stopwatch II</Link>
                        </li>
                        <li>
                            <Link className='link' to="/transferlists">Transfer Lists</Link>
                        </li>
                        <li>
                            <Link className='link' to="/accordionmed">Accordion II</Link>
                        </li>
                        <li>
                            <Link className='link' to="/analogclock">Analog Clock</Link>
                        </li>
                        <li>
                            <Link className='link' to="/datatablemed">Data Table II</Link>
                        </li>
                        <li>
                            <Link className='link' to="/gridlights">Grid Lights</Link>
                        </li>
                        <li>
                            <Link className='link' to="/histogram">Birth Year Histogram</Link>
                        </li>
                        <li>
                            <Link className='link' to="/connectfour">Connect Four</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Hard</h2>
                    <ul>
                        <li>
                            Not Yet
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}