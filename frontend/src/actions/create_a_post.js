import axios from 'axios';
import { BASE_API_URL, AUTH_HEADER } from './';

export const ADDED_POST = "ADDED_POST";

/*
`POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br>
**timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br>
**title** - [String] <br>
**body** - [String] <br>
**author** - [String] <br>
**category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire.

*/

const addedPost = ( post ) => ({
  type: ADDED_POST,
  post
})

export const create_post_async = ( post ) => (

  (dispatch) => {
    const config = {
      method: "post",
      url: `${BASE_API_URL}/posts`,
      headers: AUTH_HEADER,
      withCredentials: true,
      data: {
        ...post
      }

    }
    axios(config)
    .then( res => dispatch( addedPost( res ) ))
  }
)
