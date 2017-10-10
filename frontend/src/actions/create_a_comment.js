import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from './'

export const CREATED_COMMENT = "CREATED_COMMENT"


const createdComment = (comment) => ({
  type: CREATED_COMMENT,
  comment
})

/*

POST /comments
  USAGE:
    Add a comment to a post

  PARAMS:
    id: Any unique ID. As with posts, UUID is probably the best here.
    timestamp: timestamp. Get this however you want.
    body: String
    author: String
    parentId: Should match a post id in the database.

*/


export const create_a_comment_async = (comment) => (

  (dispatch) => {
      const config = {
          method: "post",
          url: `${BASE_API_URL}/comments`,
          headers: AUTH_HEADER,
          withCredentials: true,
          data: {
                  id: comment.id,
                  timestamp: comment.timestamp,
                  body: comment.body,
                  author: comment.author,
                  parentId: comment.parentId
                }
      }

      axios(config)
      .then( res=> dispatch( createdComment(res.data) ) )


  }
)
