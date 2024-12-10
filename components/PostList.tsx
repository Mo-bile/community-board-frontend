// "use client";

// import { useQuery } from "@tanstack/react-query";
// import Link from "next/link";
// import styled from "styled-components";
// // import { getPosts } from "../lib/api";
// import { getPosts } from "../lib/";

// const PostListContainer = styled.div`
//   margin-top: 2rem;
// `;

// const PostItem = styled.div`
//   background-color: white;
//   border: 1px solid #e1e1e1;
//   border-radius: 4px;
//   padding: 1rem;
//   margin-bottom: 1rem;
// `;

// const PostTitle = styled(Link)`
//   font-size: 1.2rem;
//   color: #3498db;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const PostMeta = styled.p`
//   font-size: 0.9rem;
//   color: #777;
//   margin-top: 0.5rem;
// `;

// const ViewAllLink = styled(Link)`
//   display: block;
//   text-align: center;
//   margin-top: 1rem;
//   color: #3498db;
//   font-weight: bold;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// interface PostListProps {
//   limit?: number;
// }

// export default function PostList({ limit }: PostListProps) {
//   const {
//     data: posts,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["posts"],
//     queryFn: getPosts,
//   });

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const displayedPosts = limit ? posts.slice(0, limit) : posts;

//   return (
//     <PostListContainer>
//       {displayedPosts.map((post) => (
//         <PostItem key={post.id}>
//           <PostTitle href={`/posts/${post.id}`}>{post.title}</PostTitle>
//           <PostMeta>
//             By: {post.author} | {new Date(post.createdAt).toLocaleDateString()}
//           </PostMeta>
//         </PostItem>
//       ))}
//       {limit && posts.length > limit && (
//         <ViewAllLink href="/posts">View all posts</ViewAllLink>
//       )}
//     </PostListContainer>
//   );
// }

"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styled from "styled-components";
import { getPosts } from "../lib/api";

const PostListContainer = styled.div`
  margin-top: 2rem;
`;

const PostItem = styled.div`
  background-color: white;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const PostTitle = styled(Link)`
  font-size: 1.2rem;
  color: #3498db;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 0.5rem;
`;

const ViewAllLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #3498db;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

interface PostListProps {
  limit?: number;
}

export default function PostList({ limit }: PostListProps) {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <PostListContainer>
      {displayedPosts.map((post) => (
        <PostItem key={post.id}>
          <PostTitle href={`/posts/${post.id}`}>{post.title}</PostTitle>
          <PostMeta>
            By: {post.author} | {new Date(post.createdAt).toLocaleDateString()}
          </PostMeta>
        </PostItem>
      ))}
      {limit && posts.length > limit && (
        <ViewAllLink href="/posts">View all posts</ViewAllLink>
      )}
    </PostListContainer>
  );
}
