import React, { createContext, useState, useEffect } from 'react';
// import { postsReducer } from '../reducers/postsReducer';
import axios from 'axios';

export const PostsContext = createContext();

const PostsContextProvider = props => {
  //   const [posts, setPosts] = useState([{ id: 1, title: 'post1' }]);
  //   const [posts, dispatch] = useReducer(postsReducer, { posts: [] });
  //   console.log(posts);
  const [posts, setPosts] = useState([]);
  const postsURL = 'https://jsonplaceholder.typicode.com/posts';

  const getPosts = async () => {
    try {
      const results = await axios.get(postsURL);
      console.log(results);
      console.log(results.data);
      //   dispatch({
      //     type: 'GET_POSTS',
      //     payload: results.data
      //   });
      setPosts(results.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
