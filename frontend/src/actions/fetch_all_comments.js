import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from "./"

export const FETCHED_ALL_COMMENTS = 'FETCHED_ALL_COMMENTS'

/*
      GET /posts/:id/comments
        USAGE:
          Get all the comments for a single post
*/


const fetchedAllComments = ( res ) => ({
  type: FETCHED_ALL_COMMENTS,
  comments: res.data,
  postid: res.config.postID
})

export const fetch_all_comments_async = ( id ) => (

  (dispatch) => {

    const config = {
      method: "get",
      url: `${BASE_API_URL}/posts/${id}/comments`,
      headers: AUTH_HEADER, postID: id,
      withCredentials: true,
    }

    axios(config)
    .then ( (res) => dispatch( fetchedAllComments( res ) ))
    // .then( res => console.log(res.data) )
  }
)
