import { combineReducers } from 'redux';
import text from './text';
import image from './image';
import imagesSelect from './imagesSelect';

const cmsApp = combineReducers({
  text,
  image,
  imagesSelect
})

export default cmsApp
