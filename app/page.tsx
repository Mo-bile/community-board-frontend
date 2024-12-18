"use client";

import styled from "styled-components";
import Header from "../components/Header";
import PostList from "../components/PostList";

const HomeContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #3498db;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Title>Welcome to Our Community Board</Title>
        <Description>
          Join our vibrant community! Share your thoughts, read interesting
          posts, and connect with others.
        </Description>
        <PostList limit={5} />
      </HomeContainer>
    </>
  );
}
