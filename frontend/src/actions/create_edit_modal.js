export const TOGGLE_CREATE_EDIT_MODAL = "TOGGLE_CREATE_EDIT_MODAL"


// modal: "post" or "comment"
// mode: "create" or "edit"

export const set_create_edit_modal = ( modal, mode, content ) => ({
  type: TOGGLE_CREATE_EDIT_MODAL,
  modal,
  mode,
  content
})
