import React from 'react'

export default function Users() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col'>
                <h1 className='text-5xl text-center'>Cadastro Usuario</h1>
                <input className='text-2xl' type="text" placeholder='Nome'/>
                <input className='text-2xl' type="email" placeholder='Email' />
                <input className='text-2xl' type="password" placeholder='Senha' />
                <button className='bg-gray-400 text-2xl rounded-lg' type='submit'>Cadastrar</button>
            </div>
        </div>
    )
}