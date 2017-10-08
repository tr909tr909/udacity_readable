import axios from 'axios';
import { AUTH_HEADER, BASE_API_URL } from './'

export const DELETED_POST = "DELETED_POST";


// `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br>
// Sets the parentDeleted flag for all child comments to 'true'.

export const deletedPost = ( post ) => ({
  type: DELETED_POST,
  post
})


export const deletePostAsync = ( id ) => (

  (dispatch) => {
    const config = {
      method: "delete",
      url: `${BASE_API_URL}/posts/${id}`,
      headers: AUTH_HEADER,
      withCredentials: true,
    }
    axios(config)
    .then (res => dispatch ( deletedPost(res.data) ))
  }
)
