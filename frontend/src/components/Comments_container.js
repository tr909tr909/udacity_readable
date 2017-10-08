import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Comment from './Comment'
import rateCommentAsync from '../actions/rate_a_comment'
import { set_create_edit_modal } from '../actions/create_edit_modal'
import { delete_a_comment_async } from '../actions/delete_a_comment'


class Comments extends Component {

  constructComments (comments, rateCommentAsync, set_create_edit_modal ) {

    return comments.map( (cmt, i) => (
      <Comment
        key={i}
        comment={cmt}
        edit={()=>set_create_edit_modal("comment", "edit", cmt)}
        rateCommentAsync={(bool)=>rateCommentAsync(cmt.id, bool)}
        remove={()=>this.props.delete_a_comment_async(cmt.id)}
      />
    ))
  }

  constructLeaveComment (comments, set_create_edit_modal) {

    return (
      <span>
        <span>{comments.length > 0 ? `${comments.length} comments. `: "Be the first to "}</span>

        <span
          className="inline-link"
          onClick={()=>set_create_edit_modal("comment", "create", null)}
        >
          {comments.length > 0 ? "Leave a comment.": "leave a comment."}
        </span>
      </span>
    )
  }

  render () {
    const { comments, rateCommentAsync, set_create_edit_modal } = this.props;

    return (
      <div className="comments">
        {this.constructLeaveComment(comments, set_create_edit_modal)}
        {this.constructComments(comments, rateCommentAsync, set_create_edit_modal)}
      </div>
    )
  }
}

const stateToProps = ( { comments, posts } ) => ({
  posts,
  comments: comments.map(x=>(x)).sort( (a, b) => (b.voteScore - a.voteScore))
})

const actionsToProps = (dispatch) => (
  bindActionCreators( {
    rateCommentAsync,
    set_create_edit_modal,
    delete_a_comment_async
  }, dispatch)
)

export default connect(stateToProps, actionsToProps)(Comments)
