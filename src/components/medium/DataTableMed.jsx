import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import users from '../../data/datatable'

export default function DataTableMed() {
    const usersLength = users.length
    const [sortedUsers, setSortedUsers] = useState(users)
    const [paginated, setPaginated] = useState(sortedUsers.slice(0, 5))
    const [pages, setPages] = useState(5) // 5, 10 ,20
    const [sorted, setSorted] = useState(false)

    const paginatedNumbers = useMemo(() => {
        return Math.ceil(usersLength / pages)
    }, [pages, usersLength])

    const handlePage = (e) => {
        const num = e.target.value
        setPages(num)
        setPaginated(sortedUsers.slice(0, num))
    }

    const handleSort = (key) => {
        switch (key != null) {
            case (sorted && (key == 'name' || key == 'occupation')):
                setSortedUsers(([...users]).sort((a, b) => a[key].localeCompare(b[key])))
                break;
            case (sorted && (key == 'id' || key == 'age')):
                setSortedUsers(([...users]).sort((a, b) => parseInt(a[key]) - parseInt(b[key])))
                break;
            case (!sorted && (key == 'name' || key == 'occupation')):
                setSortedUsers(([...users]).sort((a, b) => b[key].localeCompare(a[key])))
                break;
            case (!sorted && (key == 'id' || key == 'age')):
                setSortedUsers(([...users]).sort((a, b) => parseInt(b[key]) - parseInt(a[key])))
                break;
            default:
                break;
        }

        setSorted(!sorted)
        return setPaginated(sortedUsers.slice(0, pages))
    }

    const handleChange = (num) => {
        const start = pages * (num - 1);
        const end = pages * num;

        setPaginated(sortedUsers.slice(start, end))
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Given a list of users, build a users data table that displays users in a paginated format with sort capabilities.</p>
                <p>The users data table should display the following columns: Id, Name, Age, Occupation</p>
                <p>Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)</p>
                <p>Sort: ascending, descending, default(unsorted)</p>
            </div>
            <div className='card mb-4 text-center'>
                <div className="pagination flex flex-col items-center">
                    <label>
                        Pages: 
                        <select id="pages" className='btn-background bg-white text-black mb-4 ml-2' onChange={handlePage}>
                            {[5, 10, 20].map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </label>
                    <div>
                        {Array.from({length: paginatedNumbers}, (_ ,i) => i + 1).map((item) => (
                            <button key={item} type='button' onClick={() => handleChange(item)} className='btn-background rounded-full bg-white text-black font-bold'>{item}</button>
                        ))}
                    </div>
                </div>
                <table className='hint-table w-full text-center'>
                    <thead className='border-b-1 font-bold'>
                        <tr>
                            <th><button type='button' className='cursor-pointer' onClick={() => handleSort('id')}>Id</button></th>
                            <th><button type='button' className='cursor-pointer' onClick={() => handleSort('name')}>Name</button></th>
                            <th><button type='button' className='cursor-pointer' onClick={() => handleSort('age')}>Age</button></th>
                            <th><button type='button' className='cursor-pointer' onClick={() => handleSort('occupation')}>Occupation</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.map(item => (
                            <tr className='' key={item.id}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.age}</th>
                                <th>{item.occupation}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}