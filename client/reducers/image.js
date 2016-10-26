export default function image(state = {
  src: false,
}, action) {
  switch (action.type) {
    case 'IMAGEUPLOAD':
      return Object.assign({}, state, { src: action.src })
    default:
      return state
  }
}
