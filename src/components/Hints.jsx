import { useState } from 'react'

export default function Hints() {
    const [flag, setFlag] = useState(false);

    return (
        <div className='hint mt-4 mb-4'>
            <div className="hint-title text-center" aria-expanded={flag} aria-controls='hint-control'>
                <button type='button' className='cursor-pointer' onClick={() => setFlag(!flag)}>Hints <span className='text-sm text-gradient'>(Click to reveal)</span></button>
            </div>
            <div className={`card text-left mt-4 hint-content ${ flag ? 'inline-block' : 'hidden'}`} id='hint-content'>
                <p className='font-bold text-lg mb-2'>useState</p>
                <p><i>Problem Styles:</i> Form handling (e.g. input value updates), Toggling UI (e.g. show/hide modal), Counter logic, Simple state management</p>
                <p><i>Use when:</i> You need to store and update values across renders.</p>
                <p className='font-bold text-lg mb-2 mt-2'>useEffect</p>
                <p><i>Problem Styles:</i> Fetching data from APIs, Setting up subscriptions or intervals, Reacting to prop or state changes, Cleanup logic (unsubscribing, clearing timers)</p>
                <p><i>Use when:</i> You need to perform side effects (anything that affects the outside world or reacts to changes)</p>
                <p className='font-bold text-lg mb-2 mt-2'>useRef</p>
                <p><i>Problem Styles:</i> Accessing DOM nodes directly (e.g., focusing an input), Keeping mutable values that don't trigger re-renders, Storing previous values between renders</p>
                <p><i>Use when:</i> You want a stable reference across renders or need to avoid re-renders.</p>
                <p className='font-bold text-lg mb-2 mt-2'>useContext</p>
                <p><i>Problem Styles:</i> Passing global data (e.g., theme, auth) without prop drilling, Managing shared state</p>
                <p><i>Use when:</i> Components need to share data without direct parent-child prop relationships.</p>
                <p className='font-bold text-lg mb-2 mt-2'>useMemo / useCallback</p>
                <p><i>Problem Styles:</i> Performance optimization, Preventing unnecessary recalculations or re-renders</p>
                <p><i>Use when:</i> Dealing with expensive computations or preventing child components from re-rendering unnecessarily.</p>
                <p className='font-bold text-lg mb-2 mt-2'>useReducer</p>
                <p><i>Problem Styles:</i> Complex state management (multiple sub-values), Building mini Redux-like state logic</p>
                <p><i>Use when:</i> State logic is complex or involves multiple transitions.</p>
                <p className='font-bold text-lg mb-2 mt-2'>useLayoutEffect</p>
                <p><i>Problem Styles:</i> Measuring layout before paint, Sync DOM updates</p>
                <p><i>Use when:</i> You need to block browser paint to perform measurements or DOM manipulations.</p>
            </div>
        </div>
    )
}
