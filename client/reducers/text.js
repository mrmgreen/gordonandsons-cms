export default function text(state = {
  bold: false,
  italics: false,
  underline: false,
  textHighlighted: null,
}, action) {
  switch (action.type) {
    case 'BOLD':
      return Object.assign({}, state, { bold: !state.bold })
    case 'ITALICS':
      return Object.assign({}, state, { italics: !state.italics })
    case 'UNDERLINE':
      return Object.assign({}, state, { underline: !state.underline })
    case 'HIGHLIGHTED':
      return Object.assign({}, state, { textHighlighted: action.textHighlighted})
    default:
      return state
  }
}
