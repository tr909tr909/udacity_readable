import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { set_create_edit_modal } from '../actions/create_edit_modal'
import { create_post_async } from '../actions/create_a_post'
import { updatePostAsync } from '../actions/update_a_post'
import { update_a_comment_async } from '../actions/update_a_comment'
import { fetchCategoriesAsync } from '../actions/fetch_categories'
import { create_a_comment_async } from '../actions/create_a_comment'


class CreatePostForm extends Component {

  constructor(props) {
    super(props)

    const { content } = this.props.create_edit_modal;
    const dateNow = Date.now();
    const uuid = uuidv4()

    const blankPost = {
      title: '',
      body: "",
      author: "",
      id: uuid,
      timestamp: dateNow,
      category: "",
      parentId: ""
    }

    this.state = content ? content : blankPost
  }

  componentWillMount () {
    const { modal, mode } = this.props.create_edit_modal;

    this.props.fetchCategoriesAsync();

    if (modal === "comment" && mode === "create") {
      this.setState ((state) => ({...state, parentId: this.props.posts[0].id}))
    }
  }

  constructCategories() {
    return this.props.categories.map( (cat, i) => (
      <option value={cat.name} key={i}>{cat.name}</option>
    ))
  }

  handleSubmit () {
    const { modal, mode } = this.props.create_edit_modal;

    if (modal === "post" && mode === "create") {
      this.props.create_post_async(this.state)
    }
    else if (modal === "post" && mode === "edit") {
      this.props.updatePostAsync(this.state)
    }
    else if (modal === "comment" && mode === "create") {
      this.props.create_a_comment_async(this.state)
    }
    else if (modal === "comment" && mode === "edit") {
      this.props.update_a_comment_async(this.state)
    }

    this.props.close()
  }

  render () {

    const { modal, mode } = this.props.create_edit_modal;

    return (
      <div className="create row modal-content">


        <div className="col s12 m10 offset-m1 l6 offset-l3">

          {/* ID */}
          <label>{`Id: ${this.state.id}`}</label><br></br><br></br>

          {/* TITLE */}
          { modal === "post" && (
            <input
              value={this.state.title}
              placeholder="Give your post a meaningful title"
              onChange={(e)=>this.setState({title: e.target.value})}
            />
          )}

          {/* AUTHOR */}
          { mode === "create" && (
            <input
              value={this.state.author}
              placeholder="Author.."
              onChange={(e)=>this.setState({author: e.target.value})}
            />
          )}

          {/* CATEGORY CHOOSER */}
          { (modal === "post" && mode === "create") && (
            <select onChange={(e)=> this.setState({category: e.target.value})}
              value={this.state.category} name='category'>
              <option value={""} disabled>Choose a category...</option>
              {this.constructCategories()}
            </select>
          )}

          {/* TEXT AREA */}
          <textarea
            id="textarea1"
            className="materialize-textarea"
            placeholder="Let the world know what's on your mind..."
            value={this.state.body}
            onChange={(e)=>this.setState({body: e.target.value})}
          />

          {/* CANCEL */}
          <button
            onClick={()=> this.props.close()}
            className="waves-effect waves-light btn red">
            <i className="material-icons right">cancel</i>Cancel
          </button>

          {/* SUBMIT */}
          <button
            onClick={()=> {this.handleSubmit()}}
            className="waves-effect waves-light right btn tile">
            <i className="material-icons right">check</i>Submit
          </button>


        </div>

      </div>
    )
  }

}

CreatePostForm.propTypes = {

  categories: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
  create_edit_modal: PropTypes.object.isRequired
}

const stateToProps = ({create_edit_modal, categories, posts}) => ({
  create_edit_modal,
  categories,
  posts
})

const actionsToProps = (dispatch) => (
  bindActionCreators({
    close: () => set_create_edit_modal("", "", null),
    create_post_async,
    updatePostAsync,
    update_a_comment_async,
    fetchCategoriesAsync,
    create_a_comment_async
  }, dispatch)
)

export default connect(stateToProps, actionsToProps)(CreatePostForm)
