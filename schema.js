export default [
  `
  type Post {
    title: String
  }
  type RootQuery {
    posts: [Post]
  }
  type RootMutation {
    createPost(title: String!): Post
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
  `
];
