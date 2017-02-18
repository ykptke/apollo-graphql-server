import Mongoose from 'mongoose';

const PostsSchema = Mongoose.Schema({
  title: String,
});

const Posts = Mongoose.model('Posts', PostsSchema);

export default Posts;
