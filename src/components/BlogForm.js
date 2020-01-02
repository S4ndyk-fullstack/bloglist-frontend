import React, { useState } from 'react'
import blogService from '../services/blogs'

const BlogForm = ({ setMessage, blogs, setBlogs }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title,
      author,
      url
    }
    try {
      const createdBlog = await blogService.create(newBlog)
      setMessage('blog created')
      setBlogs(blogs.concat(createdBlog))
      setTitle('')
      setAuthor('')
      setUrl('')
      setTimeout(() => setMessage(''), 3000)
    } catch (exception) {
      setMessage('blog creation failed')
      setTimeout(() => setMessage(''), 3000)
      console.log(exception)
    }
  }

  return (
    <div>
      <h2>add new blog</h2>
      <form onSubmit={addBlog}>

        <div>
          title: <input type='text' value={title} onChange={event => setTitle(event.target.value)} />
        </div>

        <div>
          author: <input type='text' value={author} onChange={event => setAuthor(event.target.value)} />
        </div>

        <div>
          url: <input type='text' value={url} onChange={event => setUrl(event.target.value)} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>

      </form>
    </div>
  )
}

export default BlogForm