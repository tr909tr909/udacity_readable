import axios from 'axios'
import { BASE_API_URL, AUTH_HEADER } from './'

export const FETCHED_CATEGORIES_SUCCESSFULLY = "FETCHED_CATEGORIES_SUCCESSFULLY"

export const fetchedCategoriesSuccessfully = ( res ) => ({
  type: FETCHED_CATEGORIES_SUCCESSFULLY,
  payload: res.data.categories
})


/*
  A component can trigger this function.
  It then gets intercepted by the middleware redux-thunk which on
  completion dispatches the action.
*/


export const fetchCategoriesAsync = () => (

  (dispatch) => {

    const config = {
      method: "get",
      url: `${BASE_API_URL}/categories`,
      headers: AUTH_HEADER,
      withCredentials: true,
    }

    axios(config)
    .then(res=> dispatch( fetchedCategoriesSuccessfully(res) ))
  }
)
