export const postsReducer = (state, action) => {
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
};
