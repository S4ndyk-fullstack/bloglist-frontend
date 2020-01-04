import React from 'react'
import sortBy from 'lodash/sortBy'
import blogService from '../services/blogs'
import { useField } from '../hooks/useField'

const BlogForm = ({ setMessage, blogs, setBlogs, setShowForm }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const addBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      title,
      author,
      url
    }
    try {
      const createdBlog = await blogService.create(newBlog)
      console.log(createdBlog)
      setMessage('blog created')
      setBlogs(sortBy(blogs.concat(createdBlog), 'title'))
      title.reset()
      author.reset()
      url.reset()
      setTimeout(() => setMessage(''), 3000)
    } catch (exception) {
      setMessage('blog creation failed')
      setTimeout(() => setMessage(''), 3000)
      console.log(exception)
    }
  }

  // eslint-disable-next-line no-unused-vars
  var { reset, ...titleProps } = title
  // eslint-disable-next-line no-redeclare
  var { reset, ...authorProps } = author
  // eslint-disable-next-line no-redeclare
  var { reset, ...urlProps } = url

  return (
    <div>
      <h2>add new blog</h2>
      <button type='button' onClick={() => setShowForm(false)}>cancel</button>
      <form onSubmit={addBlog}>

        <div>
          title: <input {...titleProps} />
        </div>

        <div>
          author: <input {...authorProps} />
        </div>

        <div>
          url: <input {...urlProps} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>

      </form>
    </div>
  )
}

export default BlogForm