import React, { Fragment, useContext, useEffect, useState } from 'react';

import PostsContext from '../../contexts/posts/postsContext';
import Spinner from '../layout/Spinner';

import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = () => {
  const postsContext = useContext(PostsContext);
  const { posts, getPosts, filtered, loading } = postsContext; //deconstruct to get posts variable and getPosts function
  console.log(posts);

  useEffect(() => {
    // useEffect like componentDidMount - runs the getPosts function from PostsState via postsContext
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (posts !== null && posts.length === 0 && !loading) {
    return <h4>Please add a post</h4>;
  }

  return (
    <Fragment>
      {posts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map(post => (
                <div key={post.id} timeout={500} className='item'>
                  <PostItem post={post} />
                </div>
              ))
            : posts.map(post => (
                <div key={post.id} timeout={500} className='item'>
                  <PostItem post={post} />
                </div>
              ))}
          {/* <PostForm /> */}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Posts;
