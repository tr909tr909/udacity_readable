import axios from 'axios';
import { BASE_API_URL, AUTH_HEADER } from './'


export const UPDATED_POST = "UPDATED_POST"

export const updatePost = ( post ) => ({
  type: UPDATED_POST,
  payload: post
})


// `PUT /posts/:id` | Edit the details of an existing post.
// **title** - [String] <br>
// **body** - [String] |


export const updatePostAsync = ( post ) => {
  const url = `${BASE_API_URL}/posts/${post.id}`
  console.log(url);

  const config = {
    method: "put",
    url: url,
    headers: AUTH_HEADER,
    withCredentials: true,
    data: {
      title: post.title,
      body: post.body
    }
  }
  return (dispatch) => {
    axios(config)
    .then( res => dispatch( updatePost(res.data) ))
  }
}
