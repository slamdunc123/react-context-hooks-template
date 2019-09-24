import React, { useState, useContext } from 'react';
import PostsContext from '../contexts/posts/postsContext';

const PostsForm = () => {
  const postsContext = useContext(PostsContext);

  const { addPost } = postsContext;

  const [post, setPost] = useState({
    title: '',
    author: ''
  });

  //   const { title, author } = post;

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
    console.log(post);
    addPost(post);
  };
  return (
    <div>
      <div>Posts Form</div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Title'
          name='title'
          //   value={title}
          onChange={onChange}
        />
        <input
          type='text'
          placeholder='Author'
          name='author'
          //   value={author}
          onChange={onChange}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default PostsForm;
