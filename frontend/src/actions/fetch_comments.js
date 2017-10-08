import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from "./"
export const FETCHED_COMMENTS = "FETCHED_COMMENTS"

export const fetchedComments = ( data ) => ({
  type: FETCHED_COMMENTS,
  payload: data
})


export const fetchCommentsAsync = ( path ) => (

  (dispatch) => {

    const config = {
      method: "get",
      url: `${BASE_API_URL}/${path}`,
      headers: AUTH_HEADER,
      withCredentials: true,
    }

    axios(config)
    .then ( res => dispatch( fetchedComments( res ) ))
  }
)
