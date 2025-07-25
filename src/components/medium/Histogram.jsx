import { useState } from 'react'
import { Link } from 'react-router-dom'

const birthYears = [1985, 1992, 1990, 1987, 2003, 2001, 1978, 1989, 1999, 2000, 2010, 2012, 2015, 1995, 1981];

export default function Histogram() {

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a React widget that fetches a list of birth years from an API and displays the results in a histogram format.</p>
                <p>Groups the birth years into histogram buckets by decade (e.g., 1980 - 1989, 1990 - 1999).</p>
                <p>Render a histogram where: The x-axis shows the decade and the y-axis shows the frequency (number of people born in that decade)</p>
                <p>Make bars hoverable to show exact counts</p>
            </div>
            <div className='card mb-4'>
                
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}