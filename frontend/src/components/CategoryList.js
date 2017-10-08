import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class CategoryList extends Component {


  constructCategories () {
    const { categories } = this.props;

    if (categories.length === 0 ){
      return (
        <Link
          onClick={()=>this.props.filter("")}
          className="collection-item grey-text text-darken-4 category-list-item"
          to={""}>{"back"}
        </Link>
      )
    }
    else {
      return this.props.categories.map( (cat, i)=> {
        const path = cat.path === "/" ? "/" : `category/${cat.path}`
        return (
          <Link key={i}
            onClick={()=>this.props.filter(cat.name)}
            className="collection-item grey-text text-darken-4 category-list-item"
            to={path}>{`${cat.name}`}
          </Link>
        )
      })
    }

  }

  render () {
    return (
      <div className="categories_list collection">
        {this.constructCategories()}
      </div>
    )
  }

}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  // filter: PropTypes.func.isRequired
}

export default CategoryList
