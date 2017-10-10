import { FETCHED_POSTS } from '../actions/fetch_posts'
import { UPDATED_POST } from '../actions/update_a_post'
import { ADDED_POST } from '../actions/create_a_post'
import { DELETED_POST } from '../actions/delete_a_post'


const initialState = []

const posts_reducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCHED_POSTS:
      if (action.payload.constructor === Array) {
        return action.payload
      }
      if (action.payload.id) {
        return [action.payload]
      }
      return []

    case UPDATED_POST:
      return state.map( p => ( p.id === action.payload.id ? {...p, ...action.payload} : {...p}))

    case ADDED_POST:
      return state.concat([action.post.data])

    case DELETED_POST:
        return state.filter( p => ( p.id !== action.post.id ))

    default:
      return state
  }

}

export default posts_reducer
