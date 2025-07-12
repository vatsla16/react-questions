import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

// using useCallback approach
export default function NewForm() {
    const [data, setData] = useState({username: '', name: '', age: ''});
    const [submitted, setSubmitted] = useState(null);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setData(prev => ({...prev, [name]: value}));
    }, [])

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const { username, name, age } = data;
        console.log(data)
        if(username && name && age) {
            setSubmitted({id: Date.now(), ...data});
        }
    }, [data])

    const isValid = data.username && data.name && data.age;

    return (
        <>
            <div className='question mb-4'>
                <p><span className='text-gradient font-bold'>Q.</span> Grab the values from the input fields and print below as per the sample output</p>
            </div>
            <div className='card mb-4'>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='px-4 py-2' value={data.username} name='username' onChange={handleChange} placeholder='Enter Username'/>
                    <input type='text' className='px-4 py-2' value={data.name} name='name' onChange={handleChange} placeholder='Enter Full Name'/>
                    <input type='number' className='px-4 py-2' value={data.age} name='age' onChange={handleChange}/>
                    <button type='submit' disabled={!isValid} className={`btn-background bg-blue-400 text-black ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}>Submit</button>
                </form>
                
                <div className='content'>
                    {submitted ? (
                        <div className="mt-4">
                            <p className='text-lg'>Here is your form fields: </p>
                            <ul className='list-disc ps-6'>
                                <li>Username: {submitted.username}</li>
                                <li>Full Name: {submitted.name}</li>
                                <li>Age: {submitted.age}</li>
                            </ul>
                        </div>
                    ) : (
                        <div className='mt-4'>
                            <p className='text-lg'>Please fill the form</p>
                        </div>
                    )}
                </div>
            </div>
            <Link className='btn-primary' to="/">Home</Link>
        </>
    )
}

// Using useRef approach
// export default function NewForm() {
//     const [content, setContent] = useState(null);
//     const idRef = useRef({username: null, name: null, age: null});

//     const printForm = () => {
//         const {username, name, age} = idRef.current
//         if(username.value && name.value && age.value) {
//             setContent({id: 1, username: username.value, name: name.value, age: age.value})
//         }
//     }
//     const isValid = content.username && content.name && content.age;

//     return (
//         <>
//             <div className='question mb-4'>
//                 <p><span className='text-gradient font-bold'>Q.</span> Grab the values from the input fields and print below as per the sample output</p>
//             </div>
//             <div className='card mb-4'>
//                 <div>
//                     <input type='text' ref={el => (idRef.current.username = el)} placeholder='Enter username' className='px-4 py-2' />
//                     <input type='text' ref={el => (idRef.current.name = el)} placeholder='Enter Full Name' className='px-4 py-2' />
//                     <input type='number' ref={el => (idRef.current.age = el)} placeholder='Enter age' className='px-4 py-2' />
//                     <button type='button' disabled={!isValid} className={`btn-background bg-blue-400 text-black ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => printForm()}>
//                         Submit
//                     </button>
//                 </div>
                
//                 <div className='content'>
//                     {content != null ? (
//                         <div className='mt-3'>
//                             <p className='text-lg mb-3'>Here are your fields:</p>
//                             <ul key={content.id} className='list-disc ms-4 mt-3 text-white'>
//                                 <li>{content.username}</li>
//                                 <li>{content.name}</li>
//                                 <li>{content.age}</li>
//                             </ul>
//                         </div>
//                     ) : (
//                         <div className='text-lg mt-3'>Please fill all the fields in the form</div>
//                     )}
                    
//                 </div>
//             </div>
//             <Link className='btn-primary' to="/">Home</Link>
//         </>
//     )
// }