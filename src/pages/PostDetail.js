import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPost } from '../api/mockApi';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const PostDetailContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const PostTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1.5rem;
`;

const PostContent = styled.div`
  line-height: 1.8;
  margin-bottom: 2rem;
`;

function PostDetail() {
  const { id } = useParams();
  const { data: post, isLoading, error } = useQuery(['post', id], () => getPost(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <PostDetailContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>By: {post.author}</PostMeta>
      <PostContent>{post.content}</PostContent>
      <CommentList comments={post.comments} />
      <CommentForm postId={post.id} />
    </PostDetailContainer>
  );
}

export default PostDetail;

