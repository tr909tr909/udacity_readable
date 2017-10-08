import {TOGGLE_CREATE_EDIT_MODAL} from '../actions/create_edit_modal'

const initialState = {
  modal: "",
  content: null
}

const create_edit_reducer = (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_CREATE_EDIT_MODAL:
      return {
        modal: action.modal,
        mode: action.mode,
        content: action.content
      }

    default:
      return state;

  }

}

export default create_edit_reducer;
