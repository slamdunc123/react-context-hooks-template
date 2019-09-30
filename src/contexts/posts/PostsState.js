import React, { useReducer } from 'react';
import axios from 'axios';
import PostsContext from './postsContext';
import postsReducer from './postsReducer';
import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_POST
  // FILTER_CONTACTS,
  // CLEAR_CONTACTS,
  // CLEAR_FILTER,
  // CONTACT_ERROR
} from '../types';

const PostsState = props => {
  const initialState = {
    posts: null,
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(postsReducer, initialState);
  const postsURL = 'http://localhost:3100/posts';
  // get posts
  const getPosts = async () => {
    try {
      const res = await axios.get(postsURL);
      console.log(res.data);

      dispatch({
        type: GET_POSTS,
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
    try {
      const res = await axios.post(postsURL, post);
      console.log(res.data);

      dispatch({
        type: ADD_POST,
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
        type: DELETE_POST,
        payload: id
      });
    } catch (err) {}
  };

  // update post

  const updatePost = async post => {
    try {
      const res = await axios.put(postsURL + '/' + post.id, post);
      console.log(res.data);

      dispatch({
        type: UPDATE_POST,
        payload: res.data
      });
    } catch (err) {
      // dispatch({
      //   type: CONTACT_ERROR,
      //   payload: err.response.msg
      // });
    }
  };

  // Set Current Post
  const setCurrent = post => {
    dispatch({ type: SET_CURRENT, payload: post });
  };

  // Clear Current Post
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        filtered: state.filtered,
        getPosts,
        addPost,
        deletePost,
        updatePost,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState;
