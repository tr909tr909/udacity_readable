import React, { Component } from 'react';
import Posts from '../components/Posts_container';
import SortBy from '../components/SortBy_container'
import CategoryList from '../components/CategoryList'

class CategoryView extends Component {

  render () {

    return(
      <div className="category_view row">

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

export default CategoryView;
