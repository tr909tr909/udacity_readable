import { SORT_POSTS } from '../actions/sort_posts'

const initialState = {
  criteria: 'voteScore',
  ascending: false
}

const sorting_posts_reducer = (state = initialState, action) => {

  switch (action.type) {
    case SORT_POSTS:
      return { criteria: action.criteria, ascending: action.ascending }

    default:
      return state;
  }

}

export default sorting_posts_reducer;
