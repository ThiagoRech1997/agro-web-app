import React from 'react'

export default function Login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="flex flex-col">
                <h1 className='text-3xl text-center'>Login</h1>
                <input className='text-2xl' type="email" placeholder='email'/>
                <input className='text-2xl' type="password" placeholder='password'/>
                <button className='bg-gray-400 text-2xl rounded-lg' type="submit">Enviar</button>
            </div>
        </div>    
    )
}