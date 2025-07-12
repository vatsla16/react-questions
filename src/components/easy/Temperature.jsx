import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Temperature() {
    const [temp, setTemp] = useState('')
    const [toggle, setToggle] = useState('F') // F or C
    const [changed, setChanged] = useState('')

    const isValid = temp != '' && !isNaN(temp)

    const calculateTemp = (temp, newToggle) => {
        return newToggle == 'C' ? ((temp - 32) * (5/9)).toFixed(2) : ((temp * (9/5)) + 32).toFixed(2)
    }

    const handleChange = (e) => {
        setTemp(e.target.value)

        if (!isNaN(e.target.value) || e.target.value != '') {
            setChanged(calculateTemp(e.target.value, toggle))
        } else {
            setChanged('')
        }
    }

    const handleToggle = () => {
        const newToggle = toggle == 'C' ? 'F' : 'C'
        setToggle(newToggle)
    
        if(isValid) {
            setChanged(calculateTemp(temp, newToggle))
        } else {
            calculateTemp('')
        }
        
    }

    const handleReset = () => {
        setTemp('')
        setToggle('F')
        setChanged('')
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a React component that acts as a temperature converter between Celsius and Fahrenheit.</p>
                <p>F = (C * 9/5) + 32 and C = (F - 32) * 5/9</p>
            </div>
            <div className='card mb-4'>
                <div className="form">
                    <label>
                        Enter temperature: 
                        <input type="number" className='ml-2 p-2 mb-4' step='any' value={temp} onChange={handleChange}/>
                    </label>
                    {(!isValid && temp !== '') ? (<div className='text-red-400'>Please enter numbers in temperature<br/></div>) : (<br/>)}
                    <label className='h-full items-center flex '>
                        Choose Scale: 
                        <input type="checkbox" checked={toggle == 'C'} className='p-2 sr-only' onChange={handleToggle} />
                        <div className={`ml-2 inline-block relative w-12 h-7 rounded-full transition-colors duration-300 ${toggle == 'C' ? 'bg-yellow-200' : 'bg-gray-200'}`}>
                            <div className={`dot absolute left-1 top-1 bg-black w-5 h-5 rounded-full transition-transform duration-300 ${toggle == 'C' ? 'translate-x-full' : ''}`}></div>
                        </div>
                        <span className="ml-3 text-white text-md font-medium">{toggle == 'C' ? 'Celsius' : 'Fahrenheit'}</span>
                    </label><br />
                    <button type='button' onClick={handleReset} disabled={!temp} className={`btn-background text-black bg-red-300 ${temp ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}>Reset</button>
                </div>

                <div className="content">
                    {changed && (
                        <div>Temperature in {toggle == 'C' ? 'Celsius' : 'Fahrenheit'}: {changed}</div>
                    )}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}