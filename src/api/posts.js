import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data.data.posts;
};

export const getPost = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_URL}/posts`, postData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data.data;
};

// Add more API functions as needed

