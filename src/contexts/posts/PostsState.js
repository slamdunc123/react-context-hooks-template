import React, { useReducer } from 'react';
import axios from 'axios';
import PostsContext from './postsContext';
import postsReducer from './postsReducer';
// import {
//   GET_CONTACTS,
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   UPDATE_CONTACT,
//   FILTER_CONTACTS,
//   CLEAR_CONTACTS,
//   CLEAR_FILTER,
//   CONTACT_ERROR
// } from '../types';

const PostsState = props => {
  const initialState = {
    posts: []
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);
  const postsURL = 'http://localhost:3100/posts';
  // get posts
  const getPosts = async () => {
    try {
      const res = await axios.get(postsURL);

      dispatch({
        type: 'GET_POSTS',
        payload: res.data
      });
    } catch (err) {
      //   dispatch({
      //     type: CONTACT_ERROR,
      //     payload: err.response.msg
      //   });
    }
  };

  // add post

  const addPost = async post => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post(postsURL, post, config);

      dispatch({
        type: 'ADD_POST',
        payload: res.data
      });
    } catch (err) {
      // dispatch({
      //   type: CONTACT_ERROR,
      //   payload: err.response.msg
      // });
    }
  };

  //   delete post
  const deletePost = async id => {
    try {
      await axios.delete(postsURL + '/' + id);

      dispatch({
        type: 'DELETE_POST',
        payload: id
      });
    } catch (err) {}
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        getPosts,
        addPost,
        deletePost
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
