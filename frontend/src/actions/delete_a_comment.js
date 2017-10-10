import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from './'
// import { updateComment } from './update_a_comment'
export const DELETED_A_COMMENT = "DELETED_A_COMMENT"


export const deleteComment = ( cmt ) => ({
  type: DELETED_A_COMMENT,
  payload: cmt
})

/*
    DELETE /comments/:id
      USAGE:
        Sets a comment's deleted flag to 'true'
*/

export const delete_a_comment_async = (id) => (


  (dispatch) => {
    const config = {
      method: "delete",
      url: `${BASE_API_URL}/comments/${id}`,
      headers: AUTH_HEADER,
      withCredentials: true,
    }

    axios(config)
    // .then( res => dispatch(updateComment(res.data)))
    .then( res => dispatch( deleteComment(res.data) ))
  }
)
