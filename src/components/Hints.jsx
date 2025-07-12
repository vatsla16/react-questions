import { useState } from 'react'

export default function Hints() {
    const [flag, setFlag] = useState(false);

    return (
        <div className='hint mt-4 mb-4'>
            <div className="hint-title text-center" aria-expanded={flag} aria-controls='hint-control'>
                <button type='button' className='cursor-pointer' onClick={() => setFlag(!flag)}>Hints <span className='text-sm text-gradient'>(Click to reveal)</span></button>
            </div>
            <div className={`card hint-content ${ flag ? 'inline-block' : 'hidden'}`} id='hint-content'>
                <div className="summary">
                    <table className='hint-table w-full table-auto border-collapse space-y-2'>
                        <thead>
                            <tr className='text-left text-xs text-gray-400 uppercase tracking-wider border-b border-gray-700'>
                                <th>Hook</th>
                                <th>Think About...</th>
                                <th>Example Component</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-800'>
                            <tr>
                                <td className='font-medium'>useState</td>
                                <td>What value is changing?</td>
                                <td>Temperature converter, form, toggle</td>
                            </tr>
                            <tr>
                                <td className='font-medium'>useEffect</td>
                                <td>What side effect needs to happen?</td>
                                <td>Progress bar, data fetcher</td>
                            </tr>
                            <tr>
                                <td className='font-medium'>useRef</td>
                                <td>What do I need to persist across renders or manipulate in the DOM?</td>
                                <td>Auto-focus input, store timers</td>
                            </tr>
                            <tr>
                                <td className='font-medium'>useContext</td>
                                <td>What global data do I need?</td>
                                <td>Theme switcher, user profile</td>
                            </tr>
                            <tr>
                                <td className='font-medium'>useMemo / useCallback</td>
                                <td>What is slow or causing extra re-renders?</td>
                                <td>Converter with precision, list filters</td>
                            </tr>
                            <tr>
                                <td className='font-medium'>useReducer</td>
                                <td>Do I need structured state logic?</td>
                                <td>Multi-step wizard, complex forms</td>
                            </tr>
                            <tr>
                                <td className='font-medium'>useLayoutEffect</td>
                                <td>Do I need to measure something before layout?</td>
                                <td>Tooltip positioning, animation setup</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content">
                    <div className="p-4 rounded-md space-y-2">
                        <p className="font-semibold text-base text-white">useState</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Store user input, toggle modals, count steps, manage form state</p>
                        <p><span className="italic text-gray-400">Use when:</span> A value changes over time — like a form input or toggle state.</p>
                    </div>
                    <div className="p-4 rounded-md space-y-2">
                        <p className='font-bold text-lg mb-2 mt-2'>useEffect</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Fetch data from an API when a component loads, start a timer or interval, respond to a change in a prop or state (e.g., when `searchQuery` changes, fetch new results), cleanup: stop intervals, remove event listeners</p>
                        <p><span className="italic text-gray-400">Use when:</span> Something needs to happen *because* something else changed (or when the component mounts/unmounts).</p>
                    </div>
                    <div className="p-4 rounded-md space-y-2">
                        <p className='font-bold text-lg mb-2 mt-2'>useRef</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Focus an input field (`inputRef.current.focus()`), keep previous value of a prop or state, store a mutable timer ID, WebSocket connection, or audio object, scroll to an element</p>
                        <p><span className="italic text-gray-400">Use when:</span> You want to store a value without triggering a re-render, or directly interact with a DOM element.</p>
                    </div>
                    <div className="p-4 rounded-md space-y-2">                       
                        <p className='font-bold text-lg mb-2 mt-2'>useContext</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Theme toggles (dark/light mode), logged-in user/auth state, global settings or language, cart data in e-commerce</p>
                        <p><span className="italic text-gray-400">Use when:</span> You want to share data across multiple components without passing props through many layers.</p>
                    </div>
                    <div className="p-4 rounded-md space-y-2">
                        <p className='font-bold text-lg mb-2 mt-2'>useMemo / useCallback</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Complex calculations that only need to happen when inputs change, prevent re-rendering child components by memoizing functions, avoid recalculating filtered lists or derived values in render</p>
                        <p><span className="italic text-gray-400">Use when:</span> Something is expensive to calculate or causes re-renders you want to avoid.</p>
                    </div>
                    <div className="p-4 rounded-md space-y-2">
                        <p className='font-bold text-lg mb-2 mt-2'>useReducer</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Multi-step forms with many fields, toggling or updating deeply nested state, building undo/redo functionality, finite state machines or complex transitions</p>
                        <p><span className="italic text-gray-400">Use when:</span> You're juggling multiple related values or want Redux-style logic without Redux</p>
                    </div>
                    <div className="p-4 rounded-md space-y-2">
                        <p className='font-bold text-lg mb-2 mt-2'>useLayoutEffect</p>
                        <p><span className="italic text-gray-400">Problem Styles:</span> Measure the height of an element before layout, scroll positioning or animations, prevent flicker during DOM manipulation</p>
                        <p><span className="italic text-gray-400">Use when:</span> You need to measure something before the browser paints — like element size or position.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
// {<pre><code><input value={} /></code></pre>}