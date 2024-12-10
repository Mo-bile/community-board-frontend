'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import styled from 'styled-components'
import Header from '../../../components/Header'
import { getPost } from '../../../lib/api'

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const PostTitle = styled.h1`
  color: #3498db;
  margin-bottom: 1rem;
`

const PostMeta = styled.p`
  color: #777;
  margin-bottom: 1.5rem;
`

const PostContent = styled.div`
  line-height: 1.6;
  margin-bottom: 2rem;
`

const CommentSection = styled.div`
  margin-top: 2rem;
`

const CommentTitle = styled.h2`
  color: #3498db;
  margin-bottom: 1rem;
`

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`

const CommentItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`

const CommentMeta = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

export default function Post() {
  const { id } = useParams()
  const { data: post, isLoading, error } = useQuery(['post', id], () => getPost(Number(id)))

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <Header />
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>By: {post.author} | {new Date(post.createdAt).toLocaleDateString()}</PostMeta>
        <PostContent>{post.content}</PostContent>
        <CommentSection>
          <CommentTitle>Comments</CommentTitle>
          <CommentList>
            {post.comments.map((comment) => (
              <CommentItem key={comment.id}>
                <CommentMeta>By: {comment.author} | {new Date(comment.createdAt).toLocaleDateString()}</CommentMeta>
                <p>{comment.content}</p>
              </CommentItem>
            ))}
          </CommentList>
        </CommentSection>
      </PostContainer>
    </>
  )
}

