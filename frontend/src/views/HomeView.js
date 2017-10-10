import React, { Component } from 'react'
import CategoryListContainer from '../components/CategoryList_container'
import Posts from '../components/Posts_container'
import SortBy from '../components/SortBy_container'


class HomeView extends Component {


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

export default HomeView;
