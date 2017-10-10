import React, { Component } from 'react';
import Post from '../components/Post';
import { fetchPostsAsync } from '../actions/fetch_posts'
import { fetchCommentsAsync } from '../actions/fetch_comments'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Comments from '../components/Comments_container'
import CategoryList from '../components/CategoryList'
import { set_create_edit_modal } from '../actions/create_edit_modal'
import { deletePostAsync } from '../actions/delete_a_post'
import { ratePostAsync } from '../actions/rate_a_post'


class PostDetailView extends Component {

  componentWillMount () {
    const { id } = this.props.match.params;

    this.props.fetchPostsAsync(`posts/${id}`);
    // this.props.fetchCommentsAsync(`posts/${id}/comments`)
  }

  render () {

    const { posts, set_create_edit_modal, deletePostAsync, ratePostAsync } = this.props;

    return (
      <div className="post-detail-view row">
        <p>detail view</p>
        <div className="col s12 m3 l2 offset-l1 button-collapse">
          <CategoryList categories={[{name:"home", path: "/"}]}/>
        </div>

        <div className="col s12 m7 l6">

          {posts.length === 0 && (
            <div>Post does not exist or has been deleted</div>
          )}

          {posts.length > 0 && (<Post
            post={posts[0]}
            edit={()=>set_create_edit_modal("post", "edit", posts[0])}
            remove={()=>deletePostAsync(posts[0].id)}
            ratePost={( bool )=>ratePostAsync(posts[0].id, bool)}
          />)}

          {posts.length > 0 && (
            <Comments></Comments>
          )}

        </div>

      </div>
    )
  };

};

const stateToProps = ( { posts } ) => ( { posts } )

const actionsToProps = (dispatch) => (
  bindActionCreators( {
    fetchPostsAsync,
    fetchCommentsAsync,
    set_create_edit_modal,
    deletePostAsync,
    ratePostAsync

  }, dispatch)
)

export default connect(stateToProps, actionsToProps)(PostDetailView)
