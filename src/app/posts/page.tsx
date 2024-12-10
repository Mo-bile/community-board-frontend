import Header from '../../components/Header'
import PostList from '../../components/PostList'
import styled from 'styled-components'

const PostsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

export default function Posts() {
  return (
    <>
      <Header />
      <PostsContainer>
        <h1>All Posts</h1>
        <PostList />
      </PostsContainer>
    </>
  )
}

