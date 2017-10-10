import { combineReducers } from 'redux'
import posts_reducer from './posts_reducer'
import categories_reducer from './categories_reducer'
// import comments_reducer from './comments_reducer'
import sorting_posts_reducer from './sorting_posts_reducer'
import create_edit_reducer from './CREATE_EDIT_REDUCER'
import filter_posts_reducer from './filter_posts_reducer'
import all_comments_reducer from './all_comments_reducer'

export default combineReducers({
  posts: posts_reducer,
  categories: categories_reducer,
  // comments: comments_reducer,
  all_comments: all_comments_reducer,
  sorting_posts: sorting_posts_reducer,
  create_edit_modal: create_edit_reducer,
  filter_posts: filter_posts_reducer
})
