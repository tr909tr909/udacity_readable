import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sortPosts } from '../actions/sort_posts'
import  { set_create_edit_modal }  from '../actions/create_edit_modal'


class SortBy extends Component {

  constructor (props) {

    super(props)
    this.state = {
      sortCriteria: "",
      filters: [
        {name:"votes", value:"voteScore"},
        {name:"date", value:"timestamp"},
      ]
    }
  }

  constructCategories() {
    return this.state.filters.map( (filter, i) => (
      <option value={filter.value} key={i}>{filter.name}</option>
    ))
  }

  render () {

    const { criteria } = this.props.sorting_posts;
    const { sortPosts } = this.props
    return (
      <div className="sort-by display-inline">



        {/* CREATE A POST */}
        <button
          className={`${""} btn create_post display-inline right`}
          onClick={()=>this.props.set_create_edit_modal("post", "create", null)}
        >
          Create a Post
        </button>


        {/* SORT BY */}
        <select
          onChange={(e)=>sortPosts(e.target.value)}
          value={criteria}
          name='category'
          className="select_sort display-inline"
        >
          <option value={""} disabled>Sort by...</option>
          {this.constructCategories()}
        </select>


      </div>
    )
  }
}

const stateToProps = ({sorting_posts}) => ({
  sorting_posts
})

const actionsToProps = (dispatch) => (
  bindActionCreators({
    sortPosts,
    set_create_edit_modal
 }, dispatch)
)


export default connect(stateToProps, actionsToProps)(SortBy);
