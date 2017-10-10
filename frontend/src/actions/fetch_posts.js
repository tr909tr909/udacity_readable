import { BASE_API_URL, AUTH_HEADER } from './'
import { fetch_all_comments_async } from './fetch_all_comments'
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
    .then (res => {
      dispatch( fetchedPosts( res ) );
      return res
    })
    .then ( res => {
      // console.log(res.data.constructor);
      // console.log("fetch res", res.data);
      const arr = res.data.constructor === Array ? res.data : [res.data]
      arr.forEach( post => dispatch( fetch_all_comments_async(post.id) ) )
    })
  }
)
