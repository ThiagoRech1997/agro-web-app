import React from 'react'

export default function Users() {
    return (
        <div className='flex justify-center'>
            <h1>Cadastro</h1>
            <input type="text" placeholder='Nome' required={true}/>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Senha' />
            <button type='submit'>Cadastrar</button>
        </div>
    )
}