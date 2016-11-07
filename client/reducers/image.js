export default function image(state = {
  src: false,
  size: null,
}, action) {
  switch (action.type) {
    case 'IMAGEUPLOAD':
      return Object.assign({}, state, { src: action.src, size: action.size });
    case 'IMAGECANCEL':
      return Object.assign({}, state, { src: '', size: null });
    default:
      return state
  }
}
