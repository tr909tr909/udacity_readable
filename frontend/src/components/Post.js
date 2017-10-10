import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import VoteButtons from './VoteButtons'
import EditButtons from './EditButtons'

const convertTime = ( time ) => {
  const date = new Date(time)
  return ( date.toDateString() )
}

const constructPost = (props) => {
  const { id, author, title, timestamp, voteScore, body, category } = props.post;
  const { edit, remove, ratePost } = props;

  const comments_count = props.comments ? props.comments.length : 0;

  return (
    <div className="card">

      <div className="card-content">

        {/* VOTE COUNT BADGE */}
        <span className="new badge post-badge "
          data-badge-caption="votes">{voteScore}</span>

        {/* EDIT BUTTONS */}
        <div className="post-buttons">
            <EditButtons
              className="display-inline"
              edit={edit}
              remove={remove}
            />

            <VoteButtons
              className="display-inline"
              ratePost={ratePost}
            />
        </div>

      </div>

      {/* CONTENT */}
      <div className="card-content">

        <Link to={`/${category}/${id}`} className="card-title">{title}</Link>
        <p>
          <span className="blue-text">{author}</span><span> {" on "} </span>
          <span className="grey-text">{convertTime(timestamp)}{":"}</span>
        </p>

        <p className="small-br">&nbsp;</p>

        <p>{body}.</p>


        <hr></hr>

      {/* FOOTER */}
        <Link to={`/${category}/${id}`} className="comments_count left">
          {comments_count === 1 ? `1 comment` : `${comments_count} comments`}
        </Link>

        <span className="grey-text post_id right">{id}</span>
        
      </div>
    </div>
  )
}

class Post extends Component {

  render () {

    return (
        <div className="post row">

          <div className="">
            {this.props.post ? constructPost(this.props) : "No Posts Yet"}
          </div>

        </div>
    )
  }

}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  edit:  PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  ratePost: PropTypes.func.isRequired
}

export default Post
