import React from 'react'
import PropTypes from 'prop-types'

const EditButtons = (props) => {

  return (
    <div className="edit_buttons">

      <button
        onClick={()=> props.edit()}
        className={`post_btn post_btn_left btn btn-smaller yellow darken-2`}>
        <i className="material-icons">create</i>
      </button>

      <button
        onClick={()=> props.remove()}
        className={`post_btn post_btn_left btn btn-smaller red`}>
        <i className="material-icons">delete</i>
      </button>

    </div>
  )
}

EditButtons.propTypes = {
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default EditButtons;
