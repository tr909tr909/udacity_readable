import axios from 'axios';
import { AUTH_HEADER, BASE_API_URL } from './'
import { updatePost } from './update_a_post'


// | `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |

export const ratePostAsync = ( id, vote ) => (

  (dispatch) => {

    const config = {
      method: 'post',
      url: `${BASE_API_URL}/posts/${id}`,
      headers: AUTH_HEADER,
      withCredentials: true,
      data: {
      option: vote ? "upVote" : "downVote"}
    }

    axios(config)
    .then(res=> dispatch( updatePost( res.data ) )) // res contains the post with the new score, dispatch action to update posts

  }
)
