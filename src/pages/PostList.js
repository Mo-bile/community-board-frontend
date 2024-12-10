import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts } from '../api/mockApi';

const PostListContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const Title = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const PostItem = styled.li`
  list-style: none;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const PostTitle = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.5rem;
`;

function PostList() {
  const { data: posts, isLoading, error } = useQuery(['posts'], getPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <PostListContainer>
      <Title>Posts</Title>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>
            <PostMeta>By: {post.author}</PostMeta>
          </PostItem>
        ))}
      </ul>
    </PostListContainer>
  );
}

export default PostList;

