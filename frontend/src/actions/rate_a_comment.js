import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from './'
import { updateComment } from './update_a_comment'

// `POST /comments/:id` | Used for voting on a comment.

const rateCommentAsync = (id, vote) => (

  ( dispatch ) => {

    const config = {
      url: `${BASE_API_URL}/comments/${id}`,
      method: 'post',
      headers:  AUTH_HEADER,
      withCredentials: true,
      data: {
        option: vote ? "upVote" : "downVote"
      }
    }

    axios(config)
    .then (res =>  dispatch( updateComment (res.data) ))
  }

)

export default rateCommentAsync;
