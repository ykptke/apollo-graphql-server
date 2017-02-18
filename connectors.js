import Posts from './model';
import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://admin:y45k65p@ds129179.mlab.com:29179/testo', (err) => {
  if (err) {
    return err;
  }
  return true;
});

export { Posts };
