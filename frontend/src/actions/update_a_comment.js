import { BASE_API_URL, AUTH_HEADER } from './'
import axios from 'axios'


export const UPDATE_COMMENT = "UPDATE_COMMENT"

export const updateComment = ( cmt ) => ({
  type: UPDATE_COMMENT,
  payload: cmt
})

/*
PUT /comments/:id
  USAGE:
    Edit the details of an existing comment

  PARAMS:
    timestamp: timestamp. Get this however you want.
    body: String
*/

export const update_a_comment_async = (comment) => (

  (dispatch) => {
    console.log(comment.body);
    const config = {
      method: "put",
      url: `${BASE_API_URL}/comments/${comment.id}`,
      headers: AUTH_HEADER,
      withCredentials: true,
      data: {
        body: comment.body,
        timestamp: Date.now()
      }
    }
    axios(config)
    .then(res => dispatch(updateComment(res.data)))
  }
)
