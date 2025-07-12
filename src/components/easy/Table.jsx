import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Table() {
    const [state, setState] = useState({row: '', cols: ''})
    const [showTable, setShowTable] = useState(false)

    const isValid = Number(state.rows) && Number(state.cols)

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a React component that lets the user generate a table of numbers by entering the desired number of rows and columns.</p>
            </div>
            <div className='card mb-4'>
                <div className="form">
                    <label>
                        Rows: 
                        <input type="number" min='0' className='mb-4 ml-2 p-1' value={state.rows} onChange={(e) => setState({...state, rows: Number(e.target.value)})} />
                    </label>
                    {(state.rows && state.rows < 1) ? (<div className="text-red-400">Rows cannot be less than 1<br /></div>) : (<br />)}
                    <label>
                        Columns: 
                        <input type="number" min='0' className='mb-4 ml-2 p-1' value={state.cols} onChange={(e) => setState({...state, cols: Number(e.target.value)})} />
                    </label>
                    {(state.cols && state.cols < 1) ? (<div className="text-red-400">Columns cannot be less than 1<br /></div>) : (<br />)}
                    <button type='button' onClick={() => setShowTable(true)} className={`btn-background bg-green-300 text-black ${isValid ? 'opacity-100' : 'cursor-not-allowed opacity-50'}`} disabled={!isValid}>Generate</button>
                    <button type='button' onClick={() => {setShowTable(false); setState({rows: '', cols: ''})}} className={`btn-background bg-red-300 text-black ${isValid ? 'opacity-100' : 'cursor-not-allowed opacity-50'}`} disabled={!isValid}>Reset</button>
                </div>

                <div className="content">
                    {showTable && (
                        <table>
                            <tbody>
                                {[...Array(state.rows)].map((_, rIdx) => (
                                    <tr key={rIdx}>
                                        {[...Array(state.cols)].map((_, cIdx) => {
                                            const idx = rIdx * state.cols + cIdx + 1
                                            return <td key={cIdx}>|{idx}|</td>
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}