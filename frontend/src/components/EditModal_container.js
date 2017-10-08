import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import CreatePostForm from './CreatePostForm_container'


const customStyles = {
  overlay : {
    backgroundColor      : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : '8%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -20%)'
  }
};


class EditModal extends Component {

  render () {

    return (
      <div className="edit_modal">

       <Modal isOpen={this.props.create_edit_modal.modal !== ""}
         contentLabel="create edit modal"
         style={customStyles}>

         <CreatePostForm/>
       </Modal>


      </div>
    )
  }
}

const stateToProps = ( {categories, create_edit_modal} ) => ({
  create_edit_modal
})

export default connect(stateToProps)(EditModal)
