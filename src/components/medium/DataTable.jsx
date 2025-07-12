import {  useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import users from '../../data/datatable';

export default function DataTable() {
    const options = [5, 10, 20]
    const [perPage, setPerPage] = useState(5) // 5, 10, 20
    const [currentPage, setCurrentPage] = useState(1) 
    const totalPages = useMemo(() => Math.ceil(users.length / perPage), [users.length, perPage])
    const items = Array.from({length: totalPages}, (_, i) => i + 1) // Make new array [1, 2, 3, ....] as long as the value of pagination

    const paginatedList = useMemo(() => {
        const startIdx = (currentPage - 1) * perPage
        return users.slice(startIdx, startIdx + perPage)
    }, [currentPage, perPage])

    const handlePerPage = (e) => {
        setPerPage(() => Number(e.target.value))
        setCurrentPage(1)
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Given a list of users, build a users data table that displays users in a paginated format.</p>
                <p>The users data table should display the following columns: Id, Name, Age, Occupation</p>
                <p>The pagination should display the current page number and the total number of pages.</p>
                <p>The pagination should have an option to select the number of users displayed per page (e.g., 5, 10, 20)</p>
            </div>
            <div className='card mb-4'>
                <div className="pagination flex flex-col items-center">
                    <select name="perPage" id="perPage" value={perPage} className='btn-background bg-white text-black mb-4' onChange={handlePerPage}>
                        {options.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                    <div className='ml-4'>
                        {items.map(item => (
                            <button className={`btn-background ${item == currentPage ? 'rounded-full bg-white text-black font-bold' : 'text-white'}`} id={item} key={item} onClick={() => setCurrentPage(item)}>{item}</button>
                        ))}
                    </div>
                </div>
                <table className='hint-table w-full text-center'>
                    <thead className='border-b-1 font-bold'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Occupation</td>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedList.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.occupation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}
