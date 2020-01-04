import React from 'react'
import { useField } from '../hooks/useField'
import PropTypes from 'prop-types'
import loginService from '../services/login'
import blogService from '../services/blogs'

const Login = ({ setUser, setMessage }) => {
  const username = useField('text')
  const password = useField('password')

  const login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({ username: username.value, password: password.value })
      setUser(user)
      blogService.setToken(user.token)
      window.localStorage.setItem('appUser', JSON.stringify(user))
    } catch (exception) {
      setMessage('wrong username or password')
      password.reset()
      setTimeout(() => setMessage(''), 3000)
      console.log(exception)
    }
  }

  // eslint-disable-next-line no-unused-vars
  var { reset, ...usernameProps } = username
  // eslint-disable-next-line no-redeclare
  var { reset, ...passwordProps } = password

  return (
    <div>
      <h2>login to application</h2>
      <form className='login' onSubmit={login}>

        <div className='username'>
          username: <input {...usernameProps} />
        </div>

        <div className='password'>
          password: <input {...passwordProps} />
        </div>

        <div>
          <button type='submit'>login</button>
        </div>

      </form>
    </div>
  )
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
}

export default Login