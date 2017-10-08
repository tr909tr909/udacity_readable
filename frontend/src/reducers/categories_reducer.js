import { FETCHED_CATEGORIES_SUCCESSFULLY } from '../actions/fetch_categories'

const initialState = []

const categories_reducer = (state = initialState, action) => {

  if (action.type === FETCHED_CATEGORIES_SUCCESSFULLY) {
    return action.payload
  }

  return state
}

export default categories_reducer
