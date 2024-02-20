import React, {useState} from 'react'
import './App.css'
import CustomArrayHooks from './Hooks/CustomArrayHooks'


function App() {
  const [username, setUsername, greetUser, clearUsername, usernameOnChange] = CustomArrayHooks('')
  const [email, setEmail, , clearEmail, emailOnChange] = CustomArrayHooks('')
  const [password, setPassword, , clearPassword, passwordOnChange] = CustomArrayHooks('')

  function handleOnSubmit(e){
    e.preventDefault()
    clearEmail()
    clearUsername()
    clearPassword()
    greetUser()
    
  }

  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit} className='form'>
        <input value={username} placeholder='Username' type="text" name='username' id='username' onChange={usernameOnChange} />
        <input value={email} onChange={emailOnChange} placeholder='Email' type="text" name='email' id='email' />
        <input value={password} onChange={passwordOnChange} placeholder='Password' type="text" name='password' id='password' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
