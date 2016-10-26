import { combineReducers } from 'redux';
import text from './text';
import image from './image';

const cmsApp = combineReducers({
  text,
  image
})

export default cmsApp
