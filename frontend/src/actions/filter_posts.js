export const FILTER_POSTS = "FILTER_POSTS"

/*
  filter: "category"
*/

export const filter_posts = (filter) => ({
  type: FILTER_POSTS,
  filter,
})
