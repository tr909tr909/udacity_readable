import { FETCHED_ALL_COMMENTS } from '../actions/fetch_all_comments'
import { CREATED_COMMENT } from '../actions/create_a_comment'
import { UPDATE_COMMENT } from '../actions/update_a_comment'
import { DELETED_A_COMMENT } from '../actions/delete_a_comment'

/*
  const fetchedAllComments = ( res ) => ({
    type: FETCHED_ALL_COMMENTS,
    comments: res.data,
    postid: res.config.postID
  })

  export const updateComment = ( cmt ) => ({
    type: UPDATE_COMMENT,
    payload: cmt
  })
*/


const all_comments = (state = {}, action) => {

  switch (action.type) {
    case FETCHED_ALL_COMMENTS:

      return {
        ...state,
        [action.postid]: action.comments.filter (cmt => (!cmt.parentDeleted) ).filter (cmt => (!cmt.deleted) )
      }

    case UPDATE_COMMENT:
      const postID = action.payload.parentId

      return {
        ...state,
        [postID]: state[postID].map( cmt => (cmt.id === action.payload.id ? action.payload : cmt))
      }

    case CREATED_COMMENT:
      const { parentId } = action.comment;

      return {
        ...state,
        [parentId]: state[parentId] ? [action.comment].concat(state[parentId]) : [action.comment]
      }

    case DELETED_A_COMMENT:

      return {
        ...state,
        [action.payload.parentId]: state[action.payload.parentId].filter( cmt => (cmt.id !== action.payload.id))
      }

    default:
      return state

  }
}
export default all_comments
