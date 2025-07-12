import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MortgageCalculator() {
    const [data, setData] = useState({loan: null, interest: null, term: null})
    const [result, setResult] = useState({mortgage: null, totalPayment: null, totalInterest: null})
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        const i = data.interest / 100 / 12
        const n = data.term * 12
        const mortgage = ((data.loan * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)).toFixed()
        const totalPayment = (mortgage * n).toFixed(2)
        const totalInterest = (totalPayment - data.loan).toFixed(2)
        
        if(isNaN(mortgage) || isNaN(totalPayment) || isNaN(totalInterest)) {
            setError(true)
        } else {
            setResult({mortgage, totalPayment, totalInterest})
        }
    }

    const isValid = data.loan && data.interest && data.term
    const showContent = result.mortgage && result.totalInterest && result.totalPayment

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.</p>
                <p className='my-1 font-bold'>M = P(i(1+i)^n)/((1+i)^n - 1)</p>
                <p className='text-sm'>M: Monthly mortgage payment, P: Loan amount,i: Monthly interest rate (APR / 12), n: Total number of payments (loan term in years x 12)</p>
            </div>
            <div className='card mb-4'>
                <p className="text-lg font-bold mb-4">Calculate your Mortgage: </p>
                <form onSubmit={handleSubmit}>
                    <label>Loan Amount: 
                        <input className='ml-2 mb-4 p-2' min='0' type='number' onChange={(e) => setData(prev => ({...prev, loan: Number(e.target.value)}))} />
                    </label><br/>
                    <label>Annual Interest Rate (in %): 
                        <input className='ml-2 mb-4 p-2' min='0' step='any' type='number' onChange={(e) => setData(prev => ({...prev, interest: Number(e.target.value)}))} />
                    </label><br/>
                    <label>Loan Term (in years): 
                        <input className='ml-2 mb-4 p-2' min='0' type='number' onChange={(e) => setData(prev => ({...prev, term: Number(e.target.value)}))} />
                    </label><br/>
                    <button type='submit' className={`btn-background bg-green-400 text-black ${isValid ? 'opacity-100' : 'cursor-not-allowed opacity-50'}`} disabled={!isValid}>Calculate</button>
                </form>

                <div className="content mt-4">
                    {error ? (
                        <div>Please enter proper values</div>
                    ) : showContent ? (
                        <div>
                            <p>Here are your calculations: </p>
                            <p>Mortgage Payment: {result.mortgage}</p>
                            <p>Total Payment Amount: {result.totalPayment}</p>
                            <p>Total Interest Paid: {result.totalInterest}</p>
                        </div>
                    ) : (
                        <div>Please enter numbers in fields</div>
                    )}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}