import React from 'react';
import Posts from './components/Posts';
import PostsState from './contexts/posts/PostsState';

function App() {
  return (
    <div className='App'>
      <PostsState>
        <Posts />
      </PostsState>
    </div>
  );
}

export default App;
