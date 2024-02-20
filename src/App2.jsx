import React, { useState } from 'react'
import './App.css'
import CustomObjectHooks from './Hooks/CustomObjectHooks'

function App2() {
    const username = CustomObjectHooks('')
    const email = CustomObjectHooks('')
    const password = CustomObjectHooks('')
    function handleOnSubmit(e){
        e.preventDefault()
        username.clearValue()
        email.clearValue()
        password.clearValue()
        username.greetUser()
    }
  return (
    <div className='App'>
        <form onSubmit={handleOnSubmit} className='form'>
        <input value={username.value} placeholder='Username' type="text" name='username' id='username' onChange={username.onChange} />
        <input value={email.value} onChange={email.onChange} placeholder='Email' type="text" name='email' id='email' />
        <input value={password.value} onChange={password.onChange} placeholder='Password' type="text" name='password' id='password' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App2