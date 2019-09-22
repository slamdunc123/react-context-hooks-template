import React, { useContext } from 'react';

import { PostsContext } from '../contexts/PostsContext';

const Posts = () => {
  const { posts } = useContext(PostsContext);
  console.log(posts);

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
