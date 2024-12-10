// import axios from 'axios'

// const API_URL = 'http://localhost:3000/api'

// export interface Post {
//   id: number
//   title: string
//   content: string
//   author: string
//   createdAt: string
// }

// export interface Comment {
//   id: number
//   content: string
//   author: string
//   createdAt: string
// }

// export const getPosts = async (): Promise<Post[]> => {
//   const response = await axios.get(`${API_URL}/posts`)
//   return response.data
// }

// export const getPost = async (id: number): Promise<Post & { comments: Comment[] }> => {
//   const response = await axios.get(`${API_URL}/posts/${id}`)
//   return response.data
// }

// export const createPost = async (postData: Omit<Post, 'id' | 'createdAt'>): Promise<Post> => {
//   const response = await axios.post(`${API_URL}/posts`, postData)
//   return response.data
// }

// export const createComment = async (postId: number, commentData: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> => {
//   const response = await axios.post(`${API_URL}/posts/${postId}/comments`, commentData)
//   return response.data
// }

// export const login = async (username: string, password: string): Promise<{ token: string; userId: number }> => {
//   const response = await axios.post(`${API_URL}/login`, { username, password })
//   return response.data
// }

// export const signup = async (username: string, email: string, password: string): Promise<{ token: string; userId: number }> => {
//   const response = await axios.post(`${API_URL}/signup`, { username, email, password })
//   return response.data
// }


// mock 데이터 기준
import axios from 'axios'
import posts from '../src/data/posts.json'
import comments from '../src/data/comments.json'
import users from '../src/data/users.json'

const API_URL = 'http://localhost:3000/api'

export interface Post {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
}

export interface Comment {
  id: number
  content: string
  author: string
  createdAt: string
}

export const getPosts = async (): Promise<Post[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts)
    }, 500)
  })
}

export const getPost = async (id: number): Promise<Post & { comments: Comment[] }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(p => p.id === id)
      if (post) {
        const postComments = comments[id.toString()] || []
        resolve({ ...post, comments: postComments })
      } else {
        reject(new Error('Post not found'))
      }
    }, 500)
  })
}

export const createPost = async (postData: Omit<Post, 'id' | 'createdAt'>): Promise<Post> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost = {
        id: posts.length + 1,
        ...postData,
        createdAt: new Date().toISOString()
      }
      posts.push(newPost)
      resolve(newPost)
    }, 500)
  })
}

export const createComment = async (postId: number, commentData: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newComment = {
        id: comments[postId.toString()] ? comments[postId.toString()].length + 1 : 1,
        ...commentData,
        createdAt: new Date().toISOString()
      }
      if (!comments[postId.toString()]) {
        comments[postId.toString()] = []
      }
      comments[postId.toString()].push(newComment)
      resolve(newComment)
    }, 500)
  })
}

export const login = async (username: string, password: string): Promise<{ token: string; userId: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.username === username)
      if (user) {
        resolve({ token: 'mock-jwt-token', userId: user.id })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 500)
  })
}

export const signup = async (username: string, email: string, password: string): Promise<{ token: string; userId: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = {
        id: users.length + 1,
        username,
        email
      }
      users.push(newUser)
      resolve({ token: 'mock-jwt-token', userId: newUser.id })
    }, 500)
  })
}

