import React from 'react'

export default function Login() {
    return (
        <div className="">
            <h1>Login</h1>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <button type="submit">Enviar</button>
        </div>
    )
}