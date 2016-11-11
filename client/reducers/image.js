export default function image(state = {
  src: false,
  size: null,
  file: null,
  value: null,
}, action) {
  switch (action.type) {
    case 'IMAGEUPLOAD':
      return Object.assign({}, state, { src: action.src, size: action.size, file: action.file, value: null, });
    case 'IMAGECANCEL':
      return Object.assign({}, state, { src: '', size: null, value: "" });
    default:
      return state
  }
}
