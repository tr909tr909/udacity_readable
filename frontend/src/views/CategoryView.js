import React, { Component } from 'react';
import Posts from '../components/Posts_container';
import SortBy from '../components/SortBy_container'
import CategoryList from '../components/CategoryList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPostsAsync } from '../actions/fetch_posts'
import { fetchCategoriesAsync } from '../actions/fetch_categories'


class CategoryView extends Component {

  componentWillMount() {
    console.log(this.props.match.params.cat);
    this.props.fetchPostsAsync(`${this.props.match.params.cat}/posts`)
    this.props.fetchCategoriesAsync()
  }

  render () {

    return(
      <div className="category_view row">
        <p>cat view</p>
        <div className="col s12 m4 l2 offset-l1 button-collapse">

          <CategoryList
            categories={[]}
          />
        </div>

        <div className="col s12 m7 l6">
          <SortBy/>
          <Posts url={this.props.match.params.cat}/>
        </div>

      </div>

    );
  }
}

const actionsToProps = (dispatch) => (
  bindActionCreators({
    fetchPostsAsync,
    fetchCategoriesAsync
  },dispatch)
)
export default connect(null, actionsToProps)(CategoryView);
