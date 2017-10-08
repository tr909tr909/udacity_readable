import { FETCHED_COMMENTS } from '../actions/fetch_comments'
import { UPDATE_COMMENT } from '../actions/update_a_comment'
import { DELETED_POST } from '../actions/delete_a_post'
import { CREATED_COMMENT } from '../actions/create_a_comment'

const initialState = []

const comments_reducer = (state = initialState, action) => {

  switch (action.type) {

    case FETCHED_COMMENTS:
      return action.payload.data
        .filter (cmt => (!cmt.parentDeleted) )
        .filter (cmt => (!cmt.deleted) )

    case UPDATE_COMMENT:
      return state
      .map( cmt => ( cmt.id === action.payload.id ? action.payload : cmt))
      .filter( cmt => (!cmt.deleted))

    case DELETED_POST:
      return state.filter (cmt => ( cmt.parentId !== action.post.id))

    case CREATED_COMMENT:
      return state.concat([action.comment])

    default:
      return state
  }

}

export default comments_reducer;
