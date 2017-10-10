import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import { bindActionCreators } from 'redux';
import { fetchCategoriesAsync } from '../actions/fetch_categories';
import { filter_posts } from '../actions/filter_posts'


class CategoryListContainer extends Component {

  // componentWillMount () {
  //   this.props.fetchCategoriesAsync();
  // }

  render () {
    return (
      <CategoryList
        categories={this.props.categories}
        filter={this.props.filter_posts}
      />
    )
  }

};


const stateToProps = ({categories}) => ({
  categories
});

const actionsToProps = (dispatch) => (
  bindActionCreators({ fetchCategoriesAsync, filter_posts }, dispatch)
);

export default connect(stateToProps, actionsToProps)(CategoryListContainer);
