import { BASE_API_URL, AUTH_HEADER } from './'
import axios from 'axios'

export const FETCHED_POSTS = "FETCHED_POSTS"

export const fetchedPosts = ( res ) => ({
  type: FETCHED_POSTS,
  payload: res.data
})


export const fetchPostsAsync = ( path = "") => (

  (dispatch) => {

    const config = {
      method: "get",
      url: `${BASE_API_URL}/${path}`,
      headers: AUTH_HEADER,
      withCredentials: true,
    }

    axios(config)
    .then (res => dispatch( fetchedPosts( res ) ))
  }
)
