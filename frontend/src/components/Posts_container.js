import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Post from './Post'
import { fetchPostsAsync } from '../actions/fetch_posts'
import { ratePostAsync } from '../actions/rate_a_post'
import { deletePostAsync } from '../actions/delete_a_post'
import { set_create_edit_modal } from '../actions/create_edit_modal'
import PropTypes from 'prop-types'

class Posts extends Component {

  constructPosts () {

    const { posts, set_create_edit_modal,
            deletePostAsync, ratePostAsync
          } = this.props;

    if (posts.length > 0) {
      return posts.map( (post, i) => (
        <Post
          key={i}
          post={post}
          edit={()=>set_create_edit_modal("post", "edit", post)}
          remove={()=>deletePostAsync(post.id)}
          ratePost={( bool )=>ratePostAsync(post.id, bool)}
          comments={this.props.all_comments[post.id]}
        />
      ))
    }
    else {
      return <div><br></br>No posts yet...</div>
    }
  }

  render () {

    return(
      <div className="category_view">
        {this.constructPosts()}
      </div>
    )
  }
}


const mapStateToProps = ( { posts, sorting_posts, filter_posts, all_comments } ) => {

  let sorted = []
  const { criteria, ascending } = sorting_posts;

  if (ascending) {
    sorted = posts.map(x=>(x)).sort( (a, b) => ( a[criteria] - b[criteria] ))
  }
  else {
    sorted = posts.map(x=>(x)).sort( (a, b) => ( b[criteria] - a[criteria] ))
  }
  return {
    posts: sorted.filter( p => {
      if (filter_posts.filter === "") {
        return true;
      }else if (p.category === filter_posts.filter) {
        return true
      } else {return false }

    }),
    all_comments
  }
}

const actionsToProps = (dispatch) => (
  bindActionCreators( {
    fetchPostsAsync,
    deletePostAsync,
    ratePostAsync,
    set_create_edit_modal
  }, dispatch)
)

Posts.propTypes = {
  url: PropTypes.string.isRequired
}

export default connect(mapStateToProps, actionsToProps)(Posts);
