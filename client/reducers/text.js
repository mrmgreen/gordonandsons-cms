export default function text(state = {}, action) {
  switch (action.type) {
    case 'BOLD':
      return Object.assign({}, state, { bold: !state.bold })
    case 'ITALICS':
      return Object.assign({}, state, { italics: !state.italics })
    default:
      return state
  }
}
