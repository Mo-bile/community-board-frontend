import posts from '../data/posts.json';
import comments from '../data/comments.json';
import users from '../data/users.json';

export const getPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 500);
  });
};

export const getPost = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(p => p.id === parseInt(id));
      if (post) {
        const postWithComments = {
          ...post,
          comments: comments[id] || []
        };
        resolve(postWithComments);
      } else {
        reject(new Error('Post not found'));
      }
    }, 500);
  });
};

export const createPost = (postData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost = {
        id: posts.length + 1,
        ...postData,
        createdAt: new Date().toISOString()
      };
      posts.push(newPost);
      resolve(newPost);
    }, 500);
  });
};

export const createComment = ({ postId, content, author }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newComment = {
        id: comments[postId] ? comments[postId].length + 1 : 1,
        postId,
        content,
        author,
        createdAt: new Date().toISOString()
      };
      if (!comments[postId]) {
        comments[postId] = [];
      }
      comments[postId].push(newComment);
      resolve(newComment);
    }, 500);
  });
};

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.username === username);
      if (user) {
        resolve({ token: 'mock-jwt-token', userId: user.id });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
};

