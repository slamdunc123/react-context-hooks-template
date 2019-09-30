import React from 'react';
import Home from './components/pages/Home';
import PostsState from './contexts/posts/PostsState';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <PostsState>
        <Home />
      </PostsState>
    </div>
  );
};

export default App;
