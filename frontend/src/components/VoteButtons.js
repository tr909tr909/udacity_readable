import React from 'react'
import PropTypes from 'prop-types'


const VoteButtons = (props) => {
  const { ratePost } = props;

  return (
    <div className='vote_buttons'>

      <button
        onClick={() => ratePost(true)}
        className={`post_btn post_btn_right btn btn-smaller blue`}><i className="material-icons">thumb_up</i>
      </button>

      <button
        onClick={() => ratePost(false)}
        className={`post_btn post_btn_right btn btn-smaller blue`}><i className="material-icons">thumb_down</i>
      </button>

    </div>
  )
}

VoteButtons.propTypes = {
  ratePost: PropTypes.func.isRequired
}

export default VoteButtons
