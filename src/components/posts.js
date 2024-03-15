import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error al obtener las publicaciones:', error);
      });
  }, []);

  return (
    <div>
      <h1>Publicaciones</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;