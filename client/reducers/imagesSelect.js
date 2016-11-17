export default function imagesSelect(state = {
  type: null,
  images: [],
}, action) {
  switch (action.type) {
    case 'IMAGESFORPREVIEW':
      return Object.assign({}, state, { images: action.images });
    default:
      return state
  }
}
