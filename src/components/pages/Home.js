import React, { useContext, useEffect } from 'react';
import PostList from '../posts/PostList';
import PostForm from '../posts/PostForm';
// import PostFilter from '../posts/PostFilter';
// import AuthContext from '../../context/auth/authContext';

const Home = () => {
  //   const authContext = useContext(AuthContext);

  //   useEffect(() => {
  //     authContext.loadUser();
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <div className='grid-2'>
      <div>
        <PostForm />
      </div>
      <div>
        {/* <PostFilter /> */}
        <PostList />
      </div>
    </div>
  );
};

export default Home;
