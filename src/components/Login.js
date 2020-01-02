import React, { useState } from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

const Login = ({ setUser, setMessage }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username, password })
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem('appUser', JSON.stringify(user))
      setUsername('')
      setPassword('')
    } catch (exception) {
      setMessage('wrong username or password')
      setPassword('')
      setTimeout(() => setMessage(''), 3000)
      console.log(exception)
    }
  }

  return (
    <div>
      <h2>login to application</h2>
      <form onSubmit={login}>

        <div>
          username: <input type='text' value={username} onChange={event => setUsername(event.target.value)} />
        </div>

        <div>
          password: <input type='text' value={password} onChange={event => setPassword(event.target.value)} />
        </div>

        <div>
          <button type='submit'>login</button>
        </div>

      </form>
    </div>
  )
}

export default Login