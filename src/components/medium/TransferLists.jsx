import { useState } from 'react'
import { Link } from 'react-router-dom'

const list1 = ['HTML', 'JavaScript', 'CSS', 'TypeScript']
const list2 = ['React', 'Angular', 'Vue', 'Svelte']

export default function TransferLists() {
    const defaultCheckedStatus = [...list1, ...list2].reduce((acc, item) => {
        acc[item] = false
        return acc
    }, {})
    const [updatedList1, setUpdatedList1] = useState(list1)
    const [updatedList2, setUpdatedList2] = useState(list2)
    const [moveItems, setMoveItems] = useState({left: [], right: []})
    const [checkedStatus, setCheckedStatus] = useState(defaultCheckedStatus)
    
    const handleCheck = (e, listSide) => {
        const {checked, value} = e.target

        setCheckedStatus(prev => ({...prev, [value]: checked}))

        setMoveItems(prev => {
            const side = listSide === 'left' ? 'right' : 'left'

            const updated = checked ? [...prev[side], value] : prev[side].filter(item => item !== value)
            
            return {...prev, [side]: updated}
        })
    }

    const handleClick = (dir) => {
        switch(dir) {
            case 'allLeft':
                setUpdatedList1(prev => [...prev, ...updatedList2])
                setUpdatedList2([])
                setMoveItems({left: [], right: []})
                setCheckedStatus(defaultCheckedStatus)
                break;
            case 'allRight':
                setUpdatedList2(prev => [...prev, ...updatedList1])
                setUpdatedList1([])
                setMoveItems({left: [], right: []})
                setCheckedStatus(defaultCheckedStatus)
                break;
            case 'left':
                setUpdatedList1(prev => [...prev, ...moveItems.left])
                setUpdatedList2(prev => prev.filter(item => !moveItems.left.includes(item)))
                setMoveItems(prev => ({left: [], right: [...prev.right, ...moveItems.left]}))
                break;
            case 'right':
                setUpdatedList2(prev => [...prev, ...moveItems.right])
                setUpdatedList1(prev => prev.filter(item => !moveItems.right.includes(item)))
                setMoveItems(prev => ({right: [], left: [...prev.left, ...moveItems.right]}))
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Build a component that allows transferring of items between two lists.</p>
                <p>Each item has a checkbox that can be checked/unchecked</p>
                <p>Clicking on the double arrow buttons will transfer all items from one list to the other</p>
                <p>Clicking on the single arrow buttons will transfer only the selected items</p>
                <p>Item selection (checked) states are preserved after transferring</p>
            </div>
            <div className='card mb-4'>
                <div className="grid grid-cols-3 gap-6 items-center p-6 bg-[#0b0b1c] rounded-2xl shadow-md">
                    <div className='list-1 flex flex-col gap-3 text-white'>
                        {updatedList1.map(item => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                                <input type='checkbox' value={item} onChange={(e) => handleCheck(e, 'left')} checked={checkedStatus[item]} className='form-checkbox h-4 w-4 text-purple-500'/> {item}
                            </label>
                        ))}
                    </div>
                    <div className="actions flex flex-col items-center gap-4">
                        <button type='button' className={`text-white ${!updatedList2.length ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'}`} disabled={!updatedList2.length} onClick={() => handleClick('allLeft')}>Move All Left</button>
                        <button type='button' className={`text-white ${!moveItems.left.length ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'}`} disabled={!moveItems.left.length} onClick={() => handleClick('left')}>Move Left</button>
                        <button type='button' className={`text-white ${!moveItems.right.length ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'}`} disabled={!moveItems.right.length} onClick={() => handleClick('right')}>Move Right</button>
                        <button type='button' className={`text-white ${!updatedList1.length ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:underline'}`} disabled={!updatedList1.length} onClick={() => handleClick('allRight')}>Move All Right</button>
                    </div>
                    <div className='list-2 flex flex-col gap-3 text-white'>
                        {updatedList2.map(item => (
                            <label key={item} className="flex items-center gap-2 cursor-pointer">
                                <input type='checkbox' value={item} onChange={e => handleCheck(e, 'right')} checked={checkedStatus[item]} className='form-checkbox h-4 w-4 text-purple-500'/> {item}
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}