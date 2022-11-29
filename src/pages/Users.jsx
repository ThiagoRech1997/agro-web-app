import React from 'react'

export default function Users() {
    return (
        <div className='flex justify-center'>
            <input type="text" placeholder='Nome' required={true}/>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Senha' />
        </div>
    )
}