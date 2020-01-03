import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import BlogList from './components/BlogList'
import blogService from './services/blogs'

const App = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const storagedUser = window.localStorage.getItem('appUser')
    if (storagedUser) {
      const user = JSON.parse(storagedUser)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <p>{message}</p>
      {
        user === null ?
          <Login setUser={setUser} setMessage={setMessage} />
          :
          <BlogList user={user} setUser={setUser} setMessage={setMessage} />
      }
    </div>
  )
}

export default App
