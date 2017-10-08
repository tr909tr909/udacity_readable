export const SORT_POSTS = "SORT_POSTS"


export const sortPosts = ( criteria, ascending = false ) => ({
  type: SORT_POSTS,
  criteria,
  ascending
})

// export default sortPosts
