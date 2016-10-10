export default function text(state = {}, action) {
  switch (action.type) {
    case 'BOLD':
      return Object.assign(state, !state.text.bold)
    case 'ITALICS':
      return state
    default:
      return state
  }
}
