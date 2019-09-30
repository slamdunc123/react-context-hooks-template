import React, { useState, useContext, useEffect } from 'react';
import PostsContext from '../../contexts/posts/postsContext';

const PostForm = postData => {
  // console.log(postData.post);
  const postsContext = useContext(PostsContext);

  const { addPost, updatePost, clearCurrent, current } = postsContext;

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        title: '',
        author: ''
      });
    }
  }, [postsContext, current]);

  const [post, setPost] = useState({
    title: '',
    author: ''
  });

  const { title, author } = post;
  console.log(title);

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPost(post);
    } else {
      updatePost(post);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Author'
        name='author'
        value={author}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value={current ? 'Update Post' : 'Add Post'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default PostForm;
