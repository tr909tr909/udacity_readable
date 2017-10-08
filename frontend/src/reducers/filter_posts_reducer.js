import { FILTER_POSTS } from '../actions/filter_posts'

const initialState = {
  filter: "",
}

const filter_posts_reducer = (state = initialState, action)  => {
  switch (action.type) {
    case FILTER_POSTS:
      return { filter: action.filter }
    default:
      return state;

  }
}

export default filter_posts_reducer
