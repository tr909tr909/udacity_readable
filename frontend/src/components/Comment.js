import React from 'react'
import EditButtons from './EditButtons'
import VoteButtons from './VoteButtons'
import PropTypes from 'prop-types'

const convertTime = ( time ) => {
  const date = new Date(time)
  return ( date.toDateString() )
}


const Comment = (props) => {

  const { author, id, timestamp, body, voteScore } = props.comment;
  const { edit, remove, rateCommentAsync } = props;

  return (
    <div className="comment card">

      <div className="card-content">

        {/* VOTES BADGE */}
        <span className="new badge post-badge "
          data-badge-caption="votes">{voteScore}
        </span>


        {/* EDIT BUTTONS */}
        <div className="post-buttons">
            <EditButtons
              className="display-inline"
              edit={edit}
              remove={remove}
            />

            <VoteButtons
              className="display-inline"
              ratePost={rateCommentAsync}
            />
        </div>

        {/* CONTENT */}
        <br></br>
        <span className="blue-text">{author}</span> <span>{" on "}</span>
        <span className="grey-text">{convertTime(timestamp)}{":"}</span>

        <p>{body}</p>

        <span className="grey-text post_id right">{id}</span>
      </div>

    </div>
  )
}

Comment.propTypes = {
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  rateCommentAsync: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired
}

export default Comment;
