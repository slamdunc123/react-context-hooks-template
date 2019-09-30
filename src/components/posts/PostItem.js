import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PostsContext from '../../contexts/posts/postsContext';

const PostItem = ({ post }) => {
  const postsContext = useContext(PostsContext);
  const { deletePost, setCurrent, clearCurrent } = postsContext;

  const { id, title, author } = post;

  const onDelete = () => {
    deletePost(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {title}{' '}
        {/* <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span> */}
      </h3>
      <ul className='list'>
        {author && (
          <li>
            <i className='fas fa-envelope-open' /> {author}
          </li>
        )}
        {/* {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )} */}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(post)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
