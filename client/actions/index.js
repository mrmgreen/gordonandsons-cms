export function counter() {
  return { type: 'INCREMENT' }
}

export function textBold() {
  return { type: 'BOLD' }
}

export function textItalics() {
  return { type: 'ITALICS' }
}

export function textHighlighted(textHighlighted) {
  return {
    type: 'TEXTHIGHLIGHTED',
    highlighted: textHighlighted
  }
}
