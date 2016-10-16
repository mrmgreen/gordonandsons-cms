export default function text(state = {
  bold: false,
  italics: false,
  textHighlighted: null,
}, action) {
  switch (action.type) {
    case 'BOLD':
      return Object.assign({}, state, { bold: !state.bold })
    case 'ITALICS':
      return Object.assign({}, state, { italics: !state.italics })
    case 'HIGHLIGHTED':
      return Object.assign({}, state, { textHighlighted: action.textHighlighted})
    default:
      return state
  }
}
