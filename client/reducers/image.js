export default function image(state = {
  src: false,
  size: null,
  value: null,
}, action) {
  switch (action.type) {
    case 'IMAGEUPLOAD':
      return Object.assign({}, state, { src: action.src, size: action.size, value: null });
    case 'IMAGECANCEL':
      return Object.assign({}, state, { src: '', size: null, value: "" });
    default:
      return state
  }
}
