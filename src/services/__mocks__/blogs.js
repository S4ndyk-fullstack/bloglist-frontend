const blogs = [
  {
    id: 1,
    title: 'Not a blog',
    author: 'George R.R Martin',
    url: '',
    likes: 155,
    user: {
      username: 'Kalttis',
      name: 'Santtu',
    }
  },
  {
    id: 2,
    title: 'Bloggo',
    author: 'Doggo',
    url: '',
    likes: 200,
    user: {
      username: 'Kalttis',
      name: 'Santtu',
    }
  },
  {
    id: 3,
    title: 'Best blog',
    author: 'Blogger boi',
    url: '',
    likes: 5,
    user: {
      username: 'Kalttis',
      name: 'Santtu',
    }
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = token => {
  console.log(token)
}

export default { getAll, setToken }