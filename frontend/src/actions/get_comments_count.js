import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from './'

export const FETCHED_COMMENTS_COUNT = "FETCHED_COMMENTS_COUNT"

export const updateCommentsCount = ( postid, commentsCount ) => ({
  type: FETCHED_COMMENTS_COUNT,
  postid,
  commentsCount
})


/*
    GET /posts/:id/comments
      USAGE:
        Get all the comments for a single post

*/

export const get_comments_count_async = ( postid ) => (

  (dispatch) => {

    const config = {
      method: "get",
      url: `${BASE_API_URL}/posts/${postid}/comments`,
      headers: AUTH_HEADER,
      withCredentials: true,
    }

    axios(config)
    // .then ( res =>  console.log( res ) )
    .then ( res => dispatch( updateCommentsCount( postid, res.data.length ) ))
  }
)
