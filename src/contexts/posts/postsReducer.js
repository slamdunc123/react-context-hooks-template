import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
        // loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
        // loading: false
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    //   case ADD_CONTACT:
    //     return {
    //       ...state,
    //       contacts: [action.payload, ...state.contacts],
    //       loading: false
    //     };
    // case UPDATE_CONTACT:
    //     return {
    //       ...state,
    //       contacts: state.contacts.map(contact =>
    //         contact._id === action.payload._id ? action.payload : contact
    //       ),
    //       loading: false
    //     };
    //   case DELETE_CONTACT:
    //     return {
    //       ...state,
    //       contacts: state.contacts.filter(
    //         contact => contact._id !== action.payload
    //       ),
    //       loading: false
    //     };
    //   case CLEAR_CONTACTS:
    //     return {
    //       ...state,
    //       contacts: null,
    //       filtered: null,
    //       error: null,
    //       current: null
    //     };
    //   case SET_CURRENT:
    //     return {
    //       ...state,
    //       current: action.payload
    //     };
    //   case CLEAR_CURRENT:
    //     return {
    //       ...state,
    //       current: null
    //     };
    //   case FILTER_CONTACTS:
    //     return {
    //       ...state,
    //       filtered: state.contacts.filter(contact => {
    //         const regex = new RegExp(`${action.payload}`, 'gi');
    //         return contact.name.match(regex) || contact.email.match(regex);
    //       })
    //     };
    //   case CLEAR_FILTER:
    //     return {
    //       ...state,
    //       filtered: null
    //     };
    //   case CONTACT_ERROR:
    //     return {
    //       ...state,
    //       error: action.payload
    //     };
    default:
      return state;
  }
};
