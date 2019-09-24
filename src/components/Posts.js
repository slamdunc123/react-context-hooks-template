import React, { useContext, useEffect } from 'react';

import PostsContext from '../contexts/posts/postsContext';
import Spinner from './layout/Spinner';

import PostsForm from './PostsForm';

const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { posts, getPosts, deletePost, loading } = postsContext; //deconstruct to get posts variable and getPosts function
  console.log(posts);

  useEffect(() => {
    // useEffect like componentDidMount - runs the getPosts function from PostsState via postsContext
    getPosts();
    // eslint-disable-next-line
  }, []);

  const handleDelete = id => {
    deletePost(id);
  };

  return (
    <div>
      {posts.length > 0 && !loading ? (
        posts.map(post => (
          <div key={post.id} onClick={() => handleDelete(post.id)}>
            {post.id} - {post.title} - {post.author}
          </div>
        ))
      ) : (
        <Spinner />
      )}
      <PostsForm />
    </div>
  );
};

export default Posts;
