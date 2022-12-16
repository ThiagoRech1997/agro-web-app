import React from 'react'
import { useDispatch } from 'react-redux'

export default function Login() {
    const dispatch = useDispatch();
    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");

    function handleLogin() {
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="flex flex-col">
                <h1 className='text-3xl text-center'>Login</h1>
                <input 
                    className='text-2xl' 
                    type="email" 
                    placeholder='email' 
                    value={email} 
                    onChange={e => setEmail} 
                />
                <input className='text-2xl' type="password" placeholder='password'/>
                <button className='bg-gray-400 text-2xl rounded-lg' onClick={ handleLogin() } type="submit">Enviar</button>
            </div>
        </div>    
    )
}