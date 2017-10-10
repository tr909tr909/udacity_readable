import React, { Component } from 'react'
import CategoryListContainer from '../components/CategoryList_container'
import Posts from '../components/Posts_container'
import SortBy from '../components/SortBy_container'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPostsAsync } from '../actions/fetch_posts'
import { fetchCategoriesAsync } from '../actions/fetch_categories'


class HomeView extends Component {

  componentWillMount() {
    this.props.fetchPostsAsync("posts")
    this.props.fetchCategoriesAsync()
  }

  render () {
    return (
      <div className="home row">
        <p>home view</p>
        <div className="col s12 m3 l2 offset-l1 button-collapse">
          <CategoryListContainer/>
        </div>

        <div className="col s12 m8 l6">
          <SortBy/>
          <Posts url={""}/>
        </div>

      </div>
    )
  }
}
const actionsToProps = (dispatch) => (
  bindActionCreators({
    fetchPostsAsync,
    fetchCategoriesAsync
  },dispatch)
)
export default connect(null, actionsToProps)(HomeView);
