import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Comment from './Comment'
import rateCommentAsync from '../actions/rate_a_comment'
import { set_create_edit_modal } from '../actions/create_edit_modal'
import { delete_a_comment_async } from '../actions/delete_a_comment'


class Comments extends Component {

  constructComments (all_comments, rateCommentAsync, set_create_edit_modal ) {

    return all_comments.map( (cmt, i) => (
      <Comment
        key={i}
        comment={cmt}
        edit={()=>set_create_edit_modal("comment", "edit", cmt)}
        rateCommentAsync={(bool)=>rateCommentAsync(cmt.id, bool)}
        remove={()=>this.props.delete_a_comment_async(cmt.id)}
      />
    ))
  }

  constructLeaveComment (all_comments, set_create_edit_modal) {

    return (
      <span>
        <span>{all_comments.length > 0
            ? `${all_comments.length} comment${all_comments.length === 1 ? "": "s"}. `
            : "Be the first to "}
        </span>

        <span
          className="inline-link"
          onClick={()=>set_create_edit_modal("comment", "create", null)}
        >
          {all_comments.length > 0 ? "Leave a comment.": "leave a comment."}
        </span>
      </span>
    )
  }

  render () {

    const { all_comments, rateCommentAsync, set_create_edit_modal } = this.props;

    return (
      <div className="comments">
        {this.constructLeaveComment(all_comments, set_create_edit_modal)}
        {this.constructComments(all_comments, rateCommentAsync, set_create_edit_modal)}
      </div>
    )
  }
}



const stateToProps = ( { all_comments, posts } ) => ({
  posts,
  all_comments: all_comments[posts[0].id] ? all_comments[posts[0].id].map(x=>(x)).sort( (a, b) => (b.voteScore - a.voteScore)) : [],
})

const actionsToProps = (dispatch) => (
  bindActionCreators( {
    rateCommentAsync,
    set_create_edit_modal,
    delete_a_comment_async
  }, dispatch)
)

export default connect(stateToProps, actionsToProps)(Comments)
