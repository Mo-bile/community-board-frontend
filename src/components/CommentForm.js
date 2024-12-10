import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '../api/mockApi';

const Form = styled.form`
  margin-top: 2rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #27ae60;
  }
`;

function CommentForm({ postId }) {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation(createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['post', postId]);
      setContent('');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ postId, content, author: 'Current User' }); // 실제 인증 구현 시 현재 사용자로 변경
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        required
      />
      <Button type="submit">Submit Comment</Button>
    </Form>
  );
}

export default CommentForm;

