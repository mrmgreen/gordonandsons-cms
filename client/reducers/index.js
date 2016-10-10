import { combineReducers } from 'redux';
import counter from './counter';
import text from './text';

const cmsApp = combineReducers({
  counter,
  text
})

export default cmsApp
