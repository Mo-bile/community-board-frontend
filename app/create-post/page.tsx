'use client'

import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import Header from '../../components/Header'
import { createPost } from '../../lib/api'
import { useAuth } from '../../hooks/useAuth'

const CreatePostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`

const Textarea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  min-height: 200px;
`

const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { user } = useAuth()
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
      router.push('/posts')
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      mutation.mutate({ title, content, author: user.username })
    }
  }

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <>
      <Header />
      <CreatePostContainer>
        <h1>Create a New Post</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
          />
          <Button type="submit">Create Post</Button>
        </Form>
      </CreatePostContainer>
    </>
  )
}

