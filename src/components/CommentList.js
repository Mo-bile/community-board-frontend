import React from 'react';
import styled from 'styled-components';

const CommentListContainer = styled.div`
  margin-top: 2rem;
`;

const CommentTitle = styled.h3`
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const CommentItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CommentAuthor = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CommentContent = styled.p`
  color: #555;
`;

function CommentList({ comments }) {
  return (
    <CommentListContainer>
      <CommentTitle>Comments</CommentTitle>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <CommentAuthor>{comment.author}</CommentAuthor>
          <CommentContent>{comment.content}</CommentContent>
        </CommentItem>
      ))}
    </CommentListContainer>
  );
}

export default CommentList;

