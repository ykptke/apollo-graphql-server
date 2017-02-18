import { Posts } from './connectors';

const resolveFunctions = {
  RootQuery: {
    posts() {
      return Posts.find({}, (err, docs) => {
        return docs;
      });
    },
  },
  RootMutation: {
    createPost: (_, { title }) => {
      const newTodo = new Posts({
        title,
      })
      console.log(newTodo);
      return newTodo;
    },
  },
}

export default resolveFunctions;
